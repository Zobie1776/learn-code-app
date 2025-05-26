
import React from 'react';
import { Code, Shield, Globe, Cpu, BookOpen } from 'lucide-react';
import { tracks } from '../data/tracks';
import { UserProgress } from '../types/progress';

interface TrackSelectorProps {
  onTrackSelect: (track: any) => void;
  userProgress: UserProgress;
}

export const TrackSelector = ({ onTrackSelect, userProgress }: TrackSelectorProps) => {
  const getTrackIcon = (trackType: string) => {
    const icons = {
      python: Code,
      javascript: Globe,
      cybersecurity: Shield,
      algorithms: Cpu,
      webdev: Globe
    };
    return icons[trackType as keyof typeof icons] || BookOpen;
  };

  const getTrackProgress = (trackId: string): number => {
    const progress = userProgress[trackId];
    if (!progress) return 0;
    
    const track = tracks.find(t => t.id === trackId);
    if (!track) return 0;
    
    return Math.round((progress.completedLessons?.length || 0) / track.lessons.length * 100);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Learning Track</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track) => {
          const IconComponent = getTrackIcon(track.type);
          const progress = getTrackProgress(track.id);
          const isStarted = progress > 0;
          
          return (
            <div
              key={track.id}
              onClick={() => onTrackSelect(track)}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className={`p-3 rounded-lg ${track.color} text-white`}>
                  <IconComponent size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{track.lessons.length} lessons</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4 line-clamp-2">{track.description}</p>
              
              {isStarted && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-slate-400 mb-1">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap gap-2">
                {track.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-white/10 text-white text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 text-right">
                <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                  {isStarted ? 'Continue →' : 'Start Learning →'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
