import React, { useState } from 'react';
import Board from './Board';

const TicTac = () => {

  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  function checkWinner() {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (
        state[a] !== null &&
        state[a] === state[b] &&
        state[a] === state[c]
      ) {
        return state[a];
      }
    }

    return null;
  }

  const WinnerFound = checkWinner();
  const isDraw = !WinnerFound && state.every(cell => cell !== null);

  function handleClick(index) {
    if (state[index] !== null || WinnerFound || isDraw) return;

    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(prev => !prev);
  }

  function playAgain() {
    setState(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    WinnerFound ? (

      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-2xl font-bold">
          Hurrah! "{WinnerFound}" Won the Game!
        </p>

        <button
          className="bg-blue-700 text-white font-bold hover:text-blue-700 hover:bg-white rounded-2xl border-2 w-40 mt-4"
          onClick={playAgain}
        >
          Play Again!
        </button>
      </div>

    ) : isDraw ? (

      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-2xl font-bold">
          It's a Draw! 🤝
        </p>

        <button
          className="bg-blue-700 text-white font-bold hover:text-blue-700 hover:bg-white rounded-2xl border-2 w-40 mt-4"
          onClick={playAgain}
        >
          Play Again!
        </button>
      </div>

    ) : (

      <div className="w-screen flex flex-col justify-center items-center h-screen">
        <h5 className="font-bold text-2xl text-center p-4">
          Player {isXTurn ? "X" : "O"} Turn
        </h5>

        <div className="flex">
          <Board value={state[0]} onClick={() => handleClick(0)} />
          <Board value={state[1]} onClick={() => handleClick(1)} />
          <Board value={state[2]} onClick={() => handleClick(2)} />
        </div>

        <div className="flex">
          <Board value={state[3]} onClick={() => handleClick(3)} />
          <Board value={state[4]} onClick={() => handleClick(4)} />
          <Board value={state[5]} onClick={() => handleClick(5)} />
        </div>

        <div className="flex">
          <Board value={state[6]} onClick={() => handleClick(6)} />
          <Board value={state[7]} onClick={() => handleClick(7)} />
          <Board value={state[8]} onClick={() => handleClick(8)} />
        </div>
      </div>

    )
  );
};

export default TicTac;
