import { Board } from '../model/Board';
import { Player } from '../model/Player';
import { getPitValue, dropOneStoneInEachpit, dropStoneInSmallPit, getBoard, dropStoneInBigPit } from '../data/board';
import { getOtherPlayer } from '../data/player';

export function makeMove(self: Player, pitNumber: number): Board {
  const otherPlayer = getOtherPlayer(self);
  let stones = getPitValue(self, pitNumber);
  let index = pitNumber + 1; // starting point

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
    droppedAStone = handleStoneDropping(index);
    stones--;
    index++;
  }

  // nothing changed, but some stones over.
  if (stones > 0) {
    index = index - TOTAL_PITS;
    while (stones > 0) {
      handleStoneDropping(index);
      stones--;
      index++;
    }
  }

  return getBoard();
}

function handleStoneDropping(index: number): boolean {
  if (index < AMOUNT_OF_PITS_PER_PLAYER) {
    dropStoneInSmallPit(Player.PLAYER_1, index);
    return true;
  } else if (index === AMOUNT_OF_PITS_PER_PLAYER) {
    dropStoneInBigPit(Player.PLAYER_1);
    return true;
  } else if (index > AMOUNT_OF_PITS_PER_PLAYER && index < (TOTAL_PITS - 1)) {
    dropStoneInSmallPit(Player.PLAYER_2, index - (AMOUNT_OF_PITS_PER_PLAYER + 1));
    return true;
  } else if (index === (TOTAL_PITS - 1)) {
    dropStoneInBigPit(Player.PLAYER_2);
    return true;
  }
  return false;
}