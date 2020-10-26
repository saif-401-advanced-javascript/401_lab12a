'use strict';

require('dotenv').config();

// Start the web server
require('./src/app').start(process.env.PORT);
