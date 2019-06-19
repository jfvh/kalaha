import { getStatus } from "../data/meta";
import { hasTurn, wasLastWinner } from "../data/player";
import { getBoard } from "../data/board";
import { GameStatus } from '../model/GameStatus';

export function status(req: any, res: any) {
  const playerId = req.query.playerId;

  const gameStatus = getStatus();
  let response;
  switch (gameStatus) {
    case GameStatus.FINISHED:
      response = {
        status: gameStatus.toString(),
        youDidWin: wasLastWinner(playerId)
      }
      break;
    case GameStatus.PLAYING:
      console.log(getBoard());
      response = {
        status: gameStatus.toString(),
        yourTurn: hasTurn(playerId),
        board: getBoard()
      }
      break;
    default:
      response = {
        status: gameStatus.toString(),
      }
  }
  res.status(200).send(response);
}
