import { Board } from '../model/Board';
import { Player } from '../model/Player';
import { getPitValue, dropOneStoneInEachpit, dropStoneInSmallPit, getBoard, dropStoneInBigPit } from '../data/board';
import { getOtherPlayer } from '../data/player';

export function makeMove(self: Player, pitNumber: number): Board {
  const otherPlayer = getOtherPlayer(self);
  let stones = getPitValue(self, pitNumber);
  let index = pitNumber;

  // if multiple rounds, handle that first
  const modulo = Math.floor(stones / TOTAL_PITS)
  for (let i = 0; i < modulo; i++) {
    console.log('drop one stone in each pit first!')
    dropOneStoneInEachpit();
  }
  stones = stones % TOTAL_PITS;
  // now stones < TOTAL PITS
  while (stones > 0) {
    handleStoneDropping(index);
    stones--;
    index++;
  }
  return getBoard();
}

function handleStoneDropping(index: number) {
  if (index < AMOUNT_OF_PITS_PER_PLAYER) {
    dropStoneInSmallPit(Player.PLAYER_1, index);
  } else if (index === AMOUNT_OF_PITS_PER_PLAYER) {
    dropStoneInBigPit(Player.PLAYER_1);
  } else if (index > AMOUNT_OF_PITS_PER_PLAYER && index < (TOTAL_PITS - 1)) {
    dropStoneInSmallPit(Player.PLAYER_2, index - (AMOUNT_OF_PITS_PER_PLAYER + 1));
  } else if (index === (TOTAL_PITS - 1)) {
    dropStoneInBigPit(Player.PLAYER_2);
  }
}