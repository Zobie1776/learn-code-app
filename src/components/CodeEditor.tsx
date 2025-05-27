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
    console.log('Running code:', code);
    setIsRunning(true);
    setOutput('Running...');
    
    try {
      // Simulate code execution delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let executionResult = '';
      
      if (track.type === 'python') {
        // Enhanced Python simulation
        if (code.includes('print(')) {
          // Handle f-string patterns
          const fStringMatch = code.match(/print\(f["'`]([^"'`]*)\{([^}]+)\}([^"'`]*)["'`]\)/);
          if (fStringMatch) {
            console.log('Found f-string pattern:', fStringMatch);
            const beforeVar = fStringMatch[1];
            const varName = fStringMatch[2];
            const afterVar = fStringMatch[3];
            
            // Extract variable values from code
            const varMatch = code.match(new RegExp(`${varName}\\s*=\\s*["']([^"']+)["']`));
            const varValue = varMatch ? varMatch[1] : varName;
            
            executionResult = `${beforeVar}${varValue}${afterVar}`;
          } else {
            // Handle regular print statements
            const printMatches = code.match(/print\(['"`]([^'"`]*)['"`]\)/g);
            if (printMatches) {
              executionResult = printMatches.map(match => {
                const content = match.match(/print\(['"`]([^'"`]*)['"`]\)/);
                return content ? content[1] : '';
              }).join('\n');
            } else {
              // Handle variable prints
              const varPrintMatch = code.match(/print\(([^)]+)\)/);
              if (varPrintMatch) {
                const varName = varPrintMatch[1].trim();
                const varMatch = code.match(new RegExp(`${varName}\\s*=\\s*["']([^"']+)["']`));
                executionResult = varMatch ? varMatch[1] : varName;
              }
            }
          }
        } else {
          executionResult = 'No output (try using print())';
        }
      } else if (track.type === 'javascript') {
        // Enhanced JavaScript simulation
        try {
          // Create a safe execution context
          const consoleOutput = [];
          const mockConsole = { log: (...args) => consoleOutput.push(args.join(' ')) };
          
          // Replace console.log calls and execute
          const executableCode = code.replace(/console\.log/g, 'mockConsole.log');
          const func = new Function('mockConsole', executableCode);
          func(mockConsole);
          
          executionResult = consoleOutput.join('\n') || 'No output';
        } catch (e) {
          executionResult = `Error: ${e.message}`;
        }
      }
      
      console.log('Execution result:', executionResult);
      setOutput(executionResult);
      
      // Check if lesson is completed based on output or code content
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
      setOutput(`Error: ${error.message}`);
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
          
          <div className="flex-1 bg-black text-green-400 font-mono p-4 overflow-auto">
            <pre className="whitespace-pre-wrap">{output || 'Run your code to see output here...'}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};
