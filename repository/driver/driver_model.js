const mongoose = require('mongoose');
const DriverSchema = require('./driver_schema');

var DriverModel = mongoose.model('Driver', DriverSchema);

module.exports = Object.assign({}, DriverModel);

