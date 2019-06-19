import { hasTurn } from "../data/game";
import { status } from './status';

//todo implement
export function move(req: any, res: any) {
  const playerId = req.query.playerId;
  if (!hasTurn(playerId)) {
    res.status(403).send({ "message": "Not your turn." })
    return;
  }

}