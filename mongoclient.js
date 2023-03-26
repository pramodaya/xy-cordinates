const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }
}

connectToDB();
