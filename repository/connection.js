const mongoose = require('mongoose');
const daos = require('./index');
// promise library in mongoose is deprecated
mongoose.Promise = global.Promise;


const connect = (host, database) => {
  const dbUrl = `mongodb://${host}:27017/${database}`;

  return new Promise((resolve, reject) => {
    if (!host || !database) {
      reject(new Error('connection params (host or database) not supplied!'))
    }

    mongoose.connect(dbUrl, {
      useMongoClient: true
    }).then(
      () => {
        resolve(daos);
      },
      (err) => {
        reject(new Error(`${err} - couldn't get repository from server`));
      });
  })
};

const disconnect = (connection) => {
  return mongoose.disconnect();
};

module.exports = Object.assign({}, { connect, disconnect });