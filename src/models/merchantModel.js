const { Schema, model } = require('mongoose');

const merchant = Schema({
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
  menus: [{
    type: Schema.Types.ObjectId,
    ref: 'menus',
    required: true
  }],
  product: [{
    type: Schema.Types.ObjectId,
    ref: 'product',
    required: true
  }]
}, { versionKey: false });

module.exports = model('merchants', merchant);
