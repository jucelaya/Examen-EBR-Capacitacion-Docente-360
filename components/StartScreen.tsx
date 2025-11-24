import React from 'react';
import { BookOpen, Layers, Play, Info } from 'lucide-react';

interface StartScreenProps {
  onStart: (mode: 'single' | 'block') => void;
  totalQuestions: number;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart, totalQuestions }) => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <div className="mb-8 inline-block">
           <img 
             src="image.png" 
             alt="Capacitación Docente 360" 
             className="w-48 h-48 mx-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-500" 
           />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight">
          Simulador de Examen <span className="text-primary">EBR Primaria</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          Prepárate con {totalQuestions} preguntas oficiales basadas en situaciones pedagógicas reales.
          Domina el Currículo Nacional con explicaciones detalladas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <button 
          onClick={() => onStart('single')}
          className="group bg-white hover:border-primary border-2 border-transparent p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all text-left flex flex-col h-full"
        >
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
            <Play className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Modo Pregunta a Pregunta</h3>
          <p className="text-slate-500 text-sm mb-6 flex-grow">
            Ideal para estudiar. Responde una pregunta y recibe retroalimentación inmediata con la explicación correcta.
          </p>
          <span className="text-primary font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
            Iniciar Práctica &rarr;
          </span>
        </button>

        <button 
          onClick={() => onStart('block')}
          className="group bg-white hover:border-purple-500 border-2 border-transparent p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all text-left flex flex-col h-full"
        >
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
            <Layers className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">Modo Bloques</h3>
          <p className="text-slate-500 text-sm mb-6 flex-grow">
            Simulacro parcial. Responde bloques de 10 preguntas seguidas y revisa tus resultados al final del bloque.
          </p>
          <span className="text-purple-500 font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
            Iniciar Bloques &rarr;
          </span>
        </button>
      </div>

      {/* Sección Sobre Nosotros */}
      <div className="bg-slate-100/50 rounded-3xl p-8 md:p-10 border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Info className="w-5 h-5 text-slate-700" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Sobre Nosotros</h2>
        </div>
        
        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            <strong className="text-primary">Capacitación Docente 360</strong> es un espacio creado para brindar formación continua, recursos pedagógicos actualizados y orientación especializada a docentes del Perú y Latinoamérica. Nuestro objetivo es fortalecer la calidad educativa ofreciendo contenido claro, práctico y alineado a las normativas del MINEDU.
          </p>
          <p>
            Abordamos temas esenciales para el desarrollo profesional docente: ascenso y nombramiento, planificación curricular, sesiones de aprendizaje, Marco del Buen Desempeño Docente, rúbricas, evaluación formativa, estrategias pedagógicas, uso de TIC en educación y actualizaciones normativas del magisterio.
          </p>
          <p>
            Invitamos a las instituciones y docentes a sumarse al proyecto y aprovechar nuestras capacitaciones gratuitas, charlas, asesorías y materiales formativos.
            Estamos comprometidas con acompañar tu crecimiento profesional.
          </p>
          <p className="pt-4 font-medium text-slate-800">
            Atentamente,<br/>
            Equipo Capacitación Docente 360
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-center text-slate-400 text-sm flex items-center justify-center gap-2">
        <BookOpen className="w-4 h-4" />
        <span>Basado en el examen A04-EBRP-11</span>
      </div>
    </div>
  );
};