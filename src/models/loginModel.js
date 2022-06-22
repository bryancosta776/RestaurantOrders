const crypto  =  require('crypto');
const mongoose = require('mongoose');

const login = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    set: (value) => crypto
                .createHash('md5')
                .update(value)
                .digest('hex')
  }
}, { versionKey: false });


module.exports = mongoose.model('login', login);
