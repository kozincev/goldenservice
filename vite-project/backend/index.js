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
    password: '12345',
    port: 5432,
});

app.use(cors());
app.use(express.json());


app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM product WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(result.rows[0]);
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
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
});
