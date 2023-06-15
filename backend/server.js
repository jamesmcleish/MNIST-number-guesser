const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    try {
      const csvData = req.body.csvData; 

      fs.writeFileSync('data.csv', csvData);
      
      res.status(200).json({ message: 'CSV data received successfully' });
    } catch (error) {
      console.error('Error writing CSV data to file:', error);
      res.status(500).json({ error: 'An error occurred while processing the CSV data' });
    }
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}

connectToDatabase();
