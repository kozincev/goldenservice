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


app.get('/api/models', async (req, res) => {
    const q = req.query.q || '';
    try {
        const { rows } = await pool.query(
            `SELECT DISTINCT model 
           FROM product 
          WHERE model ILIKE $1
          ORDER BY model
          LIMIT 10`,
            [q + '%']
        );

        res.json(rows.map(r => r.model));
    } catch (err) {
        console.error('Error fetching models:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/api/product/price', async (req, res) => {
    const model = req.query.model;
    if (!model) {
        return res.status(400).json({ error: 'Параметр model обязателен' });
    }
    try {
        const result = await pool.query(
            `SELECT price
               FROM product
              WHERE model = $1
              LIMIT 1`,
            [model]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Модель не найдена' });
        }

        const priceString = result.rows[0].price;
        res.json({ price: priceString });
    } catch (err) {
        console.error('Ошибка в /api/product/price:', err);
        res.status(500).json({ error: err.message });   // ← возвращаем в ответе текст ошибки
    }
});


app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;


        const productResult = await pool.query('SELECT * FROM product WHERE id = $1', [id]);
        if (productResult.rows.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        const product = productResult.rows[0];


        const imagesResult = await pool.query(
            'SELECT image_url FROM slider WHERE product_id = $1',
            [id]
        );


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
            city,
            branch,
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
           city,            
           branch,          
           product_id,
           quantity,
           total_price
         ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)
         RETURNING *`,
            [
                lastName,
                firstName,
                phone,
                email,
                delivery,
                payment,
                comment,
                city,
                branch,
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
app.post('/api/wholesale', async (req, res) => {
    try {
        const {
            customer_name,
            company_name,
            phone,
            product_name,
            quantity,
            logo,
            installation
        } = req.body;

        const result = await pool.query(
            `INSERT INTO wholesale_requests
          (customer_name, company_name, phone, product_name, quantity, logo, installation)
         VALUES ($1,$2,$3,$4,$5,$6,$7)
         RETURNING *`,
            [customer_name, company_name, phone, product_name, quantity, logo, installation]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});
