const { Pool } = require('pg');
const connectionString = 'postgresql://localhost:5432/reviews';
const parser = require('csv-parser');
const fs = require('fs'); // maybe need promises

const pool = new Pool({
  connectionString,
  // user: 'root',
  // host: 'localhost',
  // database: 'reviews',
  // password: '',
  // port: 3000,
});

// psql -d reviews -a -f databases/reviewsPg.sql

console.log('test');

pool.query('SELECT * FROM reviews LIMIT 5', (err, res) => {
  console.log(res.rows);
  console.log('loaded all reviews wow')
})


pool.query('SELECT * FROM reviewsphotos LIMIT 3', (err, res) => {
  console.log(res.rows);
  console.log('loaded photos')

})

pool.query('SELECT * FROM characteristics LIMIT 8', (err, res) => {
  console.log(res.rows);
  console.log('loaded characteristics')
})

pool.query('SELECT * FROM charreviews LIMIT 8', (err, res) => {
  console.log(res.rows);
  console.log('loaded char reviews');
})

pool.query('SELECT charreview_id, photo_id, char_id, value FROM reviewsphotos, charreviews LIMIT 3', (err, res) => {
  console.log(res.rows);
  console.log('loaded tables together');
  pool.end()
})


// pool
//   .connect()
//   .then(() => console.log('connected postgreSQL'))
//   .catch((err) => console.error('Connection error: ', err));

// \l list all databases
// \dt list all database tables