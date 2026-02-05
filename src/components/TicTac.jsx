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
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return null;
  }

  const WinnerFound = checkWinner();
  const isDraw = !WinnerFound && state.every(cell => cell !== null);

  function handleClick(index) {
    if (state[index] || WinnerFound || isDraw) return;

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
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">

      {WinnerFound ? (
        <div className="bg-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            🎉 {WinnerFound} Wins!
          </h1>
          <button
            onClick={playAgain}
            className="mt-4 px-8 py-3 bg-white text-purple-600 font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Play Again
          </button>
        </div>

      ) : isDraw ? (
        <div className="bg-white/20 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            🤝 It's a Draw!
          </h1>
          <button
            onClick={playAgain}
            className="mt-4 px-8 py-3 bg-white text-pink-600 font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Play Again
          </button>
        </div>

      ) : (
        <div className="bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl">

          <h2 className="text-center text-3xl font-extrabold text-white mb-6">
            Player <span className="text-yellow-300">{isXTurn ? "X" : "O"}</span> Turn
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {state.map((value, index) => (
              <Board
                key={index}
                value={value}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TicTac;
