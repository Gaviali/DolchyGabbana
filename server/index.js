require('dotenv').config();
const path = require('path');
const { Client } = require('pg');
const client = new Client({
  host: '',
  port: 3000,
  user: 'root',
  password: '',
});

client
  .connect()
  .then(() => console.log('connected postgreSQL'))
  .catch((err) => console.error('connection error: ', err.stack));

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

client.query('SELECT $1::text as message', ['HELLO WORLD!!!'], (err, res) => {
  console.log(err ? err.stack : res.rows[0].message);
  client.end();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});