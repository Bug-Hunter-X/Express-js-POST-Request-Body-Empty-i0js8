const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  // Process the data and save it to the database
  // ...
  res.status(201).send('Data received');
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});