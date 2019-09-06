import { Board } from '../model/Board';
import { Player } from '../model/Player';
import { getPitValue, dropOneStoneInEachpit, dropStoneInSmallPit, getBoard, dropStoneInBigPit, removeStonesFromPit } from '../data/board';
import { TOTAL_PITS, AMOUNT_OF_PITS_PER_PLAYER } from '../constants';

let stones: number;
let index: number;

export function makeMove(self: Player, pitNumber: number): Board {
  stones = getPitValue(self, pitNumber);
  removeStonesFromPit(self, pitNumber);
  index = self === Player.PLAYER_1 ? pitNumber + 1 : pitNumber + 2 + AMOUNT_OF_PITS_PER_PLAYER; // starting point

  // if multiple rounds, handle that first
  const modulo = Math.floor(stones / TOTAL_PITS)
  for (let i = 0; i < modulo; i++) {
    console.log('drop one stone in each pit first!')
    dropOneStoneInEachpit();
  }
  stones = stones % TOTAL_PITS;
  // now stones < TOTAL PITS
  let droppedAStone = true;
  while (stones > 0 && droppedAStone) {
    droppedAStone = handleStoneDropping(index, self);
    index++;
  }

  // nothing changed, but some stones over.
  if (stones > 0) {
    index = index - (TOTAL_PITS - 1);
    while (stones > 0) {
      handleStoneDropping(index, self);
      index++;
    }
  }

  return getBoard();
}

function handleStoneDropping(index: number, self: Player): boolean {
  if (index < AMOUNT_OF_PITS_PER_PLAYER) {
    dropStoneInSmallPit(Player.PLAYER_1, index);
    stones--;
    return true;
  } else if (index === AMOUNT_OF_PITS_PER_PLAYER) {
    if (self === Player.PLAYER_1) {
      dropStoneInBigPit(Player.PLAYER_1);
      stones--;
    };
    return true;
  } else if (index > AMOUNT_OF_PITS_PER_PLAYER && index < (TOTAL_PITS - 1)) {
    dropStoneInSmallPit(Player.PLAYER_2, index - (AMOUNT_OF_PITS_PER_PLAYER + 1));
    stones--;
    return true;
  } else if (index === (TOTAL_PITS - 1)) {
    if (self === Player.PLAYER_2) {
      dropStoneInBigPit(Player.PLAYER_2);
      stones--;
    }
    return true;
  }
  return false;
}