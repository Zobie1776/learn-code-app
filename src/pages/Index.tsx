
import React, { useState, useEffect } from 'react';
import { TrackSelector } from '../components/TrackSelector';
import { CodeEditor } from '../components/CodeEditor';
import { ProgressTracker } from '../components/ProgressTracker';
import { Header } from '../components/Header';

const Index = () => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [userProgress, setUserProgress] = useState({});
  const [isLearningMode, setIsLearningMode] = useState(false);

  useEffect(() => {
    // Load user progress from localStorage
    const savedProgress = localStorage.getItem('learncode_progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  const saveProgress = (trackId, lessonIndex, completed = false) => {
    const newProgress = {
      ...userProgress,
      [trackId]: {
        ...userProgress[trackId],
        currentLesson: lessonIndex,
        completedLessons: completed 
          ? [...(userProgress[trackId]?.completedLessons || []), lessonIndex]
          : userProgress[trackId]?.completedLessons || [],
        lastAccessed: new Date().toISOString(),
        xp: (userProgress[trackId]?.xp || 0) + (completed ? 10 : 0)
      }
    };
    setUserProgress(newProgress);
    localStorage.setItem('learncode_progress', JSON.stringify(newProgress));
  };

  const handleTrackSelect = (track) => {
    setSelectedTrack(track);
    setCurrentLesson(userProgress[track.id]?.currentLesson || 0);
    setIsLearningMode(true);
  };

  const handleBackToDashboard = () => {
    setIsLearningMode(false);
    setSelectedTrack(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header 
        isLearningMode={isLearningMode}
        onBackToDashboard={handleBackToDashboard}
        userProgress={userProgress}
      />
      
      {!isLearningMode ? (
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              LearnCode
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Master coding through hands-on projects. Built for ADHD-friendly learning with instant feedback and real results.
            </p>
          </div>
          
          <ProgressTracker userProgress={userProgress} />
          <TrackSelector onTrackSelect={handleTrackSelect} userProgress={userProgress} />
        </div>
      ) : (
        <CodeEditor
          track={selectedTrack}
          currentLesson={currentLesson}
          onLessonComplete={(lessonIndex) => saveProgress(selectedTrack.id, lessonIndex, true)}
          onLessonChange={(lessonIndex) => {
            setCurrentLesson(lessonIndex);
            saveProgress(selectedTrack.id, lessonIndex);
          }}
          userProgress={userProgress[selectedTrack?.id] || {}}
        />
      )}
    </div>
  );
};

export default Index;
