'use strict'

const fp = require('fastify-plugin');
const { nanoid } = require('nanoid');

module.exports = fp(async function (fastify, opts) {
    fastify.register(require('@fastify/cookie'));
    fastify.register(require('@fastify/session'), {
        cookieName: 'sessionId',
        secret: process.env.SESSION_SECRET || 'a secret with minimum length of 32 characters',
        cookie: { 
            secure: process.env.NODE_ENV === 'production' ? true : false ,
            maxAge: 86400 * 2000, // 2 day expiration time
        }
    });

    fastify.addHook('preHandler', (request, reply, next) => {
        if(!request.session.sessionId)
            request.session.sessionId = nanoid();
        next();
    })
})
