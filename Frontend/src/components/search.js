import React from "react";
import { Loader2, Users, GamepadIcon } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const navigate = useNavigate();
    return (
        <>
           <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-xl">
              <div className="flex flex-col items-center space-y-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <GamepadIcon className="w-12 h-12 text-white" />
                </div>
                
                <h1 className="text-3xl font-bold text-white text-center">
                  Tic Tac Toe
                </h1>
                <div className=" text-white/90">
                  Match id : <span className="font-bold text-whit">64h7bs</span> 
                </div>
                
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="w-6 h-6 text-white animate-spin" />
                  <span className="text-white/90">Finding opponent...</span>
                </div>
                
                <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 text-white/80" />
                  <span className="text-white/80">12 players online</span>
                </div>
                
                <div className="mt-8 bg-white/5 rounded-lg p-4">
                  <h3 className="text-white/90 font-medium mb-2">While you wait...</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Get 3 in a row to win</li>
                    <li>• You'll play as X or O randomly</li>
                    <li>• Each player has 30 seconds per turn</li>
                  </ul>
                </div>
                
                <button 
                  className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white border border-white/20"
                  onClick={() => navigate('/')}
                >
                  Cancel Search
                </button>
              </div>
            </div>
          </div>
          </>
    );
};
