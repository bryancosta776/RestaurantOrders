const mongoose = require('mongoose');
const moment = require('moment');

const operations = mongoose.Schema({
  value1: {
    type: Number,
    required: true
  },
  value2: {
    type: Number,
    required: true
  },
  operation: {
    type: String,
    required: true
  },
  result: {
    type: Number,
    required: true
  },
  created: {
    type: Date,
    default: moment().utc(true)
  }
}, { versionKey: false });

module.exports = mongoose.model('operations', operations);
