"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("../model/Player");
var board_1 = require("../data/board");
var player_1 = require("../data/player");
function makeMove(self, pitNumber) {
    var otherPlayer = player_1.getOtherPlayer(self);
    var stones = board_1.getPitValue(self, pitNumber);
    var index = pitNumber + 1; // starting point
    // if multiple rounds, handle that first
    var modulo = Math.floor(stones / TOTAL_PITS);
    for (var i = 0; i < modulo; i++) {
        console.log('drop one stone in each pit first!');
        board_1.dropOneStoneInEachpit();
    }
    stones = stones % TOTAL_PITS;
    // now stones < TOTAL PITS
    var droppedAStone = true;
    while (stones > 0 && droppedAStone) {
        droppedAStone = handleStoneDropping(index);
        stones--;
        index++;
    }
    // nothing changed, but some stones over.
    if (stones > 0) {
        index = index - TOTAL_PITS;
        while (stones > 0) {
            handleStoneDropping(index);
            stones--;
            index++;
        }
    }
    return board_1.getBoard();
}
exports.makeMove = makeMove;
function handleStoneDropping(index) {
    if (index < AMOUNT_OF_PITS_PER_PLAYER) {
        board_1.dropStoneInSmallPit(Player_1.Player.PLAYER_1, index);
        return true;
    }
    else if (index === AMOUNT_OF_PITS_PER_PLAYER) {
        board_1.dropStoneInBigPit(Player_1.Player.PLAYER_1);
        return true;
    }
    else if (index > AMOUNT_OF_PITS_PER_PLAYER && index < (TOTAL_PITS - 1)) {
        board_1.dropStoneInSmallPit(Player_1.Player.PLAYER_2, index - (AMOUNT_OF_PITS_PER_PLAYER + 1));
        return true;
    }
    else if (index === (TOTAL_PITS - 1)) {
        board_1.dropStoneInBigPit(Player_1.Player.PLAYER_2);
        return true;
    }
    return false;
}
