const mongoose = require('mongoose');
const DriverSchema = require('./drivers_schema');

var DriverModel = mongoose.model('Driver', DriverSchema);

module.exports = Object.assign({}, DriverSchema);

