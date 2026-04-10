require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function run() {
    try {
        const res = await pool.query('SELECT upcoming_exam_title, upcoming_exam_subtitle FROM users LIMIT 1;');
        console.log('Columns exist:', res.rows);
    } catch (e) {
        console.log('Error:', e);
    }
    await pool.end();
}

run();
