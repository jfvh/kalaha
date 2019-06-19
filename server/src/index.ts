import express = require('express');

// Create a new express application instance
const app: express.Application = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('index.html');
});

app.listen(3000, function () {
  console.log('kalaha server running on port 3000!');
});