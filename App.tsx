import React, { useState, useMemo } from 'react';
import { questions } from './data';
import { QuizState, QuizMode } from './types';
import { StartScreen } from './components/StartScreen';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { ResultsScreen } from './components/ResultsScreen';
import { ArrowRight, CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'results'>('start');
  
  const [quizState, setQuizState] = useState<QuizState>({
    userAnswers: {},
    currentQuestionIndex: 0,
    isFinished: false,
    score: 0,
    mode: 'single',
    showFeedback: false,
  });

  // Block mode configuration
  const BLOCK_SIZE = 10;

  const currentQuestionsBlock = useMemo(() => {
    if (quizState.mode === 'single') return [questions[quizState.currentQuestionIndex]];
    
    // For block mode, get the slice of 10 questions
    const start = Math.floor(quizState.currentQuestionIndex / BLOCK_SIZE) * BLOCK_SIZE;
    return questions.slice(start, start + BLOCK_SIZE);
  }, [quizState.currentQuestionIndex, quizState.mode]);

  const handleStart = (mode: QuizMode) => {
    setQuizState({
      userAnswers: {},
      currentQuestionIndex: 0,
      isFinished: false,
      score: 0,
      mode: mode,
      showFeedback: false,
    });
    setGameState('playing');
    window.scrollTo(0, 0);
  };

  const handleAnswer = (questionId: number, optionId: string) => {
    // Prevent changing answer in single mode if feedback is already shown
    if (quizState.showFeedback && quizState.mode === 'single') return;

    setQuizState(prev => ({
      ...prev,
      userAnswers: {
        ...prev.userAnswers,
        [questionId]: optionId
      },
      // In single mode, selecting an answer immediately shows feedback
      showFeedback: prev.mode === 'single' ? true : prev.showFeedback
    }));
  };

  const handleNext = () => {
    const isBlockMode = quizState.mode === 'block';
    
    if (isBlockMode) {
       // If feedback is NOT shown yet, just show it (Submit Block)
       if (!quizState.showFeedback) {
        setQuizState(prev => ({ ...prev, showFeedback: true }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      // If feedback IS shown, move to next block
      const nextIndex = (Math.floor(quizState.currentQuestionIndex / BLOCK_SIZE) + 1) * BLOCK_SIZE;
      
      if (nextIndex < questions.length) {
        setQuizState(prev => ({
          ...prev,
          currentQuestionIndex: nextIndex,
          showFeedback: false
        }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setGameState('results');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

    } else {
      // Single Mode Logic
      const nextIndex = quizState.currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        setQuizState(prev => ({
          ...prev,
          currentQuestionIndex: nextIndex,
          showFeedback: false
        }));
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
      } else {
        setGameState('results');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleRestart = () => {
    setGameState('start');
    window.scrollTo(0, 0);
  };

  // Render
  if (gameState === 'start') {
    return <StartScreen onStart={handleStart} totalQuestions={questions.length} />;
  }

  if (gameState === 'results') {
    return <ResultsScreen state={quizState} questions={questions} onRestart={handleRestart} />;
  }

  // Progress calculation
  const progressIndex = quizState.mode === 'single' 
    ? quizState.currentQuestionIndex + 1 
    : Math.min((Math.floor(quizState.currentQuestionIndex / BLOCK_SIZE) + 1) * BLOCK_SIZE, questions.length);

  // Helper to check if block is fully answered
  const isBlockComplete = () => {
    if (quizState.mode === 'single') return !!quizState.userAnswers[questions[quizState.currentQuestionIndex].id];
    
    return currentQuestionsBlock.every(q => !!quizState.userAnswers[q.id]);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm backdrop-blur-sm bg-white/90">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="image.png" alt="Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              Simulador EBR
            </h1>
          </div>
          <button onClick={handleRestart} className="text-slate-500 hover:text-primary text-sm font-medium transition-colors">
            Salir
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        <ProgressBar current={progressIndex} total={questions.length} />

        {/* Question List */}
        <div className="space-y-6">
          {currentQuestionsBlock.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              selectedOptionId={quizState.userAnswers[question.id]}
              onSelectOption={(optId) => handleAnswer(question.id, optId)}
              showFeedback={quizState.showFeedback}
            />
          ))}
        </div>
      </main>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-20">
        <div className="max-w-3xl mx-auto flex justify-end">
          <button
            onClick={handleNext}
            disabled={!isBlockComplete() && !quizState.showFeedback}
            className={`
              flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-lg transition-all w-full md:w-auto justify-center
              ${!isBlockComplete() && !quizState.showFeedback
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-primary text-white hover:bg-blue-700 shadow-lg hover:shadow-primary/30 active:scale-95'
              }
            `}
          >
            {quizState.mode === 'block' && !quizState.showFeedback ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Revisar Respuestas
              </>
            ) : (
              <>
                {progressIndex >= questions.length ? 'Ver Resultados' : 'Siguiente'}
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;