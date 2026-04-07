const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function run() {
    const hashed = await bcrypt.hash('student2', 10);
    await pool.query(
        "INSERT INTO users (email, password, role, display_name) VALUES ($1, $2, 'student', 'Student 2') ON CONFLICT (email) DO NOTHING",
        ['student2@gmail.com', hashed]
    );
    console.log("User created");
    process.exit(0);
}
run();
