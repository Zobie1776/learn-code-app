
import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { LessonPanel } from './LessonPanel';

export const CodeEditor = ({ track, currentLesson, onLessonComplete, onLessonChange, userProgress }) => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);

  const lesson = track.lessons[currentLesson];
  const isLastLesson = currentLesson === track.lessons.length - 1;
  const isFirstLesson = currentLesson === 0;

  // Reset all states when switching tracks or lessons
  useEffect(() => {
    console.log('Resetting code editor for track:', track.id, 'lesson:', currentLesson);
    console.log('Setting code to:', lesson.startCode);
    setCode(lesson.startCode || '');
    setOutput('');
    setShowHint(false);
    setIsRunning(false);
    setLessonCompleted(userProgress.completedLessons?.includes(currentLesson) || false);
  }, [track.id, currentLesson, lesson.startCode, userProgress.completedLessons]);



  const runCode = async () => {
    console.log('Running code via backend:', code);
    setIsRunning(true);
    setOutput('Running...');
    setError('');

    try {
      const response = await fetch('http://localhost:5000/run-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language: track.type, code })
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || 'Server error');
      }

      const data = await response.json();
      console.log('Backend response:', data);

      const executionResult = data.output || '';
      setOutput(executionResult);
      if (data.error) {
        setError(data.error);
      }

      const isCompleted = lesson.expectedOutput ?
        executionResult.includes(lesson.expectedOutput) :
        code.trim().includes(lesson.goal);

      if (isCompleted && !lessonCompleted) {
        console.log('Lesson completed!');
        setLessonCompleted(true);
        onLessonComplete(currentLesson);
      }
    } catch (error) {
      console.error('Code execution error:', error);
      setError(error.message || 'Network error');
      setOutput('');
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    console.log('Manual reset - setting code to:', lesson.startCode);
    setCode(lesson.startCode || '');
    setOutput('');
  };

  const nextLesson = () => {
    if (!isLastLesson) {
      onLessonChange(currentLesson + 1);
    }
  };

  const prevLesson = () => {
    if (!isFirstLesson) {
      onLessonChange(currentLesson - 1);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Enhanced Lesson Header */}
      <LessonPanel 
        lesson={lesson}
        lessonCompleted={lessonCompleted}
        showHint={showHint}
        onToggleHint={() => setShowHint(!showHint)}
      />

      {/* Progress and Navigation Bar */}
      <div className="bg-slate-800 px-4 py-3 border-b border-slate-600">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={prevLesson}
              disabled={isFirstLesson}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>
            
            <button
              onClick={nextLesson}
              disabled={isLastLesson}
              className="flex items-center space-x-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">
              {currentLesson + 1} / {track.lessons.length}
            </span>
            <div className="w-32 bg-slate-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentLesson + 1) / track.lessons.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 flex">
        {/* Code Editor */}
        <div className="flex-1 flex flex-col">
          <div className="bg-slate-800 px-4 py-2 border-b border-slate-600">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-medium">{track.title} Editor</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={resetCode}
                  className="flex items-center space-x-2 px-3 py-1 bg-slate-700 text-slate-300 rounded hover:bg-slate-600 transition-colors"
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
                <button
                  onClick={runCode}
                  disabled={isRunning}
                  className="flex items-center space-x-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-500 disabled:opacity-50 transition-colors"
                >
                  <Play size={14} />
                  <span>{isRunning ? 'Running...' : 'Run'}</span>
                </button>
              </div>
            </div>
          </div>
          
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 bg-slate-900 text-green-400 font-mono p-4 resize-none focus:outline-none"
            placeholder="Start coding here..."
            style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.5' }}
          />
        </div>

        {/* Output Panel */}
        <div className="w-1/2 flex flex-col border-l border-slate-600">
          <div className="bg-slate-800 px-4 py-2 border-b border-slate-600">
            <span className="text-slate-300 font-medium">Output</span>
          </div>
          
          <div className="flex-1 bg-black font-mono p-4 overflow-auto">
            <pre className={error ? 'whitespace-pre-wrap text-red-400' : 'whitespace-pre-wrap text-green-400'}>
              {error || output || 'Run your code to see output here...'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
