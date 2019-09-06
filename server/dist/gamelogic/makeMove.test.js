"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var board_1 = require("../data/board");
var makeMove_1 = require("./makeMove");
var Player_1 = require("../model/Player");
test('board', function () {
    board_1.reset();
    makeMove_1.makeMove(Player_1.Player.PLAYER_1, 0);
    var expectedBoard = {
        player1BigPit: 1,
        player1Pits: [0, 7, 7, 7, 7, 7],
        player2BigPit: 0,
        player2Pits: [6, 6, 6, 6, 6, 6]
    };
    expected(board_1.getBoard).toBe(expectedBoard);
});
