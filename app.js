'use strict'

const path = require('path');
const AutoLoad = require('@fastify/autoload');
const fastify = require('fastify');
require('dotenv').config();

const app = fastify({logger: false});

app.register(AutoLoad, {
  dir: path.join(__dirname, 'plugins'),
});

app.register(AutoLoad, {
  dir: path.join(__dirname, 'routes'),
});

app.listen(process.env.PORT || 3000, '0.0.0.0', function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`server listening on ${address}`)
});


