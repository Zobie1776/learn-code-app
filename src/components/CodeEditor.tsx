import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { LessonPanel } from './LessonPanel';

export const CodeEditor = ({ track, currentLesson, onLessonComplete, onLessonChange, userProgress }) => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);

  const lesson = track.lessons[currentLesson];
  const isLastLesson = currentLesson === track.lessons.length - 1;
  const isFirstLesson = currentLesson === 0;

  useEffect(() => {
    setCode(lesson.startCode || '');
    setOutput('');
    setShowHint(false);
    setLessonCompleted(userProgress.completedLessons?.includes(currentLesson) || false);
  }, [currentLesson, lesson, userProgress]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running...');
    
    try {
      // Simulate code execution - in a real app, this would call a backend API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (track.type === 'python') {
        // Simple Python simulation
        if (code.includes('print(')) {
          const printMatch = code.match(/print\(['"`]([^'"`]*)['"`]\)/);
          if (printMatch) {
            setOutput(printMatch[1]);
          } else {
            setOutput('Hello, World!');
          }
        } else {
          setOutput('No output (try using print())');
        }
      } else if (track.type === 'javascript') {
        // Simple JavaScript simulation
        try {
          const result = eval(code.replace(/console\.log/g, 'return'));
          setOutput(String(result));
        } catch (e) {
          setOutput(`Error: ${e.message}`);
        }
      }
      
      // Check if lesson is completed (basic goal matching)
      if (code.trim().includes(lesson.goal) || output.includes(lesson.expectedOutput)) {
        if (!lessonCompleted) {
          setLessonCompleted(true);
          onLessonComplete(currentLesson);
        }
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
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
          
          <div className="flex-1 bg-black text-green-400 font-mono p-4 overflow-auto">
            <pre className="whitespace-pre-wrap">{output || 'Run your code to see output here...'}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
