import React from 'react';
import { QuizState, Question } from '../types';
import { RefreshCw, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface ResultsScreenProps {
  state: QuizState;
  questions: Question[];
  onRestart: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ state, questions, onRestart }) => {
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(state.userAnswers).length;
  
  let correctCount = 0;
  questions.forEach(q => {
    if (state.userAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const incorrectCount = answeredCount - correctCount;
  const skippedCount = totalQuestions - answeredCount;
  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  let message = "";
  if (percentage >= 90) message = "¡Excelente! Estás listo para el examen.";
  else if (percentage >= 70) message = "¡Muy bien! Solo faltan afinar detalles.";
  else if (percentage >= 50) message = "Bien, pero necesitas repasar más.";
  else message = "Es necesario estudiar los fundamentos nuevamente.";

  return (
    <div className="max-w-2xl mx-auto text-center py-8 px-4">
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-slate-100">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Resultados</h2>
        <p className="text-slate-500 mb-8">Resumen de tu práctica</p>

        <div className="relative w-40 h-40 mx-auto mb-8 flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={percentage >= 60 ? "#22c55e" : "#f59e0b"}
              strokeWidth="3"
              strokeDasharray={`${percentage}, 100`}
              className="animate-spin-slow origin-center rotate-[-90deg]"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-slate-800">{percentage}%</span>
            <span className="text-xs text-slate-500 uppercase font-bold">Aciertos</span>
          </div>
        </div>

        <h3 className="text-xl font-medium text-primary mb-8">{message}</h3>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 p-4 rounded-2xl border border-green-100 flex flex-col items-center">
            <CheckCircle className="w-8 h-8 text-success mb-2" />
            <div className="text-2xl font-bold text-slate-800">{correctCount}</div>
            <div className="text-xs text-slate-500 font-medium">Correctas</div>
          </div>
          <div className="bg-red-50 p-4 rounded-2xl border border-red-100 flex flex-col items-center">
            <XCircle className="w-8 h-8 text-error mb-2" />
            <div className="text-2xl font-bold text-slate-800">{incorrectCount}</div>
            <div className="text-xs text-slate-500 font-medium">Incorrectas</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 flex flex-col items-center">
            <AlertCircle className="w-8 h-8 text-gray-400 mb-2" />
            <div className="text-2xl font-bold text-slate-800">{skippedCount}</div>
            <div className="text-xs text-slate-500 font-medium">Sin responder</div>
          </div>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="flex items-center justify-center gap-2 mx-auto bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95"
      >
        <RefreshCw className="w-5 h-5" />
        Intentar Nuevamente
      </button>
    </div>
  );
};
