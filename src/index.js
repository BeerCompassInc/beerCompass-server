'use strict';

const app = require('./app');
const server = app.listen(port);
const port = process.env.PORT || app.get('port')

server.on('listening', () =>
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
);
