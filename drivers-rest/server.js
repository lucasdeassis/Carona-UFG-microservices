const repositoryConnection = require('../repository/connection');
const express = require('express');
const bodyParser = require('body-parser');

const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
};

const timeLogger = (req, res, next) => {
  const now = new Date().toString();

  console.log(`${now}: ${req.method} ${req.url}`);
  next();
};

const start = () => {

  const app = express();

  let driversRepository = {};

  repositoryConnection.connect('localhost', 'carona-ufg').then(
    (daos) => {
      driversRepository = daos.drivers;
      console.log('listening at port 8000');
      app.listen(8000);
    }
  ).catch((err) => {
    console.log(err);
  });

  app.use(cors);
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(timeLogger);

  app.get('/driver', function (req, res) {
    driversRepository.getDrivers()
      .then((driversList) => {
        res.json(driversList);
      }
      ).catch(err => {
        res.status(500).send({
          error: err.message
        });

      })
  });

  app.post('/driver', function (req, res) {
    console.log('req', req.body);
    driversRepository.addDriver(req.body)
      .then(() => {
        res.status(200).send('OK');
      }
      ).catch(err => {
        res.status(500).send({
          error: err.message
        });

      })
  });
}

start();


