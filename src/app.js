/* eslint-disable no-console */
const express = require('express');
const equationRoutes = require('../routes/equation.route');
const db = require('../models/config/database');

const app = express();

app.use(express.json());

app.use(equationRoutes);

const PORT = 3000;

app.listen(PORT, async () => {
   try {
        // eslint-disable-next-line no-console
        await db.initDatabase().then(() => console.log('connected'));
   } catch (error) {
       console.log('connection error');
       return;
   }
  console.info(PORT);
});
