const process = require('process');
const connectToMongo = require("./database")
connectToMongo()
const cors = require('cors')
const express = require('express')
const app = express()
const port = 5000;

// Setup
app.use(cors())
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'DELETE']);
  res.setHeader('Access-Control-Allow-Headers', ['Content-Type', 'Authorization']);
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Available Routes
app.use('/api/user', require('./routes/user'))
app.use('/api/notes', require('./routes/notes'))

// Listen to server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
