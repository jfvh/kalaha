"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meta_1 = require("./meta");
var Player_1 = require("../model/Player");
var playerHasTurn = Player_1.Player.PLAYER_1; //player one starts
var lastWinnerId;
function getOtherPlayer(self) {
    return (self === Player_1.Player.PLAYER_1) ? Player_1.Player.PLAYER_2 : Player_1.Player.PLAYER_1;
}
exports.getOtherPlayer = getOtherPlayer;
function nextPlayer() {
    if (playerHasTurn === Player_1.Player.PLAYER_1) {
        playerHasTurn = Player_1.Player.PLAYER_2;
    }
    else {
        playerHasTurn = Player_1.Player.PLAYER_1;
    }
}
exports.nextPlayer = nextPlayer;
function wasLastWinner(playerId) {
    return playerId === lastWinnerId;
}
exports.wasLastWinner = wasLastWinner;
function hasTurn(playerId) {
    var playerWithTurnId = getIdOfPlayerWithTurn();
    return playerId === playerWithTurnId;
}
exports.hasTurn = hasTurn;
function getPlayerFromId(playerId) {
    if (playerId === meta_1.getPlayer1Id()) {
        return Player_1.Player.PLAYER_1;
    }
    else if (playerId === meta_1.getPlayer2Id()) {
        return Player_1.Player.PLAYER_2;
    }
}
exports.getPlayerFromId = getPlayerFromId;
function getIdOfPlayerWithTurn() {
    if (playerHasTurn === Player_1.Player.PLAYER_1) {
        return meta_1.getPlayer1Id();
    }
    else {
        return meta_1.getPlayer2Id();
    }
}
