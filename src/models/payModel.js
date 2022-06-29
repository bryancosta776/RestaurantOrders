
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const payment = mongoose.Schema({
  client:{
    type: Schema.Types.ObjectId,
    ref:'User'
  },
  paymentType: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }
});


// referenciar a model do usuario

module.exports = mongoose.model('payment', payment);
