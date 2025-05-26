
import React from 'react';
import { CheckCircle, Target, List, Lightbulb, Code2, Zap } from 'lucide-react';

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

        {lesson.syntaxIntro && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
              <Code2 className="mr-2" size={20} />
              New Concept: {lesson.syntaxIntro.concept}
            </h3>
            
            <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
              <h4 className="text-cyan-300 font-semibold mb-2">Syntax:</h4>
              <code className="text-green-400 bg-slate-900 px-2 py-1 rounded font-mono text-sm">
                {lesson.syntaxIntro.syntax}
              </code>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
              <h4 className="text-cyan-300 font-semibold mb-2">Minimal Example:</h4>
              <pre className="text-green-400 bg-slate-900 p-3 rounded font-mono text-sm overflow-x-auto">
                {lesson.syntaxIntro.minimalExample}
              </pre>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
              <h4 className="text-cyan-300 font-semibold mb-2">Step-by-Step Breakdown:</h4>
              <ul className="space-y-2">
                {lesson.syntaxIntro.breakdown.map((step: string, index: number) => (
                  <li key={index} className="text-slate-300 flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <code className="text-yellow-300 mr-2">
                      {step.split(' → ')[0]}
                    </code>
                    <span>→ {step.split(' → ')[1] || step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {lesson.syntaxIntro.analogy && (
              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-blue-200 font-semibold mb-2 flex items-center">
                  <Zap className="mr-2" size={16} />
                  Think of it this way:
                </h4>
                <p className="text-blue-200 italic">{lesson.syntaxIntro.analogy}</p>
              </div>
            )}
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
            {lesson.syntaxReminder && (
              <div className="mt-3 pt-3 border-t border-yellow-500/30">
                <h5 className="text-yellow-300 font-semibold mb-1">Quick Reminder:</h5>
                <p className="text-yellow-200 text-sm">{lesson.syntaxReminder}</p>
              </div>
            )}
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
