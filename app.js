// app.js
const express = require('express');
const mongoose = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const patientRouter = require('./routes/patient');
app.use('/api/patients', patientRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
