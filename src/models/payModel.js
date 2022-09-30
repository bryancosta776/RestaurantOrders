
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const payment = mongoose.Schema({
  client:{
    type: Schema.Types.ObjectId,
    ref:'user'
  },
  externalPaymentId: {
    type: String,
    required: true
  },
  status:{
    type: String
  },
  paymentType: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paymentData:{
    type: Schema.Types.Mixed
  }
});

module.exports = mongoose.model('payment', payment);
