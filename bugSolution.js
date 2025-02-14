const express = require('express');
const app = express();

// The order matters.  Ensure express.json() is called BEFORE the route handler
app.use(express.json());
app.post('/data', (req, res) => {
  const data = req.body;
  console.log(data); // Log the received data
  // Process the data and save it to the database
  // ...
  res.status(201).send('Data received');
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});