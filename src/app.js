const express = require('express');
const equationRoutes = require('../routes/equation.route');
const db = require('../models/config/database');

const app = express();

app.use(express.json());

app.use(equationRoutes);

const PORT = 3000;

app.listen(PORT, async () => {
  // try {
  //     // await db.initDatabase().then(() => console.info('connected'));
  // } catch (error) {
  //     console.info('connection error');
  //     return;
  // }
  console.info(PORT);
});
