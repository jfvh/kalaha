"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("../utils/uuid");
var GameStatus_1 = require("../model/GameStatus");
var gameId;
var player1Id;
var player2Id;
var status = GameStatus_1.GameStatus.NO_PLAYERS;
function assign() {
    switch (status) {
        case (GameStatus_1.GameStatus.NO_PLAYERS):
            status = GameStatus_1.GameStatus.WAITING_FOR_SECOND_PLAYER;
            return {
                gameId: getGameId(),
                playerId: initPlayer1Id()
            };
        case (GameStatus_1.GameStatus.WAITING_FOR_SECOND_PLAYER):
            status = GameStatus_1.GameStatus.PLAYING;
            return {
                gameId: getGameId(),
                playerId: initPlayer2Id()
            };
    }
    console.log("p1:", player1Id);
    console.log("p2:", player2Id);
    return undefined;
}
exports.assign = assign;
function statusGameFinished() {
    status = GameStatus_1.GameStatus.FINISHED;
}
exports.statusGameFinished = statusGameFinished;
function reset() {
    //reset for next game
    status = GameStatus_1.GameStatus.NO_PLAYERS;
    player1Id = '';
    player2Id = '';
    gameId = uuid_1.getUUID();
}
exports.reset = reset;
function getStatus() {
    return status;
}
exports.getStatus = getStatus;
function getGameId() {
    if (!gameId) {
        gameId = uuid_1.getUUID();
    }
    gameId = "g"; //dev hack
    return gameId;
}
exports.getGameId = getGameId;
function isValidPlayer(playerId) {
    return player1Id === playerId || player2Id === playerId;
}
exports.isValidPlayer = isValidPlayer;
function getPlayer1Id() {
    return player1Id;
}
exports.getPlayer1Id = getPlayer1Id;
function getPlayer2Id() {
    return player2Id;
}
exports.getPlayer2Id = getPlayer2Id;
function initPlayer1Id() {
    player1Id = uuid_1.getUUID();
    player1Id = "p1"; //dev hack
    return player1Id;
}
function initPlayer2Id() {
    player2Id = uuid_1.getUUID();
    player2Id = "p2"; //dev hack
    return player2Id;
}
