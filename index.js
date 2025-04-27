const express = require('express');
const mysql = require('mysql2');
const app = express();

// Koneksi ke database RDS
const db = mysql.createConnection({
  host: 'dbuts.c7qqsi6cyx23.ap-southeast-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Kepomanehmah1',
  database: 'ecommerce'
});

// Endpoint untuk ambil hanya kolom price
app.get('/products', (req, res) => {
  db.query('SELECT price FROM products', (err, results) => {
    if (err) {
      console.error('Gagal ambil data produk:', err);
      return res.status(500).send('Gagal ambil produk');
    }
    res.json(results);
  });
});

app.use(express.static('views'));

app.listen(3000, '0.0.0.0', () => {
  console.log('Server berjalan di http://localhost:3000');
});
