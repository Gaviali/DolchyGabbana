require('dotenv').config();
const cluster = require('cluster');
const { cpus } = require('os');
const path = require('path');
// const morgan = require('morgan');

const express = require('express');
const app = express();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} running`);

  //don't want to max out on cpu cores
  const systemCPUs = cpus().length;
  for (let i = 0; i < 2; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', worker => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  const router = require('./router.js')

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  // app.use(morgan('dev'));
  app.use('/', router)
  app.use(express.static(path.join(__dirname, '../client/dist')));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
}
