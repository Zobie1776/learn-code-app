
export interface Lesson {
  title: string;
  explanation: string;
  objectives?: string[];
  startCode?: string;
  steps?: string[];
  goal: string;
  expectedOutput: string;
  hint: string;
  microChallenges?: string[];
}

export interface Track {
  id: string;
  title: string;
  type: string;
  description: string;
  color: string;
  skills: string[];
  lessons: Lesson[];
}
