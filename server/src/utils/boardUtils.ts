import { Board } from '../model/Board';

export function createNewBoard(): Board {
  return {
    player1BigPit: 0,
    player1Pits: [6, 6, 6, 6, 6, 6],
    player2BigPit: 0,
    player2Pits: [6, 6, 6, 6, 6, 6]
  }
}