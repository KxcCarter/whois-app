import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import whoIsAPI from './routers/who-is-API.router';

const server: any = express();
const PORT = process.env.PORT || 5000;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/api', whoIsAPI);

server.listen(PORT, (): void => {
  console.log(`Server running on port ${PORT}`);
});

export default server;
