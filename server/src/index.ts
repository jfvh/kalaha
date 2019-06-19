import express = require('express');

import { play } from './api/play';
import { status } from './api/status';
import { move } from './api/move';
import { validatedRequest } from './api/validate';

const app: express.Application = express();
app.use(express.static('public')); //for static files

app.get('/', function (req, res) {
  res.send('index.html');
});

app.get('/play', function (req, res) {
  play(res);
});

app.get('/status', function (req, res) {
  validatedRequest(req, res, status)
});

app.get('/move', function (req, res) {
  validatedRequest(req, res, move)
});

app.listen(3000, function () {
  console.log('kalaha server running on port 3000!');
});