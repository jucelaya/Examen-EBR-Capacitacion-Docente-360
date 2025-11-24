import React from 'react';
import { Question } from '../types';
import { CheckCircle, XCircle, HelpCircle, Info } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  selectedOptionId?: string;
  onSelectOption: (optionId: string) => void;
  showFeedback: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  selectedOptionId, 
  onSelectOption, 
  showFeedback 
}) => {
  
  const getOptionStyle = (optionId: string) => {
    const baseStyle = "p-4 border-2 rounded-xl transition-all flex flex-col relative overflow-hidden";
    
    if (!showFeedback) {
      // Estado interactivo (antes de responder)
      const interactiveStyle = "cursor-pointer hover:shadow-md active:scale-[0.99]";
      return selectedOptionId === optionId
        ? `${baseStyle} ${interactiveStyle} border-primary bg-blue-50`
        : `${baseStyle} ${interactiveStyle} border-slate-200 bg-white hover:border-blue-300`;
    }

    // Estado de Feedback (después de responder)
    if (optionId === question.correctAnswer) {
      return `${baseStyle} border-success bg-green-50/50`; // Correcta (siempre verde)
    }
    
    if (selectedOptionId === optionId) {
      return `${baseStyle} border-error bg-red-50/50`; // Incorrecta seleccionada (rojo)
    }

    return `${baseStyle} border-slate-100 bg-slate-50 opacity-70`; // Otras incorrectas (atenuadas)
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-6">
      {/* Header de la pregunta */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <span className="bg-blue-100 text-primary text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
            {question.category || 'General'}
          </span>
          <span className="text-slate-400 text-xs font-medium">ID: {question.id}</span>
        </div>
      </div>

      {/* Texto de la pregunta */}
      <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-8 leading-relaxed">
        {question.text}
      </h3>

      {/* Opciones */}
      <div className="space-y-4">
        {question.options.map((option) => (
          <div 
            key={option.id}
            onClick={() => !showFeedback && onSelectOption(option.id)}
            className={getOptionStyle(option.id)}
          >
            <div className="flex items-start gap-3 w-full">
              {/* Indicador de letra (A, B, C) */}
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm border transition-colors
                ${showFeedback && option.id === question.correctAnswer ? 'bg-success text-white border-success' : ''}
                ${showFeedback && selectedOptionId === option.id && option.id !== question.correctAnswer ? 'bg-error text-white border-error' : ''}
                ${!showFeedback && selectedOptionId === option.id ? 'bg-primary text-white border-primary' : 'bg-white text-slate-500 border-slate-300'}
              `}>
                {option.id}
              </div>

              {/* Texto de la opción */}
              <div className="flex-grow pt-1">
                <p className={`text-base leading-snug ${showFeedback && option.id !== question.correctAnswer && selectedOptionId !== option.id ? 'text-slate-500' : 'text-slate-700'}`}>
                  {option.text}
                </p>
              </div>
              
              {/* Iconos de resultado */}
              {showFeedback && option.id === question.correctAnswer && (
                <CheckCircle className="text-success w-6 h-6 shrink-0 animate-in zoom-in duration-300" />
              )}
              {showFeedback && selectedOptionId === option.id && option.id !== question.correctAnswer && (
                <XCircle className="text-error w-6 h-6 shrink-0 animate-in zoom-in duration-300" />
              )}
            </div>

            {/* Retroalimentación específica por opción */}
            {showFeedback && option.feedback && (
              <div className={`
                mt-3 ml-11 text-sm p-3 rounded-lg border-l-2 animate-in fade-in slide-in-from-top-2
                ${option.id === question.correctAnswer 
                  ? 'bg-green-100/50 border-success text-green-800' 
                  : 'bg-slate-100 border-slate-300 text-slate-600'}
              `}>
                <p><span className="font-bold">{option.id === question.correctAnswer ? 'Por qué es correcta:' : 'Análisis:'}</span> {option.feedback}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Explicación General / Conclusión Pedagógica */}
      {showFeedback && question.explanation && (
        <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-100 animate-fadeIn">
          <div className="flex items-center gap-2 mb-3 text-primary font-bold">
            <HelpCircle className="w-5 h-5" />
            <span>Conclusión Pedagógica</span>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm md:text-base">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};