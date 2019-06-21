import { Board } from '../model/Board';
import { Player } from '../model/Player';
import { getBoard, getPitValue } from '../data/board';
import { getOtherPlayer } from '../data/player';

export function makeMove(self: Player, pitNumber: number): Board {
  const otherPlayer = getOtherPlayer(self);
  let board = getBoard();
  let stones = getPitValue(self, pitNumber);
  let index = pitNumber;
  while (stones >= 1) {
    //drop stones in own pits
    if (index < 6) {


    }





  }

}


function dropStoneInPit(playerTurn: Player, playerPit: Player, bigPit: boolean, pitNumber: number, board: Board, stones: number): Board {
  if (stones === 0) {
    return board;
  }

  let newBoard;
  let nextPitPlayer;
  let nextPitBig;
  let nextPitNumber;

  if (playerPit === Player.PLAYER_1) {
    if (bigPit) {
      newBoard = Object.assign({}, board, { player1BigPit: board.player1BigPit++ })
      nextPitBig = false;
      nextPitPlayer = Player.PLAYER_2;
      nextPitNumber = 0;
    } else {
      newBoard = Object.assign({}, board, { player1Pits[pitNumber]: board.player1Pits[pitNumber]++ })
      nextPitNumber = pitNumber + 1;
      if (nextPitNumber > 5) {
        nextPitBig = true;
      }
    }
  } else { //Player 2 turn
    if (bigPit) {
      newBoard = Object.assign({}, board, { player2BigPit: board.player2BigPit++ })
      nextPitBig = false;
      nextPitPlayer = Player.PLAYER_1;
      nextPitNumber = 0;
    } else {
      newBoard = Object.assign({}, board, { player2Pits[pitNumber]: board.player2Pits[pitNumber]++ })
      nextPitNumber = pitNumber + 1;
      if (nextPitNumber > 5) {
        nextPitBig = true;
      }
    }
  }

}