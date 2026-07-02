export const chapters = [
  {
    id: 0,
    type: "cover",
    title: "Computacao Forense em Sistemas Operacionais",
    subtitle: "Analise de Memoria Volatil",
    instructor: "Prof. Me. Maximiano Eduardo Pereira",
    institution: "UNCISAL - Moodle (ced.uncisal.edu.br)",
    module: "Unidade 2 · Modulo 5",
    note: "Material desenvolvido com suporte de IA Generativa sob planejamento e estruturacao metodologica do docente responsavel.",
  },
  {
    id: 1,
    type: "intro",
    chapterNum: "Apresentacao",
    title: "Bem-vindos ao Modulo 5",
    icon: "MemoryStick",
    color: "purple",
    content:
      "Neste modulo estudaremos coleta e analise de memoria volatil, com foco em RAM, ordem de volatilidade, captura forense e extracao de artefatos com ferramentas especializadas.",
    topics: [
      { icon: "MemoryStick", text: "Conceitos de memoria volatil" },
      { icon: "Clock", text: "Ordem de coleta de provas" },
      { icon: "HardDrive", text: "Imagem de memoria e integridade" },
      { icon: "Wrench", text: "Ferramentas de coleta e analise" },
      { icon: "ShieldCheck", text: "Boas praticas e cadeia de custodia" },
    ],
  },
  {
    id: 2,
    type: "chapter",
    chapterNum: "Capitulo 1",
    title: "Fundamentos da Memoria Volatil",
    icon: "MemoryStick",
    color: "purple",
    slides: [
      {
        subtitle: "Introducao a Memoria Volatil",
        icon: "Zap",
        content: [
          {
            heading: "O que e memoria volatil?",
            text: "E a memoria principal (RAM), onde sistema, programas e dados em uso sao carregados para execucao. Mantem dados enquanto houver energia.",
            icon: "MemoryStick",
          },
          {
            heading: "Por que e volatil?",
            text: "Ao desligar ou reiniciar o equipamento, os dados sao perdidos. Por isso a coleta deve ocorrer antes de outras acoes investigativas.",
            icon: "AlertTriangle",
            highlight: true,
          },
          {
            heading: "Artefatos encontrados na RAM",
            text: "Processos em execucao, conexoes de rede ativas, chaves temporarias, dados abertos e atividades ocultas podem estar presentes apenas em memoria.",
            icon: "Database",
          },
          {
            heading: "Importancia forense",
            text: "Muitas evidencias nao ficam no disco. A memoria complementa a investigacao ao revelar acoes sem vestigios permanentes.",
            icon: "Search",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "Ordem de Coleta de Provas",
        icon: "Clock",
        content: [
          {
            heading: "Conceito fundamental",
            text: "A ordem de volatilidade estabelece que dados mais efemeros devem ser coletados primeiro.",
            icon: "BookOpen",
          },
          {
            heading: "Sequencia correta",
            text: "RAM, registradores/cache de CPU, dados de rede e roteamento, discos e armazenamento permanente, e depois midias externas e backups.",
            icon: "BarChart",
            highlight: true,
          },
          {
            heading: "Por que essa ordem?",
            text: "Qualquer interacao no sistema pode alterar memoria e apagar vestigios criticos, inclusive comandos simples ou navegacao local.",
            icon: "AlertTriangle",
          },
          {
            heading: "Regra de ouro",
            text: "Se possivel, nao desligar o equipamento antes da aquisicao da RAM, evitando perda irreversivel de evidencia volatil.",
            icon: "Lock",
            highlight: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: "chapter",
    chapterNum: "Capitulo 2",
    title: "Coleta da Imagem de Memoria",
    icon: "HardDrive",
    color: "orange",
    slides: [
      {
        subtitle: "Coleta da Imagem de Memoria",
        icon: "HardDrive",
        content: [
          {
            heading: "O que e uma imagem de memoria?",
            text: "E uma copia bit a bit integral da RAM no momento da coleta. Deve ser fiel ao original para manter valor probatorio.",
            icon: "HardDrive",
          },
          {
            heading: "Requisitos da coleta",
            text: "Usar ferramentas validadas, salvar em midia externa protegida, calcular hash e registrar horario/equipamento/procedimento.",
            icon: "CheckCircle",
            highlight: true,
          },
          {
            heading: "Ferramentas para Windows",
            text: "FTK Imager, WinPmem, DumpIt e Volatility Workbench sao opcoes frequentes para aquisicao ou apoio operacional.",
            icon: "Monitor",
          },
          {
            heading: "Ferramentas para Linux",
            text: "LiME, dd com suporte adequado, Avml e utilitarios relacionados podem apoiar captura conforme o ambiente.",
            icon: "Terminal",
          },
        ],
      },
      {
        subtitle: "Extracao e Analise de Artefatos",
        icon: "Wrench",
        content: [
          {
            heading: "Principais ferramentas de analise",
            text: "Volatility Framework e referencia amplamente adotada; outras opcoes incluem Rekall e suites forenses com modulos de memoria.",
            icon: "Wrench",
            highlight: true,
          },
          {
            heading: "O que podemos extrair? - Processos",
            text: "Lista de processos, PID, caminho de executaveis, horario de inicio e uso de memoria para detectar comportamentos suspeitos.",
            icon: "Settings",
          },
          {
            heading: "O que podemos extrair? - Rede",
            text: "Conexoes ativas, portas, IPs de origem/destino e associacao entre sockets e processos.",
            icon: "Globe",
          },
          {
            heading: "O que podemos extrair? - Dados sensiveis",
            text: "Fragmentos de documentos, credenciais temporarias, chaves criptograficas e outras estruturas que podem nao persistir em disco.",
            icon: "Lock",
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
    title: "Analise Pratica e Boas Praticas",
    icon: "Microscope",
    color: "cyan",
    slides: [
      {
        subtitle: "Exemplos Praticos de Analise",
        icon: "Terminal",
        content: [
          {
            heading: "Verificar processos em execucao",
            text: "No Volatility, pslist lista processos visiveis no instante da coleta e ajuda na triagem inicial.",
            icon: "BookCheck",
          },
          {
            heading: "Identificar conexoes de rede",
            text: "Netscan permite mapear portas e conexoes associadas a processos, incluindo estados relevantes para investigacao.",
            icon: "Wifi",
          },
          {
            heading: "Recuperar referencias de arquivos",
            text: "Filescan auxilia na localizacao de artefatos de arquivos em memoria para correlacao com evidencias de disco.",
            icon: "FileSearch",
          },
          {
            heading: "Verificar atividades ocultas",
            text: "Psscan ajuda a identificar rastros de processos finalizados ou ocultados por tecnicas maliciosas.",
            icon: "Ghost",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "Desafios e Boas Praticas",
        icon: "ShieldCheck",
        content: [
          {
            heading: "Principais desafios",
            text: "Criptografia, incompatibilidade de ferramentas, fragmentacao dos dados e tamanho elevado das imagens impactam tempo e profundidade da analise.",
            icon: "AlertOctagon",
          },
          {
            heading: "Cuidados na coleta",
            text: "Utilizar ferramentas validadas, calcular hash antes/depois, evitar instalacoes no alvo e documentar cada etapa.",
            icon: "FileText",
            highlight: true,
          },
          {
            heading: "Cuidados na analise",
            text: "Trabalhar com copias, validar perfil/versao, correlacionar com disco e evitar conclusoes baseadas em artefato unico.",
            icon: "Scale",
          },
          {
            heading: "Valor da prova",
            text: "A memoria volatil pode ter reconhecimento tecnico-juridico quando a coleta e analise seguem metodo, integridade e cadeia de custodia.",
            icon: "BookOpen",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "Resumo e Atividade Pratica",
        icon: "GraduationCap",
        content: [
          {
            heading: "Conceito chave",
            text: "A RAM e fonte sensivel de evidencia temporaria e deve ser priorizada quando ha risco de perda por desligamento.",
            icon: "Lightbulb",
          },
          {
            heading: "Etapas do processo",
            text: "Coleta da imagem, verificacao de integridade, analise com ferramentas adequadas e interpretacao com correlacao de fontes.",
            icon: "RotateCcw",
          },
          {
            heading: "Atividade pratica",
            text: "Gerar imagem com ferramenta de aquisicao, analisar com Volatility e extrair processos e conexoes para relatorio tecnico.",
            icon: "Monitor",
          },
          {
            heading: "Objetivo final",
            text: "Dominar coleta e analise de memoria com confiabilidade para uso investigativo e sustentacao pericial.",
            icon: "Crosshair",
            highlight: true,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    type: "quiz",
    title: "Banco de Exercicios",
    subtitle: "Modulo 5 - Analise de Memoria Volatil",
  },
];
