/* eslint-disable no-unused-vars */

'use strict';
require('dotenv').config();
const server = require('../basic-express-server/src/ server.js');
const PORT = process.env.PORT;
server.listen(3000);