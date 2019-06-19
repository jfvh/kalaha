import { getGameId, isValidPlayer } from "../data/meta";

export function validatedRequest(req: any, res: any, after: Function) {
  const isValidRequest = isValid(req, res);
  if (isValidRequest) {
    after(req, res);
  }
}

function isValid(req: any, res: any): boolean {
  const gameId = req.query.gameId;
  if (!gameId || gameId !== getGameId()) {
    res.status(403).send({ "message": `no valid game ID. Go away or assign to the game first with /assign or reset the game with /reset` });
    return false;
  }

  const playerId = req.query.playerId;
  if (!isValidPlayer(playerId)) {
    res.status(403).send({ "message": `no valid player ID (${playerId}). Go away or assign to the game first with /assign` });
    return false;
  }
  return true;
}