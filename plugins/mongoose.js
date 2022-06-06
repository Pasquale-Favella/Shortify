'use strict'

const fp = require('fastify-plugin');
const mongoose = require('mongoose');
const UrlModel = require('../models/url.model');

module.exports = fp(async function (fastify, opts) {

    try {
        mongoose.connection.on('connected', () => {
            fastify.log.info({ actor: 'MongoDB' }, 'connected');
        });
        mongoose.connection.on('disconnected', () => {
            fastify.log.error({ actor: 'MongoDB' }, 'disconnected');
        });
        const db = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        //ADD MODELS HERE
        const models = { UrlModel };
        fastify.decorate('db', { models });

    } catch (error) {
        console.error(error);
    }

})