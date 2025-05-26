
export interface UserProgress {
  [trackId: string]: TrackProgress;
}

export interface TrackProgress {
  currentLesson?: number;
  completedLessons?: number[];
  lastAccessed?: string;
  xp?: number;
}

export interface ProgressStats {
  totalTracks: number;
  totalXP: number;
  totalCompleted: number;
  streak: number;
}
