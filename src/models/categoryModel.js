const { Schema, model } = require('mongoose');

const category = Schema({
  name: {
    type: String,
    required: true
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: 'menus'
  }

}, { versionKey: false });

module.exports = model('category', category);
