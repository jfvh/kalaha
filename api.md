# Kalaha API

## create new game or join

GET /play

return 
```
{
  gameid={}
  playerid={}
}
```

## poll for status

GET /status?gameid={gameid}&playerid={playerid}

return 
```
  {
    state=WAITING_FOR_PLAYER|PLAYING|FINISHED
    yourTurn=boolean
    board={board}
  }

```

## do a move

GET /move?gameid={gameid}&playerid={playerid}&pitId={pitId}

return
```
  {
    result=ACCEPTED|DECLINED|FINISHED
    game={gamestate}
  }
```

## gamestate
this objects represents the current state of the board

{
  id
  player1id
  player2id
  ?winner=player1|player2
  board={}
}
