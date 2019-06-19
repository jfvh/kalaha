import { assign } from './data/meta';
import express = require('express');

// Create a new express application instance
const app: express.Application = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('index.html');
});

app.get('/play', function (req, res) {
  const result = assign();
  if (typeof result === "undefined") {
    res.status(403).send(`no new players can be assigned, gamestatus: ${result}`);
  }
  res.status(200).send(result);
});

app.listen(3000, function () {
  console.log('kalaha server running on port 3000!');
});