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
  merchant: { type: Schema.Types.ObjectId, ref: 'merchants' }
}, { versionKey: false });


module.exports = model('product', product);
