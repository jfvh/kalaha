"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var play_1 = require("./api/play");
var status_1 = require("./api/status");
var move_1 = require("./api/move");
var validate_1 = require("./api/validate");
var app = express();
app.use(express.static('public')); //for static files
app.get('/', function (req, res) {
    res.send('index.html');
});
app.get('/play', function (req, res) {
    play_1.play(res);
});
app.get('/status', function (req, res) {
    validate_1.validatedRequest(req, res, status_1.status);
});
app.get('/move', function (req, res) {
    validate_1.validatedRequest(req, res, move_1.move);
});
app.listen(3000, function () {
    console.log('kalaha server running on port 3000!');
});
