const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

const connection = {
  pool,
  query: (...args) => {
    return pool.connect().then((client) => {
      return client.query(...args).then((res) => {
        client.release();
        return res.rows;
      });
    });
  },
};

//module.exports = connection;
module.exports.pool = pool;

// pool.connect()
// .then(()=>{console.log('connection sucessful')})
// .catch((e)=>{console.log(e)})
// .finally(()=>{pool.end()})

// pool.connect()

// const query = (text, params, callback) => {
//   return pool.query(text, params, callback)
// }

// module.exports = { query }

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })


// const pg = require('pg');
// module.exports = pg.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'productsDB'
// });
// client is static, pool is dynamic can change
// const client = new Client({
//   user: 'root',
//   host: 'localhost',
//   database: 'productsDB',
//   password: '',
//   port: 3000,
// })
// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })



// const {PG} = require('pg');
// const pg = new PG ({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'productsDB',
// });

// pg.connect();
