// import React from 'react';


// export const Create = () => {
//     return (
//         <>
//         <div className="bg-white rounded-xl p-4 sm:p-8 shadow-lg mb-8">
//             <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-indigo-900">Welcome to Tic Tac Toe!</h1>
//             <div className="space-y-6">
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Player X Name</label>
//                   <input
//                     type="text"
//                     value={player1Name}
//                     onChange={(e) => setPlayer1Name(e.target.value)}
//                     className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                     placeholder="Enter Player X name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Choose Avatar</label>
//                   <div className="grid grid-cols-4 gap-2">
//                     {avatarOptions.map((avatar) => (
//                       <button
//                         key={avatar.name}
//                         onClick={() => setPlayer1Avatar(avatar)}
//                         className={`p-2 rounded-lg border-2 transition-colors ${
//                           player1Avatar.name === avatar.name
//                             ? 'border-indigo-500 bg-indigo-50'
//                             : 'border-gray-200 hover:border-indigo-200'
//                         }`}
//                       >
//                         {avatar.icon}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onClick={startGame}
//                 className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-base sm:text-lg"
//               >
//                 Start Game
//               </button>
//             </div>
//           </div>
//         </>
//     );
// };
import React, { useEffect, useState } from 'react';
import { User, Gamepad, Swords, Crown, Ghost, Skull, Users, Clock, Trophy, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
  const [activeTab, setActiveTab] = useState('create');
  const [player1Name, setPlayer1Name] = useState('');
  const [player1Avatar, setPlayer1Avatar] = useState({ name: 'gamepad', icon: <Gamepad className="w-6 h-6 text-indigo-400" /> });

  const navigate = useNavigate();
  const avatarOptions = [
    { name: 'gamepad', icon: <Gamepad className="w-6 h-6 text-indigo-400" /> },
    { name: 'swords', icon: <Swords className="w-6 h-6 text-indigo-400" /> },
    { name: 'crown', icon: <Crown className="w-6 h-6 text-indigo-400" /> },
    { name: 'ghost', icon: <Ghost className="w-6 h-6 text-indigo-400" /> },
    { name: 'skull', icon: <Skull className="w-6 h-6 text-indigo-400" /> },
    { name: 'user', icon: <User className="w-6 h-6 text-indigo-400" /> }
  ];

  const availableMatches = [
    {
      id: 1,
      host: "Alice's Game",
      avatar: <Crown className="w-6 h-6 text-yellow-400" />,
      gameType: "Tic Tac Toe",
      status: "Waiting",
      created: "2 min ago"
    },
    {
      id: 2,
      host: "Bob's Room",
      avatar: <Ghost className="w-6 h-6 text-purple-400" />,
      gameType: "Tic Tac Toe",
      status: "Waiting",
      created: "5 min ago"
    },
    {
      id: 3,
      host: "Charlie's Match",
      avatar: <Swords className="w-6 h-6 text-red-400" />,
      gameType: "Tic Tac Toe",
      status: "Waiting",
      created: "7 min ago"
    }
  ];
  const createMatch = () => {
    axios.post('http://localhost:5000/api/match', {
      'player1Name': player1Name,
      'player1Avatar': player1Avatar.name
    }).catch((err) => { console.log(err) });
  };

  const navigateToSearch = () => {
    createMatch();
    navigate('/search');
  };
  const navigateToBoard = () => {
    navigate('/board');
  };
  const startGame = () => {
    if (!player1Name.trim()) {
      alert('Please enter your name');
      return;
    }
    navigateToSearch();
    
    // Handle game start logic here
  };

  const joinGame = (matchId) => {
    if (!player1Name.trim()) {
      alert('Please enter your name first');
      return;
    }
    navigateToBoard();
    // Handle join game logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <button 
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Games</span>
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('create')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${activeTab === 'create' ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Create Game
            </button>
            <button
              onClick={() => setActiveTab('join')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${activeTab === 'join' ? 'bg-indigo-500 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              Join Game
            </button>
          </div>
        </div>

        {activeTab === 'create' ? (
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 sm:p-8 shadow-2xl border border-gray-700/50 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 bg-white text-transparent bg-clip-text">
              Create New Game
            </h1>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={player1Name}
                    onChange={(e) => setPlayer1Name(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-100 placeholder-gray-500"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Choose Your Avatar
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {avatarOptions.map((avatar) => (
                      <button
                        key={avatar.name}
                        onClick={() => setPlayer1Avatar(avatar)}
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          player1Avatar.name === avatar.name
                            ? 'border-indigo-500 bg-indigo-500/20'
                            : 'border-gray-700 hover:border-indigo-400/50 bg-gray-800/50'
                        }`}
                      >
                        {avatar.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={startGame}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium text-base sm:text-lg shadow-lg shadow-indigo-500/25"
              >
                Create Game Room
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 sm:p-8 shadow-2xl border border-gray-700/50 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 bg-white text-transparent bg-clip-text">
              Available Games
            </h1>

            <div className="space-y-4">
              {!player1Name && (
                <div className="bg-gray-900/50 border border-yellow-500/20 rounded-lg p-4 mb-6">
                  <p className="text-yellow-400 text-sm">Please enter your name before joining a game</p>
                  <div className="mt-3">
                    <input
                      type="text"
                      value={player1Name}
                      onChange={(e) => setPlayer1Name(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-100 placeholder-gray-500"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
              )}

              {availableMatches.map((match) => (
                <div
                  key={match.id}
                  className="bg-gray-900/50 border border-gray-700/50 rounded-lg p-4 hover:border-indigo-500/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-800 rounded-lg">
                        {match.avatar}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-200">{match.host}</h3>
                        <p className="text-sm text-gray-400">{match.gameType}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-gray-400">{match.created}</div>
                      <button
                        onClick={() => joinGame(match.id)}
                        className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors"
                      >
                        Join Game
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center text-gray-400 text-sm">
          <p>12 Players Online • 3 Games Available</p>
        </div>
      </div>
    </div>
  );
}

export default Create;
