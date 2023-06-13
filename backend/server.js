const express = require('express');
const app = express();
const port = 4000; // Choose any port you prefer

// Define routes and middleware here

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Default MongoDB connection URI
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

connectToDatabase();