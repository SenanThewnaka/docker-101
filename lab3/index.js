const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Lab 3: Multi-Stage Build Successful!</h1><p>This image is tiny and optimized.</p>');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
