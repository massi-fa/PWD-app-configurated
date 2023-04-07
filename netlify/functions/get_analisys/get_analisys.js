/*eslint-disable */
const { MongoClient } = require("mongodb");

require("dotenv").config();

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        const results = await collection.find({}).toArray();
        const mediaSelection = results.reduce((acc, cur) => acc + cur.selection, 0) / results.length;
        const mediaRatings = results.reduce((acc, cur) => acc + cur.rating, 0) / results.length;
        const analysis = {
            mediaR : mediaRatings,
            mediaS : mediaSelection,
        }
        return {
            statusCode: 200,
            body: JSON.stringify(analysis),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }
