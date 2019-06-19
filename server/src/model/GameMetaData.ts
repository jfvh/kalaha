import { GameStatus } from './GameStatus';

export interface GameMetaData {
  gameId: string;
  player1Id: string;
  player2Id: string;
  status: GameStatus;
}