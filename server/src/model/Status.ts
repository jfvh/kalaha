import { GameStatus } from './GameStatus';
import { Board } from './Board';

interface StatusPlaying {
  status: GameStatus;
  yourTurn: boolean;
  board: Board;
}

interface StatusFinished {
  status: GameStatus;
  youDidWin: boolean;
}

export type Status = StatusPlaying | StatusFinished;