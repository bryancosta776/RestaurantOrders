/* eslint-disable no-console */
const express = require('express');
const equationRoutes = require('./routes/operationsRouter');
const db = require('./database/index');

const app = express();

app.use(express.json());

app.use(equationRoutes);

const PORT = 3000;

app.listen(PORT, async () => {
  try {

    await db.initDatabase().then(() => console.log('connected'));
  } catch (error) {
    console.log(error);
    console.log('connection error');
    return;
  }
  console.info(PORT);
});
