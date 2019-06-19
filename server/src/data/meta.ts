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
        playerId: initPlayer1Id()
      }
    case (GameStatus.WAITING_FOR_SECOND_PLAYER):
      status = GameStatus.PLAYING;
      return {
        gameId: getGameId(),
        playerId: initPlayer2Id()
      };
  }
  console.log("p1:", player1Id)
  console.log("p2:", player2Id)

  return undefined;
}

export function statusGameFinished() {
  status = GameStatus.FINISHED;
}

export function reset() {
  //reset for next game
  status = GameStatus.NO_PLAYERS;
  player1Id = '';
  player2Id = '';
  gameId = getUUID();
}

export function getStatus() {
  return status;
}

export function getGameId(): string {
  if (!gameId) {
    gameId = getUUID();
  }
  gameId = "g";//dev hack
  return gameId;
}

export function isValidPlayer(playerId: string) {
  return player1Id === playerId || player2Id === playerId;
}

export function getPlayer1Id() {
  return player1Id;
}

export function getPlayer2Id() {
  return player2Id;
}

function initPlayer1Id() {
  player1Id = getUUID();
  player1Id = "p1";//dev hack
  return player1Id;
}

function initPlayer2Id() {
  player2Id = getUUID();
  player2Id = "p2";//dev hack
  return player2Id;
}
