export interface Option {
  id: string;
  text: string;
  feedback?: string; // Explicación específica de por qué esta opción es correcta/incorrecta
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string;
  explanation: string; // Explicación general / Conclusión pedagógica
  category?: string;
}

export type QuizMode = 'single' | 'block';

export interface QuizState {
  userAnswers: Record<number, string>;
  currentQuestionIndex: number;
  isFinished: boolean;
  score: number;
  mode: QuizMode;
  showFeedback: boolean;
}