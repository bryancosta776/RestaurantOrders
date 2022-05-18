const mongoose = require('mongoose');

exports.initDatabase = () => mongoose.connect('mongodb://localhost/calculator', { useNewUrlParser: true, useUnifiedTopology: true });
