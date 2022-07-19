const crypto  =  require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = mongoose.Schema({
  id:{
    type:String,
    required:true
  },
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
  paymentId:{
    type:String
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
  cpfCnpj: {
    type: String
  },
  credits:{
    type: Number,
    default:0
  }
}, { versionKey: false });


module.exports = mongoose.model('user', user);
