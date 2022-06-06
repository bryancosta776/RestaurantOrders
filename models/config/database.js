
const mongoose = require('mongoose');

exports.initDatabase = () =>
  mongoose.connect('mongodb://root:example@localhost:27017/calc?', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
