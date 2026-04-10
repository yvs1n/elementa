const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgresql://neondb_owner:npg_RIW1KMOsT7jk@ep-silent-forest-a1xlf3pg.ap-southeast-1.aws.neon.tech/neondb?sslmode=require';

const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false }
});

async function cleanup() {
    const client = await pool.connect();
    try {
        console.log("Cleaning up stale U1R/U2R entries...");
        const res = await client.query("DELETE FROM papers WHERE title LIKE '%U1R%' OR title LIKE '%U2R%'");
        console.log(`Deleted ${res.rowCount} stale entries.`);
    } catch (err) {
        console.error(err);
    } finally {
        client.release();
        await pool.end();
    }
}

cleanup().catch(console.error);
