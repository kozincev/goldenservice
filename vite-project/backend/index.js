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
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/catalog-items', async (req, res) => {
    try {
        // Преобразуем параметры в числа
        const page = parseInt(req.query.page) || 1;
        const itemsPerPage = parseInt(req.query.itemsPerPage) || 9;
        const priceFrom = parseInt(req.query.priceFrom) || 0;
        const priceTo = parseInt(req.query.priceTo) || 40000;

        const offset = (page - 1) * itemsPerPage;
        const categories = req.query.categories || '';
        const categoryList = categories.split(',').filter(Boolean);

        const conditions = ['price BETWEEN $1 AND $2'];
        const queryParams = [priceFrom, priceTo];

        if (categoryList.length > 0) {
            conditions.push(`title = ANY($${queryParams.length + 1})`);
            queryParams.push(categoryList);
        }

        const queryText = `
            SELECT *, 
                   (old_price IS NOT NULL AND old_price > price) as sale 
            FROM catalog_items 
            WHERE ${conditions.join(' AND ')}
            ORDER BY id 
            LIMIT $${queryParams.length + 1}
            OFFSET $${queryParams.length + 2}
        `;

        const countQueryText = `
            SELECT COUNT(*) 
            FROM catalog_items 
            WHERE ${conditions.join(' AND ')}
        `;

        const [itemsResult, countResult] = await Promise.all([
            pool.query(queryText, [...queryParams, itemsPerPage, offset]),
            pool.query(countQueryText, queryParams)
        ]);

        res.json({
            items: itemsResult.rows,
            total: parseInt(countResult.rows[0].count)
        });
    } catch (error) {
        console.error('Error fetching catalog items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
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
app.post('/api/wcyb', async (req, res) => {
    try {
        const {
            wcyb_name,
            wcyb_email
        } = req.body;

        const result = await pool.query(
            `INSERT INTO wcyb
          (wcyb_name, wcyb_email)
         VALUES ($1,$2)
         RETURNING *`,
            [wcyb_name, wcyb_email]
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
