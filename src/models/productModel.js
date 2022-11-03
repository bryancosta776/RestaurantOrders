const { Schema, model } = require('mongoose');

const product = Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: 'merchants',
    required: true
  },
  price: {
    type: Number,
    required: true
  }


}, { versionKey: false });


module.exports = model('product', product);
