const mongoose = require('mongoose');

const menu = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'register',
    required: true
  }
}, { versionKey: false });

module.exports = mongoose.model('menu', menu);
