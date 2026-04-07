const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_RIW1KMOsT7jk@ep-silent-forest-a1xlf3pg.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
    ssl: { rejectUnauthorized: false }
});

async function migrate() {
    try {
        console.log("Migrating Admin Tables...");
        await pool.query('ALTER TABLE papers ADD COLUMN IF NOT EXISTS teacher_insights TEXT, ADD COLUMN IF NOT EXISTS insights_header TEXT;');
        await pool.query(`
            CREATE TABLE IF NOT EXISTS admin_overrides (
                id SERIAL PRIMARY KEY,
                user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                paper_id INTEGER REFERENCES papers(id) ON DELETE CASCADE,
                teacher_insights TEXT,
                insights_header TEXT,
                UNIQUE(user_id, paper_id)
            )
        `);
        console.log('Migration successful');
    } catch(e) {
        console.error(e);
    } finally {
        await pool.end();
    }
}
migrate();
