'use strict'
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = async function (fastify, opts) {

  const { UrlModel } = fastify.db.models;

  fastify.get('/', async function (request, reply) {

    const {url} = request.query;

    if(!url) return [];

    const searchResults = await UrlModel.fuzzySearch(url)
                            .sort({createdAt:-1})
                            .limit(5)
                            .catch(()=>[]);

    return searchResults;
  });

  fastify.get('/term', async function (request, reply) {

    const {q} = request.query;

    if(!q) return reply.code(404).send({message : 'Search term is required'});

    const result = await UrlModel.find()
    .or(
      [{ _id: ObjectId.isValid(q) ? new ObjectId(q) : new ObjectId('timtomtamted') }, { site: { $regex: '.*' + q + '.*' , $options: "i"} }]
    )
    .catch(()=>([]));

    return result;
  });

 

}
