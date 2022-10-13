const mongoose = require('mongoose');

exports.initDatabase = () =>
  mongoose.connect('mongodb://localhost:27017/rest?authSource=admin', {
    user:'root',
    pass:'example',
    useUnifiedTopology: true,
    useNewUrlParser: true
  });


