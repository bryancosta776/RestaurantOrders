const express = require('express');
const equationRoutes = require('../routes/equation.route');

const app = express();

app.use(express.json());

app.use(equationRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.info(PORT);
});
