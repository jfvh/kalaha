"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meta_1 = require("../data/meta");
var player_1 = require("../data/player");
var board_1 = require("../data/board");
var GameStatus_1 = require("../model/GameStatus");
function status(req, res) {
    var playerId = req.query.playerId;
    var gameStatus = meta_1.getStatus();
    var response;
    switch (gameStatus) {
        case GameStatus_1.GameStatus.FINISHED:
            response = {
                status: gameStatus.toString(),
                youDidWin: player_1.wasLastWinner(playerId)
            };
            break;
        case GameStatus_1.GameStatus.PLAYING:
            console.log(board_1.getBoard());
            response = {
                status: gameStatus.toString(),
                yourTurn: player_1.hasTurn(playerId),
                board: board_1.getBoard()
            };
            break;
        default:
            response = {
                status: gameStatus.toString(),
            };
    }
    res.status(200).send(response);
}
exports.status = status;
