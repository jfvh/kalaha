import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('prrrt taliloe!');
});

app.listen(3000, function () {
  console.log('kalaha servernpm running on 3000!');
});