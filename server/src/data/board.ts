import { createNewBoard } from "../utils/boardUtils";
import { Board } from '../model/Board';

let board: Board = createNewBoard();

export function reset() {
  board = createNewBoard();
}

export function getBoard() {
  return board;
}