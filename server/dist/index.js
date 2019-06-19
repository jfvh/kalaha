"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create a new express application instance
var app = express();
app.get('/', function (req, res) {
    res.send('prrrt taliloe!');
});
app.listen(3000, function () {
    console.log('kalaha servernpm running on 3000!');
});
