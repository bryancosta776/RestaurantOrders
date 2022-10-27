const { Schema, model } = require('mongoose');

const menu = Schema({
  name: {
    type: String,
    required: true
  },
  merchant: { type: Schema.Types.ObjectId, ref: 'merchants' }

}, { versionKey: false });

module.exports = model('menus', menu);
