import React from 'react';
import { Gamepad2, Swords, Brain, Trophy, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();
  const games = [
    {
      id: 'tictactoe',
      name: 'Tic Tac Toe',
      icon: <Swords className="w-8 h-8" />,
      description: "Classic strategic battle of X's and O's",
      players: '2 Players',
      time: '5 min',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10'
    },
    {
      id: 'pingpong',
      name: 'Ping Pong',
      icon: <Gamepad2 className="w-8 h-8" />,
      description: 'Fast-paced virtual table tennis challenge',
      players: '2 Players',
      time: '10 min',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      id: 'memory',
      name: 'Memory Game',
      icon: <Brain className="w-8 h-8" />,
      description: 'Test your memory with matching pairs',
      players: '1 Player',
      time: '15 min',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-white text-transparent bg-clip-text">
            Game Center
          </h1>
          <p className="text-gray-400">Choose your game and start playing</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => navigate(game.id)}
              className={`group relative bg-gradient-to-br ${game.bgGradient} backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-${game.gradient.split('-')[1]}-500/10`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl transition-opacity duration-300 group-hover:opacity-90" />
              
              <div className="relative">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-br ${game.gradient} mb-4`}>
                  {game.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{game.name}</h3>
                <p className="text-gray-400 mb-4">{game.description}</p>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{game.players}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{game.time}</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-800 flex items-center justify-center"
                      >
                        <Trophy className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                  <span className={`bg-gradient-to-r ${game.gradient} px-4 py-2 rounded-lg text-sm font-medium`}>
                    Play Now
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-400">
          <p>12 Players Online • 24 Games Played Today</p>
        </footer>
      </div>
    </div>
  );
}

export default Menu;