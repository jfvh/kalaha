import { hasTurn, getPlayerFromId } from "../data/player";
import { getPitValue } from "../data/board";
import { makeMove } from "../gamelogic/makeMove";
import { AMOUNT_OF_PITS_PER_PLAYER } from '../constants';

//todo implement
export function move(req: any, res: any) {
  const playerId = req.query.playerId;
  if (!hasTurn(playerId)) {
    res.status(403).send({ "message": "Not your turn." })
    return;
  }
  const player = getPlayerFromId(playerId);
  if (!player) {
    res.status(403).send({ "message": `This check is there because I am smarter than typescript` });
    return;
  }
  //valid player takes turn

  const pitNumber = req.query.pitNumber;
  if (pitNumber < 0 || pitNumber > (AMOUNT_OF_PITS_PER_PLAYER - 1)) {
    res.status(403).send({ "message": `Not a valid pit number (${pitNumber})` });
    return;
  }
  // valid pit number selected
  const pitvalue = getPitValue(player, pitNumber);
  if (pitvalue === 0) {
    res.status(403).send({ "message": `There are no stones left in the pit, select another one.` });
    return;
  }

  //implement do move logic
  const updatedBoard = makeMove(player, pitNumber);
  res.status(200).send({ "board": updatedBoard });


}