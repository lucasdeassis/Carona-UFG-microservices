const mongoose = require('mongoose');

const { Driver } = require('../../domain/domain');

const DriverSchema = new Driver(String, String, String, String, String,
  Number, Number);

module.exports = Object.assign({}, DriverSchema);