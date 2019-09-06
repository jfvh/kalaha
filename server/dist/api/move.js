"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = require("../data/player");
var board_1 = require("../data/board");
var makeMove_1 = require("../gamelogic/makeMove");
//todo implement
function move(req, res) {
    var playerId = req.query.playerId;
    if (!player_1.hasTurn(playerId)) {
        res.status(403).send({ "message": "Not your turn." });
        return;
    }
    var player = player_1.getPlayerFromId(playerId);
    if (!player) {
        res.status(403).send({ "message": "This check is there because I am smarter than typescript" });
        return;
    }
    //valid player takes turn
    var pitNumber = req.query.pitNumber;
    if (pitNumber < 0 || pitNumber > (AMOUNT_OF_PITS_PER_PLAYER - 1)) {
        res.status(403).send({ "message": "Not a valid pit number (" + pitNumber + ")" });
        return;
    }
    // valid pit number selected
    var pitvalue = board_1.getPitValue(player, pitNumber);
    if (pitvalue === 0) {
        res.status(403).send({ "message": "There are no stones left in the pit, select another one." });
        return;
    }
    //implement do move logic
    var updatedBoard = makeMove_1.makeMove(player, pitNumber);
    res.status(200).send({ "board": updatedBoard });
}
exports.move = move;
