const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Function to initialize the server
const initServer = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  return app;
};

module.exports = initServer;