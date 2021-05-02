const express = require('express');
const mongoose = require('mongoose');
const { MONGO_IP, MONGO_PASSWORD, MONGO_PORT, MONGO_USER } = require('./config/config');
const app = express();

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`).then(() => {
  console.log('successfully connected to db');
}).catch((e) => {
  console.log('unable to connect to databse:', e);
});

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h2>Hi There23</h2>');
});

app.listen(port, () => {
  console.log('Server listenin on ', port);
});