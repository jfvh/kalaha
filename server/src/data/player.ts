import { getPlayer1Id, getPlayer2Id } from "./meta";
import { Player } from "../model/Player";

let playerHasTurn: Player = Player.PLAYER_1; //player one starts
let lastWinnerId: string;

export function nextPlayer() {
  if (playerHasTurn === Player.PLAYER_1) {
    playerHasTurn = Player.PLAYER_2;
  } else {
    playerHasTurn = Player.PLAYER_1;
  }
}

export function wasLastWinner(playerId: string): boolean {
  return playerId === lastWinnerId;
}

export function hasTurn(playerId: string): boolean {
  const playerWithTurnId = getIdOfPlayerWithTurn();
  return playerId === playerWithTurnId;
}

export function getPlayerFromId(playerId: string) {
  if (playerId === getPlayer1Id()) {
    return Player.PLAYER_1;
  } else if (playerId === getPlayer2Id()) {
    return Player.PLAYER_2;
  }
}

function getIdOfPlayerWithTurn(): string {
  if (playerHasTurn === Player.PLAYER_1) {
    return getPlayer1Id();
  } else {
    return getPlayer2Id();
  }
}