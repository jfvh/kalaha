"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meta_1 = require("../data/meta");
function play(res) {
    var result = meta_1.assign();
    if (typeof result === "undefined") {
        res.status(403).send({ "message": "no new players can be assigned, gamestatus: " + result });
    }
    res.status(200).send(result);
}
exports.play = play;
