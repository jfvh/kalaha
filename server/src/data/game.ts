import { getPlayer1Id, getPlayer2Id } from "./meta";

enum Player { PLAYER_1, PLAYER_2 };

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

function getIdOfPlayerWithTurn(): string {
  if (playerHasTurn === Player.PLAYER_1) {
    return getPlayer1Id();
  } else {
    return getPlayer2Id();
  }
}