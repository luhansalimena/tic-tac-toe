import React, { useState } from 'react';

import Tile from './Tile'

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [moves, setMoves] = useState(5)

  const handleTileClick = (playerMove) => {
    if (board[playerMove] === null) {
      let opponentMove = null
      if (moves !== 1) {
        opponentMove = Math.floor(Math.random() * 10);

        while (opponentMove === playerMove || board[opponentMove] !== null) {
          opponentMove = Math.floor(Math.random() * 10);
        }
      }

      const newBoard = board.map((tile, idx) => {
        if (idx === playerMove) {
          return 'x'
        }

        if (idx === opponentMove) {
          return 'o'
        }
        return tile
      });

      console.log(`Move: ${opponentMove}   Index: ${playerMove}`);
      console.log(newBoard);
      setBoard(newBoard);
      setMoves(moves - 1)
    }
  }

  return (
    <div className="flex-wrap flex w-1/2">
      <Tile handleTileClick={handleTileClick} index={0} selected={board[0]} classes="border-r-4 border-b-4 border-white" />
      <Tile handleTileClick={handleTileClick} index={1} selected={board[1]} classes="border-r-4 border-b-4 border-white" />
      <Tile handleTileClick={handleTileClick} index={2} selected={board[2]} classes=" border-b-4 border-white" />
      <Tile handleTileClick={handleTileClick} index={3} selected={board[3]} classes="border-r-4 border-b-4 border-white" />
      <Tile handleTileClick={handleTileClick} index={4} selected={board[4]} classes="border-r-4 border-b-4 border-white" />
      <Tile handleTileClick={handleTileClick} index={5} selected={board[5]} classes="border-b-4 border-white" />
      <Tile handleTileClick={handleTileClick} index={6} selected={board[6]} classes="border-r-4 border-white" />
      <Tile handleTileClick={handleTileClick} index={7} selected={board[7]} classes="border-r-4 border-white" />
      <Tile handleTileClick={handleTileClick} index={8} selected={board[8]} classes="border-white" />
    </div>
  );
}

export default Board;