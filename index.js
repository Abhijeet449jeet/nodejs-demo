const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!, This is Abhijeet from Port no.3000');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

