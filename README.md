# Forense Slides

Aplicacao React/Vite para aulas de Computacao Forense em Sistemas Operacionais.

## Executar em desenvolvimento

1. Instale dependencias:

```bash
npm install
```

2. Crie o arquivo `.env` a partir do `.env.example` e preencha os dados SMTP.

3. Execute frontend + API SMTP juntos:

```bash
npm run dev
```

Frontend: `http://localhost:3000`

API SMTP: `http://localhost:3001`

## Simulado Geral / Estudo Dirigido

O botao `Simulado` no topo abre uma avaliacao que engloba todos os modulos (M1 a M7).

Fluxo:

1. Aluno informa o nome.
2. (Opcional) Aluno informa e-mail para receber copia.
3. Responde as questoes.
4. Pode usar `Limpar questoes` para reiniciar o simulado.
5. Pode usar `Exportar PDF` ao finalizar.
6. Clica em `Enviar Resultado`.
7. O backend envia e-mail com pontuacao e lista de erros.

Assunto enviado:

`Exercicios de Revisao: Nome do Aluno`

Quando o e-mail do aluno for informado, o sistema envia copia em `cc`.

## Configuracao SMTP (Gmail)

Defina no `.env`:

```env
SMTP_USER=seu-email@gmail.com
SMTP_APP_PASSWORD=sua-senha-de-app
SMTP_TO=max@netminas.com
```

Importante:

- Nao armazene credenciais diretamente no frontend.
- O `.env` esta no `.gitignore` e nao deve ser versionado.
