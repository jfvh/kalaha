"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boardUtils_1 = require("../utils/boardUtils");
var Player_1 = require("../model/Player");
var board;
// this class handles the state of the board 
function reset() {
    board = boardUtils_1.createNewBoard();
}
exports.reset = reset;
function dropStoneInBigPit(player) {
    if (player === Player_1.Player.PLAYER_1) {
        board.player1BigPit = board.player1BigPit + 1;
    }
    else {
        board.player2BigPit = board.player2BigPit + 1;
    }
    return board;
}
exports.dropStoneInBigPit = dropStoneInBigPit;
function dropStoneInSmallPit(player, pitnumber) {
    if (player === Player_1.Player.PLAYER_1) {
        board.player1Pits[pitnumber] = board.player1Pits[pitnumber] + 1;
    }
    else {
        board.player2Pits[pitnumber] = board.player2Pits[pitnumber] + 1;
    }
    return board;
}
exports.dropStoneInSmallPit = dropStoneInSmallPit;
function dropOneStoneInEachpit() {
    dropStoneInBigPit(Player_1.Player.PLAYER_1);
    dropStoneInBigPit(Player_1.Player.PLAYER_2);
    for (var i = 0; i < AMOUNT_OF_PITS_PER_PLAYER; i++) {
        dropStoneInSmallPit(Player_1.Player.PLAYER_1, i);
        dropStoneInSmallPit(Player_1.Player.PLAYER_2, i);
    }
    return board;
}
exports.dropOneStoneInEachpit = dropOneStoneInEachpit;
function getPitValue(player, pitnumber) {
    if (player === Player_1.Player.PLAYER_1) {
        return board.player1Pits[pitnumber];
    }
    return board.player2Pits[pitnumber];
}
exports.getPitValue = getPitValue;
function getBoard() {
    if (!board) {
        board = boardUtils_1.createNewBoard();
    }
    return board;
}
exports.getBoard = getBoard;
