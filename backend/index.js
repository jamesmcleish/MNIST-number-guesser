// index.js
const express = require('express');
const app = express();
const port = 4000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});