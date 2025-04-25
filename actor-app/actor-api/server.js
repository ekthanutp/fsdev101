// server.js
const express = require('express');
const cors = require('cors');
const pool = require('./db');  // Import pool จากไฟล์ db.js
const app = express();
const port = 5050;

app.use(cors());
app.use(express.json()); // ใช้เพื่อให้ Express อ่านข้อมูล JSON ที่ส่งมาใน body

// ตรวจสอบการเชื่อมต่อฐานข้อมูล
pool.connect()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Database connection failed', err);
  });

// Endpoint สำหรับดึงข้อมูลนักแสดง
app.get('/api/actors', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM actors');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching data', err);
    res.status(500).send('Error fetching data');
  }
});

// Endpoint สำหรับเพิ่มนักแสดง
app.post('/api/actors', async (req, res) => {
  const { first_name, last_name, birth_date, nationality, is_active } = req.body;

  // ตรวจสอบข้อมูลจากฟอร์ม
  if (!first_name || !last_name || !birth_date || !nationality) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // ใช้ query PostgreSQL เพื่อ insert ข้อมูลนักแสดง
    const result = await pool.query(
      'INSERT INTO actors (first_name, last_name, birth_date, nationality, is_active) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [first_name, last_name, birth_date, nationality, is_active]
    );
    
    // ส่งข้อมูลที่ถูก insert กลับมาให้ React
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting actor:', err);
    res.status(500).json({ error: 'Failed to insert actor' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
