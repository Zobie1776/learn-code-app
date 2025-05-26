
import React from 'react';
import { Trophy, Zap, Target } from 'lucide-react';
import { UserProgress, ProgressStats } from '../types/progress';

interface ProgressTrackerProps {
  userProgress: UserProgress;
}

export const ProgressTracker = ({ userProgress }: ProgressTrackerProps) => {
  const calculateStats = (): ProgressStats => {
    const tracks = Object.keys(userProgress);
    const totalXP = Object.values(userProgress).reduce((sum, track) => sum + (track?.xp || 0), 0);
    const totalCompleted = Object.values(userProgress).reduce((sum, track) => sum + (track?.completedLessons?.length || 0), 0);
    
    return {
      totalTracks: tracks.length,
      totalXP,
      totalCompleted,
      streak: 3 // This would be calculated based on daily activity
    };
  };

  const stats = calculateStats();

  if (Object.keys(userProgress).length === 0) {
    return (
      <div className="max-w-4xl mx-auto mb-12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Start Your Coding Journey</h3>
          <p className="text-slate-300">Choose a track below to begin learning and track your progress!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mb-12">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">Your Progress</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-4 text-center">
          <Target className="text-cyan-400 mx-auto mb-2" size={24} />
          <div className="text-2xl font-bold text-white">{stats.totalTracks}</div>
          <div className="text-cyan-300 text-sm">Tracks Started</div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 text-center">
          <Trophy className="text-purple-400 mx-auto mb-2" size={24} />
          <div className="text-2xl font-bold text-white">{stats.totalCompleted}</div>
          <div className="text-purple-300 text-sm">Lessons Completed</div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-4 text-center">
          <Zap className="text-yellow-400 mx-auto mb-2" size={24} />
          <div className="text-2xl font-bold text-white">{stats.totalXP}</div>
          <div className="text-yellow-300 text-sm">Total XP</div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 text-center">
          <div className="text-green-400 mx-auto mb-2 text-2xl">🔥</div>
          <div className="text-2xl font-bold text-white">{stats.streak}</div>
          <div className="text-green-300 text-sm">Day Streak</div>
        </div>
      </div>
    </div>
  );
};
