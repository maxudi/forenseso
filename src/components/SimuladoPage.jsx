import { useEffect, useMemo, useState } from 'react';
import { Icon } from './Icons';

async function getJsPdfCtor() {
  if (typeof window !== 'undefined' && window.jspdf?.jsPDF) {
    return window.jspdf.jsPDF;
  }

  await new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-jspdf="true"]');
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Falha ao carregar biblioteca de PDF.')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.async = true;
    script.dataset.jspdf = 'true';
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Falha ao carregar biblioteca de PDF.'));
    document.head.appendChild(script);
  });

  if (typeof window === 'undefined' || !window.jspdf?.jsPDF) {
    throw new Error('jsPDF indisponivel apos carregamento.');
  }

  return window.jspdf.jsPDF;
}

function seededShuffle(items, seedBase) {
  const arr = [...items];
  let seed = (seedBase * 1103515245 + 12345) & 0x7fffffff;

  for (let i = arr.length - 1; i > 0; i -= 1) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    const j = seed % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function buildSimuladoQuestions(allQuestions) {
  const modules = [1, 2, 3, 4, 5, 6, 7];
  const perModule = 5;

  const selected = modules.flatMap((moduleNum) => {
    const bucket = allQuestions.filter((q) => q.module === moduleNum);
    if (bucket.length <= perModule) return bucket;

    const shuffled = seededShuffle(bucket, moduleNum * 97);
    return shuffled.slice(0, perModule);
  });

  return seededShuffle(selected, 20260701);
}

export function SimuladoPage({ questions, onBack }) {
  const [mode, setMode] = useState('simulado');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const simuladoQuestions = useMemo(() => buildSimuladoQuestions(questions), [questions]);
  const activeQuestions = mode === 'simulado' ? simuladoQuestions : questions;
  const question = activeQuestions[currentQ];

  useEffect(() => {
    setCurrentQ(0);
    setAnswers({});
    setSubmitted(false);
    setSendStatus(null);
  }, [mode]);

  const answeredCount = Object.keys(answers).length;
  const total = activeQuestions.length;
  const allAnswered = total > 0 && answeredCount === total;
  const remaining = Math.max(0, total - answeredCount);

  const score = activeQuestions.reduce((acc, q) => {
    if (answers[q.id] === q.correct) return acc + 1;
    return acc;
  }, 0);

  const wrongQuestions = activeQuestions
    .filter((q) => answers[q.id] !== undefined && answers[q.id] !== q.correct)
    .map((q) => ({
      module: q.module,
      chapter: q.chapter,
      question: q.question,
      selectedIndex: answers[q.id],
      selectedOption: q.options[answers[q.id]],
      correctIndex: q.correct,
      correctOption: q.options[q.correct],
    }));

  function handleSelect(idx) {
    setAnswers((prev) => ({ ...prev, [question.id]: idx }));
  }

  function handlePrev() {
    if (currentQ > 0) setCurrentQ((n) => n - 1);
  }

  function handleNext() {
    if (currentQ < total - 1) setCurrentQ((n) => n + 1);
  }

  function handleClearQuestions() {
    setAnswers({});
    setCurrentQ(0);
    setSubmitted(false);
    setSendStatus(null);
  }

  function buildSummaryText() {
    const lines = [
      `Aluno: ${studentName || 'Nao informado'}`,
      `Email do aluno: ${studentEmail || 'Nao informado'}`,
      `Modo: ${mode === 'dirigido' ? 'Estudo Dirigido' : 'Simulado Geral'}`,
      `Pontuacao: ${score}/${total}`,
      `Total de erros: ${wrongQuestions.length}`,
      '',
      'Questoes erradas:',
    ];

    if (wrongQuestions.length === 0) {
      lines.push('Nenhuma questao errada.');
    } else {
      wrongQuestions.forEach((item, idx) => {
        lines.push('');
        lines.push(`${idx + 1}) M${item.module} - Capitulo ${item.chapter}`);
        lines.push(`Pergunta: ${item.question}`);
        lines.push(`Marcada: ${item.selectedOption}`);
        lines.push(`Correta: ${item.correctOption}`);
      });
    }

    return lines.join('\n');
  }

  async function handleExportPdf() {
    if (!studentName.trim()) {
      setSendStatus({ type: 'error', message: 'Informe o nome do aluno antes de exportar.' });
      return;
    }
    if (!allAnswered) {
      setSendStatus({ type: 'error', message: 'Responda todas as questoes antes de exportar PDF.' });
      return;
    }

    try {
      const JsPdfCtor = await getJsPdfCtor();
      const doc = new JsPdfCtor();
      const text = buildSummaryText();
      const lines = doc.splitTextToSize(text, 180);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text('Exercicios de Revisao - Resultado', 14, 16);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(lines, 14, 26);

      const safeName = studentName.trim().replace(/[^a-zA-Z0-9_-]/g, '_');
      doc.save(`resultado_${safeName || 'aluno'}.pdf`);
      setSendStatus({ type: 'success', message: 'PDF exportado com sucesso.' });
    } catch (err) {
      setSendStatus({ type: 'error', message: err.message || 'Nao foi possivel exportar PDF.' });
    }
  }

  async function handleSubmit() {
    if (!studentName.trim()) {
      setSendStatus({ type: 'error', message: 'Informe o nome do aluno antes de enviar.' });
      return;
    }
    if (!allAnswered) {
      setSendStatus({ type: 'error', message: 'Responda todas as questoes antes de enviar.' });
      return;
    }

    setSending(true);
    setSendStatus(null);

    try {
      const payload = {
        studentName: studentName.trim(),
        studentEmail: studentEmail.trim(),
        mode,
        score,
        total,
        wrongQuestions,
      };

      const response = await fetch('/api/send-simulado', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Falha no envio do e-mail.');
      }

      setSubmitted(true);
      setSendStatus({ type: 'success', message: 'Resultado enviado por e-mail com sucesso.' });
    } catch (err) {
      setSendStatus({ type: 'error', message: err.message || 'Erro inesperado no envio.' });
    } finally {
      setSending(false);
    }
  }

  if (!question) {
    return (
      <div className="min-h-screen tech-grid px-6 py-10 flex items-center justify-center">
        <div className="glass rounded-xl p-6 border border-slate-700/60 text-slate-300">
          Nenhuma questao disponivel para o simulado.
        </div>
      </div>
    );
  }

  const progress = Math.round(((currentQ + 1) / total) * 100);

  return (
    <div className="min-h-screen tech-grid px-4 pt-0 pb-28 flex flex-col items-center">
      <div className="h-28 md:h-24 lg:h-20 w-full" />
      <div className="max-w-4xl w-full">
        <div className="glass rounded-2xl p-5 border border-slate-700/60 mb-5">
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-black cyber-text">Simulado Geral / Estudo Dirigido</h2>
              <p className="text-slate-400 text-sm">Abrange todos os modulos (M1 a M7).</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setMode('simulado')}
                className={`px-3 py-2 rounded-lg border text-xs font-mono ${mode === 'simulado' ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' : 'border-slate-700 text-slate-400 hover:text-slate-200'}`}
              >
                Simulado Geral
              </button>
              <button
                onClick={() => setMode('dirigido')}
                className={`px-3 py-2 rounded-lg border text-xs font-mono ${mode === 'dirigido' ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400' : 'border-slate-700 text-slate-400 hover:text-slate-200'}`}
              >
                Estudo Dirigido
              </button>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-4 gap-3">
            <div className="lg:col-span-2">
              <label className="text-xs font-mono text-slate-400 block mb-1">Nome do aluno</label>
              <input
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full h-10 rounded-lg bg-slate-900/70 border border-slate-700 px-3 text-slate-200 outline-none focus:border-cyan-500/60"
                placeholder="Digite o nome completo"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-400 block mb-1">E-mail do aluno (copia)</label>
              <input
                value={studentEmail}
                onChange={(e) => setStudentEmail(e.target.value)}
                className="w-full h-10 rounded-lg bg-slate-900/70 border border-slate-700 px-3 text-slate-200 outline-none focus:border-cyan-500/60"
                placeholder="aluno@email.com"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={onBack}
                className="w-full h-10 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all text-sm"
              >
                Voltar aos Modulos
              </button>
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-4 border border-slate-700/50 mb-5">
          <div className="flex items-center justify-between mb-1 text-xs font-mono text-slate-400">
            <span>Questao {currentQ + 1}/{total}</span>
            <span>Respondidas: {answeredCount}/{total}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="progress-bar h-full rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-slate-700/60 mb-5">
          <div className="mb-4">
            <span className="text-xs text-cyan-400 font-mono">
              Modulo {question.module} · Capitulo {question.chapter}
            </span>
            <p className="text-white text-base mt-2 leading-relaxed">{question.question}</p>
          </div>

          <div className="space-y-3">
            {question.options.map((opt, idx) => {
              const selected = answers[question.id] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left rounded-xl p-4 border transition-all ${selected ? 'border-cyan-400/70 bg-cyan-500/10' : 'border-slate-700/60 hover:border-slate-500/70'}`}
                >
                  <span className="text-slate-200 text-sm">
                    {String.fromCharCode(65 + idx)}) {opt}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 mb-6">
          <button
            onClick={handlePrev}
            disabled={currentQ === 0}
            className="px-4 py-2.5 rounded-xl glass border border-slate-700 text-slate-300 hover:border-cyan-500/50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            disabled={currentQ === total - 1}
            className="px-4 py-2.5 rounded-xl glass border border-slate-700 text-slate-300 hover:border-cyan-500/50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Proxima
          </button>
        </div>

        <div className="glass rounded-2xl p-6 border border-emerald-500/30 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="CheckCircle" size={18} className="text-emerald-400" />
            <span className="text-emerald-400 font-semibold">
              {allAnswered ? 'Resultado pronto para envio' : 'Finalize as respostas para enviar'}
            </span>
          </div>

          <p className="text-slate-300 text-sm mb-3">
            Pontuacao atual: <strong>{score}</strong> de <strong>{total}</strong>.
          </p>

          {!allAnswered && (
            <p className="text-amber-300 text-sm mb-3">
              Faltam <strong>{remaining}</strong> questao(oes) para habilitar o envio.
            </p>
          )}

          {allAnswered && wrongQuestions.length > 0 && (
            <div className="mb-4 max-h-64 overflow-auto rounded-lg border border-slate-700/60 p-3">
              <p className="text-slate-300 text-sm font-semibold mb-2">Questoes com erro:</p>
              <ul className="space-y-2">
                {wrongQuestions.map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-slate-300">M{item.module} C{item.chapter}:</span> {item.question}
                    <br />
                    Marcada: {String.fromCharCode(65 + item.selectedIndex)} ({item.selectedOption})
                    <br />
                    Correta: {String.fromCharCode(65 + item.correctIndex)} ({item.correctOption})
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-xs text-slate-500">Use os botoes fixos no rodape para limpar, exportar PDF e enviar.</p>
        </div>

        {sendStatus && (
          <div className={`rounded-xl p-4 border text-sm ${sendStatus.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-red-500/10 border-red-500/30 text-red-300'}`}>
            {sendStatus.message}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-slate-700/70">
        <div className="max-w-4xl mx-auto px-4 py-3 flex flex-wrap gap-2 justify-end">
          <button
            onClick={handleClearQuestions}
            className="px-4 py-2 rounded-lg border border-orange-500/40 text-orange-300 bg-orange-500/10 hover:bg-orange-500/20 text-sm"
          >
            Limpar questoes
          </button>
          <button
            onClick={handleExportPdf}
            disabled={!allAnswered}
            className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
          >
            Exportar PDF
          </button>
          <button
            onClick={handleSubmit}
            disabled={sending || submitted || !allAnswered}
            className="px-5 py-2 rounded-lg border border-emerald-500/40 text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
          >
            {sending ? 'Enviando...' : submitted ? 'Enviado' : 'Enviar Resultado'}
          </button>
        </div>
      </div>
    </div>
  );
}
