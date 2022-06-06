'use strict'

const fp = require('fastify-plugin');
const path = require('path');


module.exports = fp(async function (fastify, opts) {

    fastify.register(require('fastify-static'), {
        root: path.join(__dirname,'..','ui','build'),
    });
      
    fastify.setNotFoundHandler((req, reply) => {
        reply.sendFile('index.html');
    });
})
