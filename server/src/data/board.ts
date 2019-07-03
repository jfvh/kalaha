import { createNewBoard } from "../utils/boardUtils";
import { Board } from '../model/Board';
import { Player } from "../model/Player";

let board: Board;

// this class handles the state of the board 

export function reset() {
  board = createNewBoard();
}

export function dropStoneInBigPit(player: Player) {
  if (player === Player.PLAYER_1) {
    board.player1BigPit = board.player1BigPit + 1;
  } else {
    board.player2BigPit = board.player2BigPit + 1;
  }
  return board;
}

export function dropStoneInSmallPit(player: Player, pitnumber: number) {
  if (player === Player.PLAYER_1) {
    board.player1Pits[pitnumber] = board.player1Pits[pitnumber] + 1;
  } else {
    board.player2Pits[pitnumber] = board.player2Pits[pitnumber] + 1;
  }
  return board;
}

export function dropOneStoneInEachpit() {
  dropStoneInBigPit(Player.PLAYER_1);
  dropStoneInBigPit(Player.PLAYER_2);
  for (let i = 0; i < AMOUNT_OF_PITS_PER_PLAYER; i++) {
    dropStoneInSmallPit(Player.PLAYER_1, i);
    dropStoneInSmallPit(Player.PLAYER_2, i);
  }
  return board;
}

export function getPitValue(player: Player, pitnumber: number): number {
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