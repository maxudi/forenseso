import { Icon, colorMap } from './Icons';

function SlideHeader({ chapterNum, subtitle, icon, color }) {
  const colors = colorMap[color] || colorMap.cyan;
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-mono ${colors.text} uppercase tracking-widest`}>{chapterNum}</span>
        <span className="text-slate-600">·</span>
        <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
      </div>
      <div className="flex items-start gap-3">
        <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center shrink-0`}>
          <Icon name={icon} size={24} className={colors.text} />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">{subtitle}</h3>
      </div>
    </div>
  );
}

// Generic content slide with heading+text blocks
export function ContentSlide({ slide, chapterNum, chapterColor }) {
  const colors = colorMap[chapterColor] || colorMap.cyan;
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-5xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slide.content.map((item, i) => (
            <div
              key={i}
              className={`glass rounded-xl p-5 border ${item.highlight ? `${colors.border} shadow-lg ${colors.glow}` : 'border-slate-700/50'} animate-fade-in-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-lg ${item.highlight ? colors.bg : 'bg-slate-800'} flex items-center justify-center`}>
                  <Icon name={item.icon} size={16} className={item.highlight ? colors.text : 'text-slate-400'} />
                </div>
                <h4 className={`font-bold ${item.highlight ? colors.text : 'text-white'} text-sm`}>{item.heading}</h4>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Generations / timeline table slide
export function GenerationsSlide({ slide, chapterNum, chapterColor }) {
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-5xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="space-y-3">
          {slide.generations.map((gen, i) => {
            const c = colorMap[gen.color] || colorMap.gray;
            return (
              <div
                key={i}
                className={`glass rounded-xl p-4 border ${c.border} flex gap-4 animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`shrink-0 w-28 text-right`}>
                  <div className={`text-xs font-mono ${c.text} leading-tight`}>{gen.era}</div>
                  <div className={`text-sm font-bold text-white mt-1`}>{gen.name}</div>
                </div>
                <div className={`w-px ${c.bg} shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-slate-300 text-sm">{gen.desc}</p>
                  <div className={`mt-2 flex items-start gap-2`}>
                    <span className={`text-xs ${c.badge} border rounded px-2 py-0.5 shrink-0 font-mono`}>forense</span>
                    <p className={`text-xs ${c.text}`}>{gen.forensic}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Incident cases slide
export function CasesSlide({ slide, chapterNum, chapterColor }) {
  const severityColor = { critical: 'red', high: 'orange', medium: 'yellow' };
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-5xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="grid grid-cols-1 gap-5">
          {slide.cases.map((c, i) => {
            const sc = colorMap[severityColor[c.severity] || 'gray'];
            return (
              <div
                key={i}
                className={`glass rounded-xl p-5 border ${sc.border} animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-16 h-16 rounded-xl ${sc.bg} border ${sc.border} flex flex-col items-center justify-center`}>
                    <span className={`text-xs font-mono ${sc.text}`}>{c.year}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-bold">{c.name}</h4>
                      <span className={`text-xs ${sc.badge} border rounded-full px-2 py-0.5`}>{c.severity}</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{c.desc}</p>
                    <div className="flex items-start gap-2">
                      <Icon name="BookOpen" size={13} className={sc.text} />
                      <p className={`text-xs ${sc.text}`}><span className="font-semibold">Legado Forense: </span>{c.legacy}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Concepts grid slide
export function ConceptsSlide({ slide, chapterNum, chapterColor }) {
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-5xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slide.concepts.map((concept, i) => {
            const c = colorMap[concept.color] || colorMap.cyan;
            return (
              <div
                key={i}
                className={`glass rounded-xl p-5 border ${c.border} animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`inline-block ${c.badge} border text-xs font-bold rounded px-2 py-1 mb-3`}>
                  {concept.term}
                </div>
                <p className="text-slate-300 text-sm mb-3">{concept.def}</p>
                <div className={`${c.bg} rounded-lg p-2`}>
                  <p className={`text-xs ${c.text} font-mono`}>{concept.example}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Timeline decades slide
export function TimelineSlide({ slide, chapterNum, chapterColor }) {
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-5xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-24 top-0 bottom-0 w-px bg-gradient-to-b from-slate-500/50 via-emerald-500/30 to-slate-500/50" />
          <div className="space-y-5">
            {slide.timeline.map((phase, i) => {
              const c = colorMap[phase.color] || colorMap.gray;
              return (
                <div key={i} className="flex gap-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="w-20 shrink-0 text-right">
                    <span className={`text-xs font-mono ${c.text}`}>{phase.decade}</span>
                  </div>
                  {/* Dot */}
                  <div className="relative flex items-start">
                    <div className={`w-3 h-3 rounded-full ${c.dot} mt-1 border-2 border-slate-900 z-10`} />
                  </div>
                  <div className={`flex-1 glass rounded-xl p-4 border ${c.border}`}>
                    <h4 className="text-white font-bold text-sm mb-2">{phase.title}</h4>
                    <ul className="space-y-1">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Pillars 6-grid slide
export function PillarsSlide({ slide, chapterNum, chapterColor }) {
  const colors = colorMap[chapterColor] || colorMap.cyan;
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-5xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slide.pillars.map((pillar, i) => (
            <div
              key={i}
              className={`glass rounded-xl p-5 border ${colors.border} animate-fade-in-up group hover:border-cyan-500/50 transition-all`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <Icon name={pillar.icon} size={20} className={colors.text} />
              </div>
              <h4 className="text-white font-bold text-sm mb-2">{pillar.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Artifacts slide (Windows)
export function ArtifactsWindowsSlide({ slide, chapterNum, chapterColor }) {
  const colors = colorMap[chapterColor] || colorMap.cyan;
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-5xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="flex items-center gap-2 mb-5">
          <Icon name="Monitor" size={16} className="text-blue-400" />
          <span className="text-blue-400 font-mono text-sm font-bold">Microsoft Windows</span>
          <div className="flex-1 h-px bg-blue-500/20" />
        </div>
        <div className="space-y-3">
          {slide.artifacts.map((art, i) => (
            <div
              key={i}
              className="glass rounded-xl p-4 border border-blue-500/20 flex gap-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                <Icon name={art.icon} size={18} className="text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-sm">{art.name}</h4>
                <p className="text-slate-400 text-sm mt-1">{art.desc}</p>
                <div className="mt-2 bg-slate-900/60 rounded px-2 py-1 font-mono text-xs text-emerald-400 truncate">{art.forensic}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Linux + macOS combined slide
export function ArtifactsOtherSlide({ slide, chapterNum, chapterColor }) {
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-6xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {slide.ecosystems.map((eco, ei) => {
            const c = colorMap[eco.color] || colorMap.gray;
            return (
              <div key={ei} className="space-y-3">
                <div className={`flex items-center gap-2 mb-3`}>
                  <Icon name="Terminal" size={16} className={c.text} />
                  <span className={`${c.text} font-mono text-sm font-bold`}>{eco.os}</span>
                  <div className={`flex-1 h-px ${c.bg}`} />
                </div>
                {eco.artifacts.map((art, i) => (
                  <div key={i} className={`glass rounded-xl p-4 border ${c.border} animate-fade-in-up`} style={{ animationDelay: `${i * 0.1}s` }}>
                    <h4 className="text-white font-bold text-sm">{art.name}</h4>
                    <p className="text-slate-400 text-sm mt-1">{art.desc}</p>
                    <div className="mt-2 bg-slate-900/60 rounded px-2 py-1 font-mono text-xs text-emerald-400">{art.path}</div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Forensic techniques comparison
export function TechniquesSlide({ slide, chapterNum, chapterColor }) {
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-6xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slide.techniques.map((tech, i) => {
            const c = colorMap[tech.color] || colorMap.gray;
            return (
              <div
                key={i}
                className={`glass rounded-xl p-5 border ${c.border} animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`inline-block ${c.badge} border text-xs font-bold rounded px-2 py-1 mb-3`}>{tech.name}</div>
                <p className="text-slate-400 text-sm mb-3">{tech.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded p-2">
                    <p className="text-xs text-emerald-400 font-semibold mb-1">Vantagens</p>
                    {tech.pros.map((p, j) => (
                      <p key={j} className="text-xs text-slate-400">+ {p}</p>
                    ))}
                  </div>
                  <div className="bg-red-500/5 border border-red-500/20 rounded p-2">
                    <p className="text-xs text-red-400 font-semibold mb-1">Limitações</p>
                    {tech.cons.map((p, j) => (
                      <p key={j} className="text-xs text-slate-400">− {p}</p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {tech.tools.map((t, j) => (
                    <span key={j} className="text-xs bg-slate-800 text-slate-400 border border-slate-700 rounded px-2 py-0.5 font-mono">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Challenges slide
export function ChallengesSlide({ slide, chapterNum, chapterColor }) {
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-5xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="space-y-3">
          {slide.challenges.map((ch, i) => {
            const c = colorMap[ch.color] || colorMap.gray;
            return (
              <div
                key={i}
                className={`glass rounded-xl p-5 border ${c.border} flex gap-4 animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center shrink-0`}>
                  <Icon name={ch.icon} size={22} className={c.text} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">{ch.title}</h4>
                  <p className="text-slate-400 text-sm">{ch.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// AI tools slide
export function AIToolsSlide({ slide, chapterNum, chapterColor }) {
  const colors = colorMap[chapterColor] || colorMap.cyan;
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-5xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slide.aitools.map((tool, i) => (
            <div
              key={i}
              className={`glass rounded-xl p-5 border ${colors.border} animate-fade-in-up`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-3`}>
                <Icon name={tool.icon} size={20} className={colors.text} />
              </div>
              <h4 className="text-white font-bold text-sm mb-2">{tool.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Future technologies slide
export function FutureSlide({ slide, chapterNum, chapterColor }) {
  const urgencyColor = { critical: 'red', medium: 'yellow', low: 'gray' };
  const urgencyLabel = { critical: 'Crítico', medium: 'Médio', low: 'Emergente' };
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-5xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="space-y-4">
          {slide.future.map((item, i) => {
            const uc = colorMap[urgencyColor[item.urgency] || 'gray'];
            return (
              <div
                key={i}
                className={`glass rounded-xl p-5 border border-slate-700/50 flex gap-4 animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center shrink-0`}>
                  <Icon name={item.icon} size={22} className="text-violet-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                    <span className={`text-xs ${uc.badge} border rounded-full px-2 py-0.5`}>{urgencyLabel[item.urgency]}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-1">{item.desc}</p>
                  <p className="text-xs text-slate-500"><span className="text-slate-400">Impacto:</span> {item.impact}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Future OS + Forensics combined slide
export function FutureOS_ForensicsSlide({ slide, chapterNum, chapterColor }) {
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-6xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Icon name="Monitor" size={14} className="text-violet-400" />
              <span className="text-violet-400 text-xs font-mono font-bold uppercase tracking-wider">Futuro dos SOs</span>
            </div>
            <div className="space-y-3">
              {slide.futureOS.map((item, i) => (
                <div key={i} className="glass rounded-xl p-4 border border-violet-500/20 flex gap-3 animate-fade-in-up" style={{animationDelay:`${i*0.1}s`}}>
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={16} className="text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Icon name="Search" size={14} className="text-emerald-400" />
              <span className="text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">Futuro da Perícia</span>
            </div>
            <div className="space-y-3">
              {slide.futureForensics.map((item, i) => (
                <div key={i} className="glass rounded-xl p-4 border border-emerald-500/20 flex gap-3 animate-fade-in-up" style={{animationDelay:`${i*0.12}s`}}>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={16} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4-pillars closure slide
export function ClosurePillarsSlide({ slide, chapterNum, chapterColor }) {
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-start justify-center">
      <div className="max-w-5xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {slide.pillars.map((p, i) => {
            const c = colorMap[p.color] || colorMap.gray;
            return (
              <div
                key={i}
                className={`glass rounded-xl p-6 border ${c.border} animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-3xl font-black ${c.text} opacity-30`}>{p.num}</span>
                  <div className={`w-10 h-10 rounded-lg ${c.bg} border ${c.border} flex items-center justify-center`}>
                    <Icon name={p.icon} size={20} className={c.text} />
                  </div>
                </div>
                <h4 className="text-white font-bold mb-2">{p.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Final reflection slide
export function ReflectionSlide({ slide, chapterNum, chapterColor }) {
  return (
    <div className="min-h-screen tech-grid px-6 py-10 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <SlideHeader chapterNum={chapterNum} subtitle={slide.subtitle} icon={slide.icon} color={chapterColor} />

        {/* Main quote */}
        <div className="glass rounded-2xl p-8 border border-emerald-500/30 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl" />
          <Icon name="Lightbulb" size={32} className="text-emerald-400 mb-4 animate-float" />
          <blockquote className="text-lg text-slate-200 italic leading-relaxed mb-4">
            "{slide.quote}"
          </blockquote>
          <p className="text-emerald-400 text-sm font-mono">— {slide.author}</p>
        </div>

        <div className="glass rounded-xl p-5 border border-cyan-500/20 mb-6">
          <p className="text-slate-300 leading-relaxed text-sm">{slide.keyMessage}</p>
        </div>

        {/* Bibliography */}
        <div className="glass rounded-xl p-5 border border-slate-700/50">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="BookOpen" size={16} className="text-slate-400" />
            <span className="text-slate-400 text-xs font-mono font-bold uppercase tracking-wider">Bibliografia Oficial</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {slide.bibliography.map((ref, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-500">
                <span className="text-slate-600 font-mono shrink-0">[{i+1}]</span>
                <span>{ref}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
