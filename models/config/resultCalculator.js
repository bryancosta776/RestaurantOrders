
const mongoose = require('mongoose');

const resultCalculator = mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('ResultCalculator', resultCalculator);
