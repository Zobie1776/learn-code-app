
import React from 'react';
import { ArrowLeft, Code, Award } from 'lucide-react';
import { UserProgress } from '../types/progress';

interface HeaderProps {
  isLearningMode: boolean;
  onBackToDashboard: () => void;
  userProgress: UserProgress;
}

export const Header = ({ isLearningMode, onBackToDashboard, userProgress }: HeaderProps) => {
  const totalXP = Object.values(userProgress).reduce((sum, track) => sum + (track?.xp || 0), 0);
  
  return (
    <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {isLearningMode && (
            <button
              onClick={onBackToDashboard}
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Dashboard</span>
            </button>
          )}
          
          {!isLearningMode && (
            <div className="flex items-center space-x-2">
              <Code className="text-cyan-400" size={28} />
              <span className="text-white font-bold text-xl">LearnCode</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-yellow-400">
            <Award size={20} />
            <span className="font-semibold">{totalXP} XP</span>
          </div>
          
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
            U
          </div>
        </div>
      </div>
    </header>
  );
};
