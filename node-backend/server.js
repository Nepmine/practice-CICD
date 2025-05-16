const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all origins

app.get('/api/welcome', (req, res) => {
  res.json({ message: 'Hello from the Node.js backend also!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
