import React, { useEffect, useState } from 'react';

import Tile from './Tile'
import ResetButton from './ResetButton'

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [moves, setMoves] = useState(5);
  const [win, setWin] = useState(null);

  const handleTileClick = (playerMove) => {
    if (board[playerMove] === null && win === null) {
      let opponentMove = null
      if (moves !== 1) {
        opponentMove = Math.floor(Math.random() * 10);

        while (opponentMove === playerMove || board[opponentMove] !== null) {
          opponentMove = Math.floor(Math.random() * 10);
        }
      }

      const newBoard = board.map((tile, idx) => {
        if (idx === playerMove) {
          return 1
        }
        if (idx === opponentMove) {
          return 0
        }
        return tile
      });

      // console.log(`Move: ${opponentMove}   Index: ${playerMove}`);
      // console.log(newBoard);
      setBoard(newBoard);
      setMoves(moves - 1)
    }
  }
  useEffect(() => {
    function checkWin() {
      const horizontal = [
        board.slice(0, 3),
        board.slice(3, 6),
        board.slice(6, 9)
      ]
      horizontal.forEach((row) => {
        checkSum(row)
      })

      const vertical = [
        [board[0], board[3], board[6]],
        [board[1], board[4], board[7]],
        [board[2], board[5], board[8]],
      ]
      vertical.forEach((col) => {
        checkSum(col)
      })

      const diagonal = [
        [board[0], board[4], board[8]],
        [board[2], board[4], board[6]]
      ]

      diagonal.forEach((col) => {
        checkSum(col)
      })
      // console.log(horizontal);
    }

    function checkSum(list) {
      let isFilled = checkFilled(list)
      if (isFilled) {
        const sum = list.reduce((a, b) => a + b)
        if (sum === 3) {
          console.log('X Wins');
          setWin(1)
        }
        if (sum === 0) {
          console.log('O Wins');
          setWin(0)
        }
      }
    }

    function checkFilled(array) {
      return !array.some(function (el) {
        return el === null;
      });
    }

    checkWin()
  }, [board])

  const handleResetClick = () => {
    setBoard(Array(9).fill(null));
    setMoves(5);
    setWin(null)
  }

  return (
    <div className="flex-col items-center justify-center w-full h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-wrap w-1/2">
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
      </div>
      <ResetButton handleResetClick={handleResetClick} />
    </div>

  );
}

export default Board;