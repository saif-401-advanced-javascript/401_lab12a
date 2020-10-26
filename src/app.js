'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');

// Esoteric Resources
const oauth = require('./google');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());

// Website Files
app.use(express.static('./public'));

// Routes
app.get('/oauth', oauth, (req, res) => {
  res.status(200).json({ token_value: req.token });
});

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
