const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/calculator', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.info('Conectado ao Mongodb'))
    .catch((err) => console.info(err));
