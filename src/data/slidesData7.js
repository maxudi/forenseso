export const chapters = [
  {
    id: 0,
    type: "cover",
    title: "Computacao Forense em Sistemas Operacionais",
    subtitle: "Modulo 7 - Relatorio e Cadeia de Custodia",
    instructor: "Prof. Me. Maximiano Eduardo Pereira",
    institution: "UNCISAL - Moodle (ced.uncisal.edu.br)",
    module: "Unidade 3 · Modulo 7",
    note: "Material desenvolvido com suporte de IA Generativa sob planejamento e estruturacao metodologica do docente responsavel.",
  },
  {
    id: 1,
    type: "intro",
    chapterNum: "Apresentacao",
    title: "Bem-vindos ao Modulo 7",
    icon: "Scale",
    color: "red",
    content:
      "Neste modulo estudaremos como documentar, preservar e apresentar provas digitais com validade tecnica e juridica por meio da cadeia de custodia e do relatorio pericial.",
    topics: [
      { icon: "Link", text: "Cadeia de custodia" },
      { icon: "FileText", text: "Estrutura do relatorio pericial" },
      { icon: "ShieldCheck", text: "Integridade, autenticidade e rastreabilidade" },
      { icon: "Scale", text: "Conformidade legal e normas tecnicas" },
      { icon: "CheckCircle", text: "Valor probatorio da evidencia" },
    ],
  },
  {
    id: 2,
    type: "chapter",
    chapterNum: "Capitulo 1",
    title: "Conceitos e Cadeia de Custodia",
    icon: "Link",
    color: "red",
    slides: [
      {
        subtitle: "Introducao e Conceitos Fundamentais",
        icon: "BookOpen",
        content: [
          {
            heading: "Finalidade deste modulo",
            text: "Apresentar procedimentos essenciais para garantir que provas digitais sejam confiaveis, integras e aceitas legalmente da coleta a apresentacao final.",
            icon: "Scale",
          },
          {
            heading: "O que e Cadeia de Custodia?",
            text: "Documento e conjunto de acoes que registram, sem interrupcao, pessoas, locais e etapas por onde a evidencia passou, comprovando ausencia de adulteracao.",
            icon: "Link",
            highlight: true,
          },
          {
            heading: "O que e o Relatorio Pericial?",
            text: "Documento tecnico final com objetivos, metodologia, ferramentas, analises e conclusoes baseadas nos dados encontrados.",
            icon: "FileText",
            highlight: true,
          },
          {
            heading: "Importancia legal",
            text: "Sem cadeia de custodia adequada e relatorio consistente, a prova pode ser invalidada mesmo quando tecnicamente correta.",
            icon: "AlertTriangle",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "Cadeia de Custodia - Principios e Estrutura",
        icon: "ShieldCheck",
        content: [
          {
            heading: "Principios basicos",
            text: "Rastreabilidade, integridade, autenticidade e responsabilidade sao os pilares para preservar valor probatorio da evidencia.",
            icon: "ShieldCheck",
            highlight: true,
          },
          {
            heading: "Informacoes obrigatorias no documento",
            text: "Identificacao da evidencia, data/hora/local da coleta, responsavel pela coleta e registros de cada transferencia de guarda.",
            icon: "FileText",
          },
          {
            heading: "Controle de integridade",
            text: "Registrar hash na coleta e em cada etapa de analise confirma se o conteudo permaneceu inalterado.",
            icon: "Lock",
            highlight: true,
          },
          {
            heading: "Fluxo da cadeia",
            text: "Coleta, acondicionamento, transporte, armazenamento seguro, analise e guarda final. Falhas nesse fluxo comprometem a prova.",
            icon: "RotateCcw",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: "chapter",
    chapterNum: "Capitulo 2",
    title: "Acondicionamento e Relatorio Pericial",
    icon: "Package",
    color: "orange",
    slides: [
      {
        subtitle: "Acondicionamento e Armazenamento da Evidencia",
        icon: "Package",
        content: [
          {
            heading: "Regras de acondicionamento",
            text: "Cada dispositivo deve ser embalado individualmente, lacrado e etiquetado com identificacao unica para prevenir danos e trocas.",
            icon: "Package",
          },
          {
            heading: "Protecao contra alteracoes",
            text: "Evidencias de armazenamento devem permanecer em modo somente leitura. Nunca instalar software ou gravar no original.",
            icon: "AlertTriangle",
            highlight: true,
          },
          {
            heading: "Armazenamento adequado",
            text: "Local seguro com controle de acesso e condicoes ambientais apropriadas reduz risco de degradacao e acesso indevido.",
            icon: "Server",
          },
          {
            heading: "Prazos e guarda",
            text: "A guarda segue normas legais. Destinacao final, manutencao ou devolucao precisam de registro formal.",
            icon: "Clock",
          },
        ],
      },
      {
        subtitle: "Relatorio Pericial - Estrutura e Requisitos",
        icon: "FileText",
        content: [
          {
            heading: "Caracteristicas essenciais",
            text: "Relatorio deve ser claro, objetivo, preciso e imparcial, evitando ambiguidade, opiniao pessoal e conclusoes sem base tecnica.",
            icon: "BookCheck",
            highlight: true,
          },
          {
            heading: "1. Identificacao e Introducao",
            text: "Incluir dados de solicitante/perito, objetivo, escopo, base normativa e resumo do caso.",
            icon: "BookOpen",
          },
          {
            heading: "2. Metodologia e Procedimentos",
            text: "Descrever coleta/recebimento, ferramentas e versoes, etapas da analise e verificacao de integridade.",
            icon: "Settings",
          },
          {
            heading: "3. Analise e Conclusao",
            text: "Apresentar achados, interpretacao tecnica, conclusoes aderentes aos dados e anexos com registros e hashes.",
            icon: "BarChart",
            highlight: true,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: "chapter",
    chapterNum: "Capitulo 3",
    title: "Conformidade e Resumo Final",
    icon: "Scale",
    color: "green",
    slides: [
      {
        subtitle: "Conformidade Legal e Normas Tecnicas",
        icon: "Scale",
        content: [
          {
            heading: "Base legal no Brasil",
            text: "A pericia digital observa legislacao processual e normativos aplicaveis, alem de requisitos institucionais de orgaos periciais.",
            icon: "Scale",
            highlight: true,
          },
          {
            heading: "Normas tecnicas internacionais",
            text: "Familia ISO/IEC 27037, 27041, 27042 e 27043 orienta coleta, preservacao, analise e apresentacao da prova digital.",
            icon: "Globe",
          },
          {
            heading: "Erros que invalidam a prova",
            text: "Ausencia de cadeia de custodia, alteracao do original, ferramentas nao validadas e relatorio incompleto enfraquecem valor tecnico-juridico.",
            icon: "X",
            highlight: true,
          },
          {
            heading: "Valor probatorio",
            text: "Quando procedimentos sao seguidos corretamente, relatorio e custodia sustentam a prova tecnica perante o sistema judiciario.",
            icon: "CheckCircle",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "Resumo Final",
        icon: "Flag",
        content: [
          {
            heading: "Cadeia de Custodia",
            text: "Registro continuo e formal da trajetoria da evidencia para assegurar integridade e autenticidade.",
            icon: "Link",
          },
          {
            heading: "Relatorio Pericial",
            text: "Documento tecnico que consolida procedimentos, resultados e conclusoes para apoiar tomada de decisao processual.",
            icon: "FileText",
          },
          {
            heading: "Pilares fundamentais",
            text: "Legalidade, integridade, rastreabilidade e imparcialidade sustentam o valor tecnico e juridico da investigacao.",
            icon: "ShieldCheck",
            highlight: true,
          },
          {
            heading: "Objetivo final",
            text: "Transformar dados digitais em provas confiaveis, compreensiveis e aceitas de forma justa e tecnicamente fundamentada.",
            icon: "Crosshair",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    type: "quiz",
    title: "Banco de Exercicios",
    subtitle: "Modulo 7 - Relatorio e Cadeia de Custodia",
  },
];
