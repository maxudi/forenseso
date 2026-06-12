import { Icon, colorMap } from './Icons';

export function Navigation({ currentChapter, currentSlide, totalSlides, onPrev, onNext, onGoHome, onGoQuiz, chapters }) {
  const chapter = chapters[currentChapter];
  const colors = chapter?.color ? colorMap[chapter.color] : colorMap.cyan;
  const isFirst = currentChapter === 0 && currentSlide === 0;
  const isLast = currentChapter === chapters.length - 1;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

        {/* Chapter indicator */}
        <div className="flex items-center gap-2 min-w-0">
          {chapter?.type !== 'cover' && (
            <>
              <div className={`w-2 h-2 rounded-full ${colors?.dot || 'bg-emerald-400'} shrink-0`} />
              <span className="text-slate-400 text-xs font-mono truncate hidden sm:block">
                {chapter?.chapterNum || chapter?.title}
              </span>
            </>
          )}
        </div>

        {/* Center controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={onPrev}
            disabled={isFirst}
            className="w-9 h-9 rounded-xl glass border border-slate-700 flex items-center justify-center text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <Icon name="ChevronLeft" size={18} />
          </button>

          <button
            onClick={onGoHome}
            className="w-9 h-9 rounded-xl glass border border-slate-700 flex items-center justify-center text-slate-400 hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
            title="Início"
          >
            <Icon name="Home" size={16} />
          </button>

          <button
            onClick={onGoQuiz}
            className="flex items-center gap-2 px-3 h-9 rounded-xl glass border border-slate-700 text-slate-400 hover:border-purple-500/50 hover:text-purple-400 transition-all text-xs font-mono"
            title="Ir para os Exercícios"
          >
            <Icon name="HelpCircle" size={14} />
            <span className="hidden sm:block">Exercícios</span>
          </button>

          <button
            onClick={onNext}
            disabled={isLast}
            className="w-9 h-9 rounded-xl glass border border-slate-700 flex items-center justify-center text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <Icon name="ChevronRight" size={18} />
          </button>
        </div>

        {/* Slide count */}
        <div className="text-slate-500 text-xs font-mono shrink-0">
          {totalSlides > 1 && <span>{currentSlide + 1}/{totalSlides}</span>}
        </div>
      </div>
    </nav>
  );
}

export function ChapterMenu({ currentChapter, onNavigate, isOpen, onClose, chapters }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div className="relative ml-auto w-72 h-full glass border-l border-slate-700/50 flex flex-col overflow-y-auto">
        <div className="p-4 border-b border-slate-700/50 flex items-center justify-between">
          <span className="text-white font-bold text-sm">Sumário</span>
          <button onClick={onClose} className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
            <Icon name="X" size={16} />
          </button>
        </div>
        <div className="p-3 space-y-1 flex-1">
          {chapters.map((ch, i) => {
            const c = ch.color ? colorMap[ch.color] : colorMap.cyan;
            const isActive = i === currentChapter;
            return (
              <button
                key={i}
                onClick={() => { onNavigate(i); onClose(); }}
                className={`w-full text-left rounded-xl p-3 flex items-center gap-3 transition-all
                  ${isActive ? `${c.bg} ${c.border} border` : 'hover:bg-slate-800/50 border border-transparent'}`}
              >
                {ch.icon && (
                  <div className={`w-7 h-7 rounded-lg ${isActive ? c.bg : 'bg-slate-800'} border ${isActive ? c.border : 'border-slate-700'} flex items-center justify-center shrink-0`}>
                    <Icon name={ch.icon} size={14} className={isActive ? c.text : 'text-slate-500'} />
                  </div>
                )}
                <div className="min-w-0">
                  {ch.chapterNum && <div className={`text-xs font-mono ${isActive ? c.text : 'text-slate-500'}`}>{ch.chapterNum}</div>}
                  <div className={`text-sm truncate ${isActive ? 'text-white font-semibold' : 'text-slate-400'}`}>
                    {ch.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function TopBar({ onMenuToggle, chapter, onModuleChange, currentModule }) {
  const colors = chapter?.color ? colorMap[chapter.color] : colorMap.cyan;

  return (
    <div className="fixed top-0 left-0 right-0 z-40 glass border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
            <Icon name="ShieldCheck" size={12} className="text-emerald-400" />
          </div>
          <span className="text-xs font-mono text-slate-400 hidden sm:block">CF · SOs · UNCISAL</span>
        </div>
        {chapter?.title && (
          <span className="text-xs text-slate-500 font-mono truncate max-w-xs hidden md:block">{chapter.title}</span>
        )}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onModuleChange(1)}
            className={`px-3 h-7 rounded-lg border text-xs font-mono transition-all ${
              currentModule === 1
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                : 'glass border-slate-700 text-slate-500 hover:text-slate-300'
            }`}
          >
            M1
          </button>
          <button
            onClick={() => onModuleChange(2)}
            className={`px-3 h-7 rounded-lg border text-xs font-mono transition-all ${
              currentModule === 2
                ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400'
                : 'glass border-slate-700 text-slate-500 hover:text-slate-300'
            }`}
          >
            M2
          </button>
          <button
            onClick={onMenuToggle}
            className="w-8 h-8 rounded-xl glass border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
            title="Menu de capítulos"
          >
            <Icon name="Menu" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
