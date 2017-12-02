// declare all daos

const trip = require('./trip/trip_dao');

module.exports.daos = Object.assign({}, trip);