const mongoose = require('mongoose');

const menu = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, { versionKey: false });

module.exports = mongoose.model('menu', menu);
