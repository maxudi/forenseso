export const quizQuestions = [
  {
    id: 1,
    chapter: 1,
    question:
      "Por que a memoria RAM e classificada como volatil no contexto forense?",
    options: [
      "Porque e criptografada por padrao em todos os sistemas",
      "Porque seus dados dependem de energia e se perdem ao desligar",
      "Porque nao pode armazenar processos em execucao",
      "Porque so guarda logs de rede",
    ],
    correct: 1,
    feedback:
      "A memoria volatil depende de energia para manter dados. Reinicializar ou desligar pode eliminar evidencias que existem apenas nesse estado temporario.",
  },
  {
    id: 2,
    chapter: 1,
    question:
      "Segundo a ordem de volatilidade, qual fonte deve ser priorizada na coleta?",
    options: ["Backups", "Disco externo", "RAM", "Arquivos de auditoria em NAS"],
    correct: 2,
    feedback:
      "A RAM e o alvo inicial porque seu conteudo pode desaparecer rapidamente, comprometendo artefatos criticos de processos e sessoes em andamento.",
  },
  {
    id: 3,
    chapter: 1,
    question:
      "Qual afirmacao representa melhor o risco de interagir no sistema antes da coleta?",
    options: [
      "Nao ha impacto relevante na memoria",
      "Interacoes podem alterar RAM e apagar vestigios",
      "Somente comandos de rede alteram a RAM",
      "Apenas abrir arquivos de texto e seguro",
    ],
    correct: 1,
    feedback:
      "Acoes aparentemente simples alteram estruturas em memoria e podem sobrescrever dados de interesse forense.",
  },
  {
    id: 4,
    chapter: 2,
    question:
      "O que define corretamente uma imagem de memoria forense?",
    options: [
      "Captura parcial apenas de processos ativos",
      "Copia bit a bit integral da RAM no instante da coleta",
      "Relatorio textual de eventos do sistema",
      "Backup compactado de logs de disco",
    ],
    correct: 1,
    feedback:
      "Imagem de memoria valida deve representar fielmente o conteudo da RAM no momento da aquisicao, com rastreabilidade e integridade verificavel.",
  },
  {
    id: 5,
    chapter: 2,
    question:
      "Qual pratica fortalece a integridade da aquisicao de memoria?",
    options: [
      "Mover arquivo sem hash para ganhar tempo",
      "Calcular hash e documentar procedimento",
      "Salvar apenas em particao do suspeito",
      "Editar metadata para padronizar nome",
    ],
    correct: 1,
    feedback:
      "Hash e documentacao permitem verificar integridade e reprodutibilidade, fundamentos para validade tecnica e juridica.",
  },
  {
    id: 6,
    chapter: 2,
    question:
      "Qual ferramenta e amplamente usada para analise de memoria volatil?",
    options: ["Volatility Framework", "GParted", "Nmap", "Wireshark apenas"],
    correct: 0,
    feedback:
      "Volatility e referencia consolidada para extracao de artefatos de memoria em multiplos cenarios.",
  },
  {
    id: 7,
    chapter: 2,
    question:
      "Na analise de memoria, o que a investigacao de processos pode revelar?",
    options: [
      "Apenas nome do usuario logado",
      "Somente drivers de impressora",
      "PID, caminho de executaveis e horarios de inicio",
      "Somente arquivos temporarios de browser",
    ],
    correct: 2,
    feedback:
      "Processos em memoria permitem mapear execucao real no momento da coleta, incluindo indicadores de anomalia.",
  },
  {
    id: 8,
    chapter: 3,
    question:
      "Qual objetivo principal do uso de netscan em memoria?",
    options: [
      "Enumerar bibliotecas DLL carregadas",
      "Mapear conexoes de rede e portas associadas a processos",
      "Montar particoes de disco",
      "Extrair chaves do registro offline",
    ],
    correct: 1,
    feedback:
      "Netscan ajuda a correlacionar atividade de rede com processos, reforcando hipoteses sobre comunicacao externa suspeita.",
  },
  {
    id: 9,
    chapter: 3,
    question:
      "Qual afirmacao sobre psscan e mais adequada?",
    options: [
      "Substitui completamente pslist",
      "Busca apenas processos de kernel autenticados",
      "Ajuda a localizar vestigios de processos encerrados ou ocultos",
      "Mostra somente conexoes HTTPS",
    ],
    correct: 2,
    feedback:
      "Psscan pode identificar estruturas residuais e inconsistencias ligadas a tecnicas de ocultacao de processos.",
  },
  {
    id: 10,
    chapter: 3,
    question:
      "Qual combinacao representa boa pratica de analise forense de memoria?",
    options: [
      "Analisar arquivo unico e concluir rapidamente",
      "Trabalhar em copia, validar compatibilidade e correlacionar com disco",
      "Executar ferramentas novas diretamente no alvo",
      "Descartar achados que contradizem hipoteses iniciais",
    ],
    correct: 1,
    feedback:
      "A robustez da conclusao depende de metodo, validacao tecnica e correlacao entre fontes independentes.",
  },
  {
    id: 11,
    chapter: 3,
    question:
      "Qual desafio operacional e comum em pericia de memoria volatil?",
    options: [
      "Imagens sempre pequenas e simples",
      "Ausencia total de fragmentacao",
      "Volume elevado de dados e possiveis incompatibilidades de ferramenta",
      "Impossibilidade de usar hash",
    ],
    correct: 2,
    feedback:
      "Imagens podem ter varios GB, exigindo planejamento de armazenamento, processamento e escolha correta de perfil/versao.",
  },
  {
    id: 12,
    chapter: 3,
    question:
      "Em termos probatorios, quando a evidencia de memoria ganha maior forca?",
    options: [
      "Quando coletada sem registro para evitar exposicao",
      "Quando segue cadeia de custodia e procedimento validado",
      "Quando nao ha comparacao com outras fontes",
      "Quando e interpretada sem considerar limitacoes",
    ],
    correct: 1,
    feedback:
      "Procedimento documentado, integridade verificada e interpretacao tecnica consistente sustentam a confiabilidade da prova de memoria.",
  },
];
