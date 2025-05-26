
import React from 'react';
import { CheckCircle, Target, List, Lightbulb } from 'lucide-react';

interface LessonPanelProps {
  lesson: any;
  lessonCompleted: boolean;
  showHint: boolean;
  onToggleHint: () => void;
}

export const LessonPanel = ({ lesson, lessonCompleted, showHint, onToggleHint }: LessonPanelProps) => {
  return (
    <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-white">{lesson.title}</h2>
            {lessonCompleted && (
              <CheckCircle className="text-green-400" size={24} />
            )}
          </div>
        </div>
        
        <div className="prose prose-invert max-w-none mb-6">
          <p className="text-slate-300 text-lg leading-relaxed">{lesson.explanation}</p>
        </div>

        {lesson.objectives && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <Target className="mr-2" size={20} />
              Learning Objectives
            </h3>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              {lesson.objectives.map((objective: string, index: number) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>
          </div>
        )}

        {lesson.steps && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <List className="mr-2" size={20} />
              Step-by-Step Instructions
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              {lesson.steps.map((step: string, index: number) => (
                <li key={index} className="leading-relaxed">{step}</li>
              ))}
            </ol>
          </div>
        )}
        
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleHint}
            className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition-colors"
          >
            <Lightbulb size={16} />
            <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
          </button>
        </div>
        
        {showHint && (
          <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
            <h4 className="text-yellow-200 font-semibold mb-2">💡 Hint:</h4>
            <p className="text-yellow-200">{lesson.hint}</p>
          </div>
        )}

        {lesson.microChallenges && showHint && (
          <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
            <h4 className="text-purple-200 font-semibold mb-2">🚀 Bonus Challenges:</h4>
            <ul className="list-disc list-inside space-y-1 text-purple-200">
              {lesson.microChallenges.map((challenge: string, index: number) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
