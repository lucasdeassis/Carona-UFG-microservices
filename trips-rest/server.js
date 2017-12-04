const repositoryConnection = require('../repository/connection');
const express = require('express');

const start = () => {

  const app = express();
  let tripRepository = {};

  repositoryConnection.connect('localhost', 'carona-ufg').then(
    (daos) => {
      tripRepository = daos.trip;
      console.log('listening at port 5000');
      app.listen(5000);
    }
  ).catch((err) => {
    console.log(err);
  });

  app.use((req, res, next) => {
    const now = new Date().toString();

    console.log(`${now}: ${req.method} ${req.url}`);
    next();
  });

  app.get('/trip', function (req, res) {
    tripRepository.getTrips()
      .then((tripList) => {
        res.send(tripList);
      }
      ).catch(err => {
        res.status(500).send({
          error: err.message
        });
      })
  });

  app.post('/trip', function (req, res) {
    tripRepository.addDummy()
      .then(() => {
        res.status(200).send('');
      }
      ).catch(err => {
        res.status(500).send({
          error: err.message
        });
      })
  });
}

start();