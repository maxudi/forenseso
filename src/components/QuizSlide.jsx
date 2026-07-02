import { useMemo, useState } from 'react';
import { Icon } from './Icons';

export function QuizSlide({ questions, chapterNames }) {
  const quizQuestions = useMemo(() => {
    // Deterministic shuffle per question id to avoid answer-letter bias.
    return questions.map((q) => {
      const indices = q.options.map((_, idx) => idx);
      let seed = (q.id * 1103515245 + 12345) & 0x7fffffff;

      for (let i = indices.length - 1; i > 0; i -= 1) {
        seed = (seed * 1103515245 + 12345) & 0x7fffffff;
        const j = seed % (i + 1);
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      const shuffledOptions = indices.map((idx) => q.options[idx]);
      const shuffledCorrect = indices.indexOf(q.correct);

      return {
        ...q,
        options: shuffledOptions,
        correct: shuffledCorrect,
      };
    });
  }, [questions]);
  const CHAPTER_NAMES = chapterNames;
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null); // index of selected option
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({}); // { questionId: selectedIndex }
  const [filterChapter, setFilterChapter] = useState(0); // 0 = all

  const filteredQuestions = filterChapter === 0
    ? quizQuestions
    : quizQuestions.filter(q => q.chapter === filterChapter);

  const question = filteredQuestions[currentQ];
  const totalQ = filteredQuestions.length;
  const answeredCount = Object.keys(answers).length;
  const correctCount = Object.entries(answers).filter(([id, sel]) => {
    const q = quizQuestions.find(q => q.id === parseInt(id));
    return q && q.correct === sel;
  }).length;

  const isAnswered = question && answers[question.id] !== undefined;
  const isCorrect = question && answers[question.id] === question.correct;
  const isWrong = isAnswered && !isCorrect;

  function handleSelect(idx) {
    if (isAnswered) return; // already answered
    setSelected(idx);
  }

  function handleSubmit() {
    if (selected === null) return;
    setAnswers(prev => ({ ...prev, [question.id]: selected }));
    setSubmitted(true);
  }

  function handleNext() {
    setSelected(null);
    setSubmitted(false);
    if (currentQ < totalQ - 1) setCurrentQ(q => q + 1);
  }

  function handlePrev() {
    setSelected(null);
    setSubmitted(false);
    if (currentQ > 0) setCurrentQ(q => q - 1);
  }

  function handleReset() {
    setAnswers({});
    setSelected(null);
    setSubmitted(false);
    setCurrentQ(0);
  }

  function handleFilterChange(ch) {
    setFilterChapter(ch);
    setCurrentQ(0);
    setSelected(null);
    setSubmitted(false);
  }

  function getOptionClass(idx) {
    if (!isAnswered) {
      return selected === idx ? 'option-selected border-cyan-400/80' : 'border-slate-700/60';
    }
    if (idx === question.correct) return 'option-correct';
    if (idx === answers[question.id] && idx !== question.correct) return 'option-wrong';
    return 'border-slate-700/30 opacity-50';
  }

  if (!question) {
    return (
      <div className="min-h-screen tech-grid flex items-center justify-center px-6">
        <div className="text-center text-slate-400">
          <p>Nenhuma questão encontrada para este filtro.</p>
        </div>
      </div>
    );
  }

  const progress = ((currentQ + 1) / totalQ) * 100;
  const scorePercent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <div className="min-h-screen tech-grid px-4 py-8 flex flex-col items-center">
      <div className="max-w-3xl w-full">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-3">
            <Icon name="HelpCircle" size={14} className="text-emerald-400" />
            <span className="text-emerald-400 text-xs font-mono">Banco de Exercícios</span>
          </div>
          <h2 className="text-3xl font-black cyber-text">Avaliação de Conhecimentos</h2>
          <p className="text-slate-500 text-sm mt-1">Disciplina: Computação Forense em Sistemas Operacionais</p>
        </div>

        {/* Chapter filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-5">
          <button
            onClick={() => handleFilterChange(0)}
            className={`text-xs px-3 py-1.5 rounded-full border font-mono transition-all ${filterChapter === 0 ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'border-slate-700 text-slate-500 hover:border-slate-500'}`}
          >
            Todos
          </button>
          {Object.entries(CHAPTER_NAMES).map(([ch, name]) => (
            <button
              key={ch}
              onClick={() => handleFilterChange(parseInt(ch))}
              className={`text-xs px-3 py-1.5 rounded-full border font-mono transition-all ${filterChapter === parseInt(ch) ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400' : 'border-slate-700 text-slate-500 hover:border-slate-500'}`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Score bar */}
        <div className="glass rounded-xl p-4 border border-slate-700/50 mb-5 flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-400 font-mono">Progresso: {currentQ + 1}/{totalQ}</span>
              <span className="text-xs text-slate-400 font-mono">Acertos: {correctCount}/{answeredCount} {answeredCount > 0 ? `(${scorePercent}%)` : ''}</span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="progress-bar h-full rounded-full" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <button
            onClick={handleReset}
            title="Reiniciar quiz"
            className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center hover:border-orange-500/50 hover:text-orange-400 text-slate-500 transition-all"
          >
            <Icon name="RotateCcw" size={14} />
          </button>
        </div>

        {/* Question card */}
        <div className="glass rounded-2xl p-6 border border-slate-700/50 mb-5 animate-fade-in-up">
          <div className="flex items-start gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 font-mono text-sm font-bold">
              {String(currentQ + 1).padStart(2, '0')}
            </div>
            <div>
              <span className="text-xs text-cyan-400 font-mono">{CHAPTER_NAMES[question.chapter]}</span>
              <p className="text-white text-base font-medium mt-1 leading-relaxed">{question.question}</p>
            </div>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`option-btn w-full text-left glass rounded-xl p-4 border flex items-start gap-3 ${getOptionClass(idx)}`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all
                  ${isAnswered && idx === question.correct ? 'border-emerald-400 bg-emerald-400/20' :
                    isAnswered && idx === answers[question.id] && idx !== question.correct ? 'border-red-400 bg-red-400/20' :
                    selected === idx ? 'border-cyan-400 bg-cyan-400/20' :
                    'border-slate-600'}`}
                >
                  {isAnswered && idx === question.correct && (
                    <Icon name="Check" size={12} className="text-emerald-400" />
                  )}
                  {isAnswered && idx === answers[question.id] && idx !== question.correct && (
                    <Icon name="X" size={12} className="text-red-400" />
                  )}
                  {!isAnswered && selected === idx && (
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  )}
                </div>
                <span className={`text-sm leading-relaxed
                  ${isAnswered && idx === question.correct ? 'text-emerald-300 font-medium' :
                    isAnswered && idx === answers[question.id] && idx !== question.correct ? 'text-red-300' :
                    'text-slate-300'}`}>
                  {String.fromCharCode(65 + idx)}) {opt}
                </span>
              </button>
            ))}
          </div>

          {/* Feedback */}
          {isAnswered && (
            <div className={`mt-5 rounded-xl p-4 border animate-fade-in-up ${isCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <Icon name="CheckCircle" size={16} className="text-emerald-400" />
                ) : (
                  <Icon name="Info" size={16} className="text-red-400" />
                )}
                <span className={`text-sm font-bold ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                  {isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta'}
                </span>
                {!isCorrect && (
                  <span className="text-xs text-slate-400">
                    — Correto: alternativa {String.fromCharCode(65 + question.correct)}
                  </span>
                )}
              </div>
              <p className={`text-sm leading-relaxed ${isCorrect ? 'text-emerald-200/80' : 'text-slate-300'}`}>
                <span className="font-semibold">Gabarito Comentado: </span>
                {question.feedback}
              </p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={handlePrev}
            disabled={currentQ === 0}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
          >
            <Icon name="ChevronLeft" size={16} />
            Anterior
          </button>

          <div className="flex gap-2">
            {!isAnswered && (
              <button
                onClick={handleSubmit}
                disabled={selected === null}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm font-semibold"
              >
                <Icon name="Check" size={16} />
                Confirmar
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={currentQ === totalQ - 1}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-slate-700 text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-sm"
            >
              Próxima
              <Icon name="ChevronRight" size={16} />
            </button>
          </div>
        </div>

        {/* Final score if all answered */}
        {answeredCount === totalQ && (
          <div className="mt-6 glass rounded-2xl p-6 border border-cyan-500/30 text-center animate-fade-in-up">
            <Icon name="Star" size={32} className="text-yellow-400 mx-auto mb-3 animate-float" />
            <h3 className="text-2xl font-black text-white mb-1">
              {correctCount}/{totalQ} — {scorePercent}%
            </h3>
            <p className="text-slate-400 text-sm mb-2">
              {scorePercent >= 80 ? '🎯 Excelente! Domínio sólido do conteúdo.' :
               scorePercent >= 60 ? '👍 Bom! Revise os capítulos com erro.' :
               '📚 Continue estudando! Revise o material.'}
            </p>
            <button
              onClick={handleReset}
              className="mt-3 px-5 py-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/30 text-sm font-semibold transition-all"
            >
              Refazer Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
