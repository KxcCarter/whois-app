const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const whoIsAPI = require('./routers/who-is-API.router');

const server = express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api', whoIsAPI);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
