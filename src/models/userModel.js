const crypto  =  require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = mongoose.Schema({
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
  },
  payments:[{
    type: Schema.Types.ObjectId,
    ref:'payment'
  }],
  cpf: {
    type: String,
    required: true
  }


}, { versionKey: false });

// user model

module.exports = mongoose.model('user', user);
