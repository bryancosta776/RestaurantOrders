
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const webhook = mongoose.Schema({
  email:{
    type: String,
    required: true
  },
  enabled: {
    type: Boolean,
    default: true
  },
  interrupted: {
    type: Boolean,
    default: true
  }

});

module.exports = mongoose.model('webhook', webhook);



