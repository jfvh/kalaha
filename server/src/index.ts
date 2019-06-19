import express = require('express');

import { play } from './api/play';
import { status } from './api/status';

const app: express.Application = express();
app.use(express.static('public')); //for static files

app.get('/', function (req, res) {
  res.send('index.html');
});

app.get('/play', function (req, res) {
  play(res);
});

app.get('/status', function (req, res) {
  status(req, res);
});


app.listen(3000, function () {
  console.log('kalaha server running on port 3000!');
});