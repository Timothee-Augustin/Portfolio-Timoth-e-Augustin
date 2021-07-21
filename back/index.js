require('dotenv').config();

const express = require('express');
const connection = require('./db-config');

const app = express();

const port = process.env.PORT || 8000;

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
  } else {
    console.log(`connected to database with threadId :  ${connection.threadId}`);
  }
});

app.use(express.json());

app.use('/uploads', express.static('pictures'));

const routes = require('./routes');

app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
