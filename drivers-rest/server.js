const repositoryConnection = require('../repository/connection');
const express = require('express');

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

  app.use((req, res, next) => {
    const now = new Date().toString();

    console.log(`${now}: ${req.method} ${req.url}`);
    next();
  });

  app.get('/driver', function (req, res) {
    driversRepository.getDrivers()
      .then((driversList) => {
        res.send(driversList);
      }
      ).catch(err => {
        res.status(500).send({
          error: err.message
        });

      })
  });

  app.post('/driver', function (req, res) {
    driversRepository.addDummy()
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