const { MongoClient } = require('mongodb');

require('dotenv').config();

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    const { rating, selection, text } = JSON.parse(event.body); // Parse input data from the request body
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    const result = await collection.insertOne({
      rating,
      selection,
      text,
    });
    return {
      statusCode: 200,
      body: JSON.stringify(result.ops),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
