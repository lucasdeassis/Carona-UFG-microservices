// declare all daos
const trip = require('./trip/trip_dao');
const drivers = require('./driver/driver_dao');


module.exports = Object.assign({}, {trip, drivers});