
export interface Lesson {
  title: string;
  explanation: string;
  objectives?: string[];
  syntaxIntro?: {
    concept: string;
    syntax: string;
    minimalExample: string;
    breakdown: string[];
    analogy?: string;
  };
  startCode: string;
  steps?: string[];
  goal: string;
  expectedOutput: string;
  hint: string;
  syntaxReminder?: string;
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
