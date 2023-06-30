const express = require('express');
const app = express();
const cors = require('cors');
const port = 9999;

const data = require('./data.js');

app.use(express.json());
app.use(cors()); // Enable CORS for all routes


app.get('/api/data', (req, res) => {

  res.json(data);
});

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
