'use strict'

const bodyJsonSchema = {
  type: 'object',
  required: ['site'],
  properties: {
    site: { type: 'string' },
  }
}

module.exports = async function (fastify, opts) {
  const { UrlModel } = fastify.db.models;

  fastify.get('/:slug' ,async function (request, reply) {

    const slug = request.params.slug;

    if(!slug) return reply.sendFile('index.html');

    const model = await UrlModel.findOne({slug});

    if(model) return reply.code(303).redirect(model.site);

    return reply.sendFile('index.html');
  });

  fastify.post('/', {body: bodyJsonSchema} ,async function (request, reply) {
    const body = request.body;
    try{

      const model = await UrlModel.create(body);
          
      return reply.code(201).send(model);

    }catch(error){
      return reply.code(404).send({
        message:error?.errors?.site?.properties?.message || 'failed saving url'
      });
    }
    
  });
}
