import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = Number(process.env.SMTP_API_PORT || 3001);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_APP_PASSWORD;
const smtpTo = process.env.SMTP_TO || 'max@netminas.com';

app.use(cors({ origin: process.env.SMTP_ALLOWED_ORIGIN || true }));
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/send-simulado', async (req, res) => {
  try {
    const { studentName, studentEmail, mode, score, total, wrongQuestions } = req.body || {};

    if (!studentName || typeof studentName !== 'string') {
      return res.status(400).json({ error: 'Nome do aluno e obrigatorio.' });
    }

    if (!Number.isInteger(score) || !Number.isInteger(total)) {
      return res.status(400).json({ error: 'Pontuacao invalida.' });
    }

    const normalizedStudentEmail = (studentEmail || '').trim();
    if (normalizedStudentEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedStudentEmail)) {
      return res.status(400).json({ error: 'E-mail do aluno invalido.' });
    }

    if (!smtpUser || !smtpPass) {
      return res.status(500).json({
        error: 'SMTP nao configurado. Defina SMTP_USER e SMTP_APP_PASSWORD no arquivo .env.',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const normalizedWrong = Array.isArray(wrongQuestions) ? wrongQuestions : [];

    const summaryLines = [
      `Aluno: ${studentName}`,
      `Email do aluno: ${normalizedStudentEmail || 'Nao informado'}`,
      `Modo: ${mode === 'dirigido' ? 'Estudo Dirigido' : 'Simulado Geral'}`,
      `Pontuacao: ${score}/${total}`,
      `Total de erros: ${normalizedWrong.length}`,
      '',
      'Questoes erradas:',
    ];

    if (normalizedWrong.length === 0) {
      summaryLines.push('Nenhuma questao errada.');
    } else {
      normalizedWrong.forEach((item, idx) => {
        summaryLines.push(``);
        summaryLines.push(`${idx + 1}) M${item.module} - Capitulo ${item.chapter}`);
        summaryLines.push(`Pergunta: ${item.question}`);
        summaryLines.push(`Marcada: ${item.selectedOption}`);
        summaryLines.push(`Correta: ${item.correctOption}`);
      });
    }

    await transporter.sendMail({
      from: smtpUser,
      to: smtpTo,
      cc: normalizedStudentEmail || undefined,
      subject: `Exercicios de Revisao: ${studentName}`,
      text: summaryLines.join('\n'),
    });

    return res.json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Falha no envio do e-mail.' });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`SMTP API running on port ${port}`);
});
