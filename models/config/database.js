const mongoose = require('mongoose');

exports.initDatabase = () =>
  mongoose.connect('mongodb://root:example@localhost:27017/calc?authSource=admin', {
    useNewUrlParser: true
  });
