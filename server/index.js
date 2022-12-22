require('dotenv').config();
const path = require('path');
// const client = require('../databases/reviewspg')
// const { Client } = require('pg');
// const client = new Client({
//   user: 'root',
//   host: '127.0.0.1',
//   database: 'Reviews',
//   password: '',
//   port: 3000,
// });

const router = require('./router.js')

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router)
app.use(express.static(path.join(__dirname, '../client/dist')));

// client.query('SELECT $1::text as message', ['HELLO WORLD!!!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message);
//   client.end();
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});