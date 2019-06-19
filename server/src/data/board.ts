import { createNewBoard } from "../utils/boardUtils";
import { Board } from '../model/Board';

let board: Board;

export function reset() {
  board = createNewBoard();
}

export function getBoard() {
  if (!board) {
    board = createNewBoard();
  }
  return board;
}