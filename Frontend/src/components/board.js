import React, { useState } from 'react';
import { X, Circle, User } from 'lucide-react';

export const Board = ({ match_id }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    
    const player1Name = "Player 1";
    const player2Name = "Player 2";
    const player1Avatar = { icon: <User className="w-6 h-6" />, name: 'user' };
    const player2Avatar = { icon: <User className="w-6 h-6" />, name: 'user' };
    
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    const checkWinner = (boardState) => {
      for (const combo of winningCombinations) {
        const [a, b, c] = combo;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
          return boardState[a];
        }
      }
      if (boardState.every(cell => cell !== null)) return 'Draw';
      return null;
    };

    const handleClick = (index) => {
      if (board[index] || winner || isEditing) return;

      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);

      const gameWinner = checkWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    };

    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setCurrentPlayer('X');
      setWinner(null);
    };

    const renderCell = (index) => {
      return (
        <button
          onClick={() => handleClick(index)}
          className="w-full h-full flex items-center justify-center text-4xl font-bold border-4 border-indigo-200 rounded-lg transition-colors hover:bg-indigo-50 disabled:hover:bg-white"
          disabled={!!board[index] || !!winner || isEditing}
        >
          {board[index] === 'X' && <X className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-600" />}
          {board[index] === 'O' && <Circle className="w-8 h-8 sm:w-12 sm:h-12 text-pink-600" />}
        </button>
      );
    };
    return (
        <>
          <div className="min-h-screen bg-black p-4 sm:p-8">
            <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg mb-4 sm:mb-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
                  <div className={`flex items-center gap-2 text-lg sm:text-xl font-semibold ${currentPlayer === 'X' ? 'text-indigo-600' : 'text-gray-500'}`}>
                    <div className="w-8 h-8 flex items-center justify-center bg-indigo-100 rounded-full">
                      {player1Avatar.icon}
                    </div>
                    {player1Name} (X)
                  </div>
                  <div className="text-base sm:text-lg font-medium text-gray-600">vs</div>
                  <div className={`flex items-center gap-2 text-lg sm:text-xl font-semibold ${currentPlayer === 'O' ? 'text-pink-600' : 'text-gray-500'}`}>
                    <div className="w-8 h-8 flex items-center justify-center bg-pink-100 rounded-full">
                      {player2Avatar.icon}
                    </div>
                    {player2Name} (O)
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 sm:p-8 shadow-lg">
                <div className="grid grid-cols-3 gap-2 sm:gap-4 aspect-square max-w-[min(90vw,600px)] mx-auto">
                  {Array(9).fill(null).map((_, index) => (
                    <div key={index} className="aspect-square">
                      {renderCell(index)}
                    </div>
                  ))}
                </div>

                {winner && (
                  <div className="mt-6 sm:mt-8 text-center">
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                      {winner === 'Draw'
                        ? "It's a Draw!"
                        : `${winner === 'X' ? player1Name : player2Name} Wins!`}
                    </h2>
                    <button
                      onClick={resetGame}
                      className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors text-base sm:text-lg"
                    >
                      Play Again
                    </button>
                  </div>
                )}

                {!winner && (
                  <div className="mt-6 sm:mt-8 text-center text-lg sm:text-xl font-semibold text-gray-700">
                    Current Turn: {currentPlayer === 'X' ? player1Name : player2Name}
                  </div>
                )}
              </div>
              </div>
            </div>
          </>
    );
};