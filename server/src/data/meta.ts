import { getUUID } from '../utils/uuid';
import { GameStatus } from '../model/GameStatus';
import { PlayResponse } from '../model/PlayResponse';

let gameId: string;
let player1Id: string;
let player2Id: string;
let status: GameStatus = GameStatus.NO_PLAYERS;

export function assign(): PlayResponse | undefined { //wanted to do union with GameStatus, but typescript bug. todo
  switch (status) {
    case (GameStatus.NO_PLAYERS):
      status = GameStatus.WAITING_FOR_SECOND_PLAYER;
      return {
        gameId: getGameId(),
        playerId: getPlayer1Id()
      }
    case (GameStatus.WAITING_FOR_SECOND_PLAYER):
      status = GameStatus.PLAYING;
      return {
        gameId: getGameId(),
        playerId: getPlayer2Id()
      };
  }
  return undefined;
}

export function getStatus() {
  return status;
}

function getGameId(): string {
  if (!gameId) {
    gameId = getUUID();
  }
  return gameId;
}

function getPlayer1Id() {
  if (!player1Id) {
    player1Id = getUUID();
  }
  return player1Id;
}

function getPlayer2Id() {
  if (!player2Id) {
    player2Id = getUUID();
  }
  return player2Id;
}
