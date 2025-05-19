const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const path = require('path');
const PORT = process.env.PORT || 3010;

const app = express();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
});

app.use(cors());
app.use(express.json());


app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Получаем сам товар
        const productResult = await pool.query('SELECT * FROM product WHERE id = $1', [id]);
        if (productResult.rows.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        const product = productResult.rows[0];

        // Получаем изображения из таблицы slider
        const imagesResult = await pool.query(
            'SELECT image_url FROM slider WHERE product_id = $1',
            [id]
        );

        // Добавляем изображения в объект товара
        product.thumbnails = imagesResult.rows;

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.use('/imgs', express.static(path.join(__dirname, '../vite-project/frontend/public/imgs')));

app.get('/api/slider/:productId', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM slider WHERE product_id = $1',
            [req.params.productId]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.post('/api/orders', async (req, res) => {
    try {
        const {
            lastName,
            firstName,
            phone,
            email,
            delivery,
            payment,
            comment,
            product_id,
            quantity,
            total_price
        } = req.body;

        const result = await pool.query(
            `INSERT INTO orders (
                last_name, 
                first_name, 
                phone, 
                email, 
                delivery_method, 
                payment_method, 
                comment, 
                product_id, 
                quantity, 
                total_price
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [
                lastName,
                firstName,
                phone,
                email,
                delivery,
                payment,
                comment,
                product_id,
                quantity,
                total_price
            ]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});
