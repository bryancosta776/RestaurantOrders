const mongoose = require('mongoose');

const register = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  neighborhood: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  numberCellPhone: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  CEP: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  menu: [{
    type: String,
    ref: 'menu',
    required: true
  }]
}, { versionKey: false });

module.exports = mongoose.model('register', register);
