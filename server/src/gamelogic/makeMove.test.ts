import { reset, getBoard } from "../data/board";
import { makeMove } from "./makeMove";
import { Player } from "../model/Player";
import { Board } from '../model/Board';

test('simple first move', () => {

  reset();
  makeMove(Player.PLAYER_1, 0);

  const expectedBoard = <Board>{
    player1BigPit: 1,
    player1Pits: [0, 7, 7, 7, 7, 7],
    player2BigPit: 0,
    player2Pits: [6, 6, 6, 6, 6, 6]
  };
  expect(getBoard()).toEqual(expectedBoard);

});


test('simple first move nr 2', () => {

  reset();
  makeMove(Player.PLAYER_1, 5);

  const expectedBoard = <Board>{
    player1BigPit: 1,
    player1Pits: [6, 6, 6, 6, 6, 0],
    player2BigPit: 0,
    player2Pits: [7, 7, 7, 7, 7, 6]
  };
  expect(getBoard()).toEqual(expectedBoard);

});

test('simple first move for player 2', () => {

  reset();
  makeMove(Player.PLAYER_2, 0);

  const expectedBoard = <Board>{
    player1BigPit: 0,
    player1Pits: [6, 6, 6, 6, 6, 6],
    player2BigPit: 1,
    player2Pits: [0, 7, 7, 7, 7, 7]
  };
  expect(getBoard()).toEqual(expectedBoard);

});


test('a few moves, test if big pit of other is skipped', () => {

  reset();
  makeMove(Player.PLAYER_2, 0);

  const expectedBoard = <Board>{
    player1BigPit: 0,
    player1Pits: [6, 6, 6, 6, 6, 6],
    player2BigPit: 1,
    player2Pits: [0, 7, 7, 7, 7, 7]
  };
  expect(getBoard()).toEqual(expectedBoard);
  makeMove(Player.PLAYER_2, 5);
  const expectedBoard2 = <Board>{
    player1BigPit: 0,
    player1Pits: [7, 7, 7, 7, 7, 7],
    player2BigPit: 2,
    player2Pits: [0, 7, 7, 7, 7, 0]
  };
  expect(getBoard()).toEqual(expectedBoard2);

});


