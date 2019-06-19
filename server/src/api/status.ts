import { getGameId, isValidPlayer, getStatus } from "../data/meta";
import { hasTurn, wasLastWinner } from "../data/game";
import { getBoard } from "../data/board";
import { GameStatus } from '../model/GameStatus';

export function status(req: any, res: any) {
  const gameId = req.query.gameId;
  if (!gameId || gameId !== getGameId()) {
    res.status(403).send(`no valid game ID. Go away or assign to the game first with /assign or reset the game with /reset`);
    return;
  }

  const playerId = req.query.playerId;
  if (!isValidPlayer(playerId)) {
    res.status(403).send(`no valid player ID (${playerId}). Go away or assign to the game first with /assign`);
    return;
  }

  const gameStatus = getStatus();
  let response;
  switch (gameStatus) {
    case GameStatus.FINISHED:
      response = {
        status: gameStatus.toString(),
        youDidWin: wasLastWinner(playerId)
      }
    case GameStatus.PLAYING:
      response = {
        status: gameStatus.toString(),
        yourTurn: hasTurn(playerId),
        board: getBoard()
      }
    default:
      response = {
        status: gameStatus.toString(),
      }
  }
  res.status(200).send(response);
}
