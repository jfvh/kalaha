import { createNewBoard } from "../utils/boardUtils";
import { Board } from '../model/Board';
import { Player } from "../model/Player";

let board: Board;

export function reset() {
  board = createNewBoard();
}

export function getPitValue(player: Player, pitnumber: number): Number {
  if (player === Player.PLAYER_1) {
    return board.player1Pits[pitnumber];
  }
  return board.player2Pits[pitnumber];
}

export function getBoard() {
  if (!board) {
    board = createNewBoard();
  }
  return board;
}