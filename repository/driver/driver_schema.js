const mongoose = require('mongoose');

const { Driver } = require('../../domain/index');

const DriverSchema = new Driver(String, String, String, String, String,
  Number, String, Number);

module.exports = Object.assign({}, DriverSchema);