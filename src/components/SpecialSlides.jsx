import { Icon, colorMap } from './Icons';

export function CoverSlide({ chapter }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden tech-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay:'1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      {/* Matrix-like falling chars decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none select-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 text-emerald-400 text-xs font-mono"
            style={{
              left: `${10 + i * 12}%`,
              animation: `scan ${3 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            {['01001000','10110010','11001100','00101101','11110000','01010101','10001011','11100011'][i]}
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-sm font-mono">{chapter.module}</span>
        </div>

        {/* Hex icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 hex bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center animate-float">
            <Icon name="ShieldCheck" size={40} className="text-emerald-400" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
          <span className="cyber-text">Computação Forense</span>
          <br />
          <span className="text-slate-200">em Sistemas Operacionais</span>
        </h1>

        <p className="text-xl text-slate-400 mb-2">{chapter.subtitle}</p>

        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-emerald-500/50" />
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-emerald-500/50" />
        </div>

        <div className="glass rounded-2xl p-6 max-w-xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="GraduationCap" size={20} className="text-cyan-400" />
            <span className="text-slate-300 font-semibold">{chapter.instructor}</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon name="BookOpen" size={16} className="text-slate-500" />
            <span className="text-slate-500 text-sm">{chapter.institution}</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 mt-8 max-w-lg mx-auto">{chapter.note}</p>
      </div>
    </div>
  );
}

export function IntroSlide({ chapter }) {
  const colors = colorMap[chapter.color] || colorMap.cyan;
  return (
    <div className="min-h-screen flex items-center justify-center tech-grid px-6 py-12">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <span className={`text-xs font-mono ${colors.text} uppercase tracking-widest`}>Apresentação do Módulo</span>
          <h2 className="text-4xl font-black text-white mt-2 mb-4">{chapter.title}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">{chapter.content}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapter.topics.map((topic, i) => (
            <div
              key={i}
              className={`glass rounded-xl p-4 border ${colors.border} flex items-center gap-3 animate-fade-in-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center shrink-0`}>
                <Icon name={topic.icon} size={20} className={colors.text} />
              </div>
              <span className="text-slate-300 text-sm font-medium">{topic.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
