export const chapters = [
  {
    id: 0,
    type: "cover",
    title: "Computacao Forense em Sistemas Operacionais",
    subtitle: "Ferramentas de Investigacao Forense",
    instructor: "Prof. Me. Maximiano Eduardo Pereira",
    institution: "UNCISAL - Moodle (ced.uncisal.edu.br)",
    module: "Unidade 2 · Modulo 6",
    note: "Material desenvolvido com suporte de IA Generativa sob planejamento e estruturacao metodologica do docente responsavel.",
  },
  {
    id: 1,
    type: "intro",
    chapterNum: "Apresentacao",
    title: "Bem-vindos ao Modulo 6",
    icon: "Wrench",
    color: "violet",
    content:
      "Neste modulo final da Unidade 2 vamos consolidar o uso de ferramentas forenses para aquisicao, analise de disco e memoria, com foco pratico em Autopsy e Volatility.",
    topics: [
      { icon: "Scale", text: "Padronizacao e validade tecnica" },
      { icon: "Package", text: "Distribuicoes e ecossistema forense" },
      { icon: "HardDrive", text: "Aquisicao e artefatos especificos" },
      { icon: "Monitor", text: "Hands-on com Autopsy" },
      { icon: "MemoryStick", text: "Hands-on com Volatility" },
    ],
  },
  {
    id: 2,
    type: "chapter",
    chapterNum: "Capitulo 1",
    title: "Panorama e Ecossistema de Ferramentas",
    icon: "Package",
    color: "violet",
    slides: [
      {
        subtitle: "Panorama Geral das Ferramentas",
        icon: "Wrench",
        content: [
          {
            heading: "Por que padronizar ferramentas?",
            text: "Padronizacao garante confiabilidade, repetibilidade e validade legal das provas. Ferramentas devem ser validadas, rastreaveis e nao alterar o original.",
            icon: "Scale",
            highlight: true,
          },
          {
            heading: "Classificacao principal",
            text: "Distribuicoes especializadas, aquisicao de imagens/memoria, analise de discos/arquivos, analise de memoria volatil e ferramentas auxiliares.",
            icon: "Table",
          },
          {
            heading: "Kali Linux",
            text: "Distribuicao baseada em Debian, referencia em seguranca e pericia digital, com amplo conjunto de ferramentas prontas para uso.",
            icon: "Terminal",
            highlight: true,
          },
          {
            heading: "Outras distribuicoes importantes",
            text: "CAINE, SIFT Workstation e Parrot Security sao opcoes relevantes para laboratorios e fluxos forenses.",
            icon: "HardDrive",
          },
        ],
      },
      {
        subtitle: "Outras Ferramentas Essenciais",
        icon: "Wrench",
        content: [
          {
            heading: "Aquisicao e copia forense",
            text: "FTK Imager, dd/dcfldd e ferramentas de captura de RAM no Windows sao comuns na fase de coleta.",
            icon: "HardDrive",
          },
          {
            heading: "Analise de artefatos especificos",
            text: "RegRipper, Eric Zimmerman Tools e Bulk Extractor ajudam a extrair evidencias direcionadas por tipo de artefato.",
            icon: "Search",
          },
          {
            heading: "Recuperacao e analise profunda",
            text: "Foremost/Scalpel, Wireshark e IPED apoiam recuperacao por assinatura, trafego de rede e processamento investigativo amplo.",
            icon: "Microscope",
          },
          {
            heading: "Ferramentas comerciais",
            text: "Magnet AXIOM, X-Ways e FTK sao amplamente usados em contextos corporativos e policiais.",
            icon: "Server",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: "chapter",
    chapterNum: "Capitulo 2",
    title: "Hands-On com Autopsy",
    icon: "Monitor",
    color: "blue",
    slides: [
      {
        subtitle: "Hands-On - Autopsy: Conceito e Instalacao",
        icon: "Monitor",
        content: [
          {
            heading: "O que e o Autopsy?",
            text: "Interface grafica do The Sleuth Kit para analise de imagens de disco, linha do tempo e gestao de casos.",
            icon: "Monitor",
            highlight: true,
          },
          {
            heading: "Onde encontrar",
            text: "Disponivel no Kali e para Windows/macOS no site oficial. Possui suporte a varios sistemas de arquivos.",
            icon: "Package",
          },
          {
            heading: "Principais recursos",
            text: "Abrir imagens .dd/.E01/.raw, recuperar excluidos, analisar artefatos Windows e pesquisar por palavras-chave e hash.",
            icon: "Settings",
          },
          {
            heading: "Fluxo basico",
            text: "Criar caso, adicionar fonte, ingerir/processar, navegar artefatos e gerar relatorio final.",
            icon: "RotateCcw",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "Hands-On - Autopsy: Passo a Passo Pratico",
        icon: "FileSearch",
        content: [
          {
            heading: "Criar caso",
            text: "Definir nome, pasta de armazenamento e dados do investigador em local seguro para evitar escrita acidental.",
            icon: "HardDrive",
          },
          {
            heading: "Adicionar imagem",
            text: "Informar caminho da imagem, verificar hash e manter modo somente leitura para preservar evidencia.",
            icon: "ArrowRight",
            highlight: true,
          },
          {
            heading: "Analise de artefatos",
            text: "Visualizar/exportar arquivos, ordenar eventos em timeline e aplicar filtros por extensao, palavra ou hash.",
            icon: "BarChart",
          },
          {
            heading: "Gerar relatorio",
            text: "Exportar em HTML/PDF/CSV com foco em itens relevantes e referencia de integridade no laudo tecnico.",
            icon: "FileText",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: "chapter",
    chapterNum: "Capitulo 3",
    title: "Hands-On com Volatility",
    icon: "MemoryStick",
    color: "cyan",
    slides: [
      {
        subtitle: "Hands-On - Volatility: Conceito e Preparacao",
        icon: "MemoryStick",
        content: [
          {
            heading: "O que e o Volatility?",
            text: "Framework open-source de referencia para analise de memoria RAM em Windows, Linux e macOS.",
            icon: "Brain",
            highlight: true,
          },
          {
            heading: "Versoes e instalacao",
            text: "Volatility 2 e amplamente usado; Volatility 3 traz evolucoes para sistemas modernos. Ambos podem estar no Kali.",
            icon: "Wrench",
          },
          {
            heading: "Fluxo de trabalho",
            text: "Obter imagem de memoria, identificar perfil/automacoes, executar plugins e cruzar resultados com analise de disco.",
            icon: "RotateCcw",
            highlight: true,
          },
          {
            heading: "Dica essencial",
            text: "Registrar hash antes e depois da copia e analisar sempre em copia de trabalho para manter integridade.",
            icon: "AlertTriangle",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "Hands-On - Volatility: Comandos e Extracao",
        icon: "Terminal",
        content: [
          {
            heading: "Identificar perfil",
            text: "Comando exemplo: volatility -f imagem.raw imageinfo para inferir versao do SO e arquitetura.",
            icon: "Search",
          },
          {
            heading: "Processos e programas",
            text: "Pslist, pstree e psscan permitem analisar processos ativos, hierarquia e possiveis ocultacoes.",
            icon: "Settings",
            highlight: true,
          },
          {
            heading: "Rede e conexoes",
            text: "Netscan mostra IPs, portas, estado de conexoes e PID associado ao trafego.",
            icon: "Globe",
          },
          {
            heading: "Outras extracoes",
            text: "Filescan, hivelist, cmdline e hashdump ajudam a ampliar contexto de atividade e credenciais.",
            icon: "Lock",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    type: "chapter",
    chapterNum: "Capitulo 4",
    title: "Boas Praticas e Atividade",
    icon: "ShieldCheck",
    color: "green",
    slides: [
      {
        subtitle: "Boas Praticas e Atividade Pratica",
        icon: "CheckCircle",
        content: [
          {
            heading: "Regras de ouro",
            text: "Usar copia de trabalho, documentar comandos/parametros, verificar hash e cruzar memoria e disco.",
            icon: "CheckCircle",
            highlight: true,
          },
          {
            heading: "Checklist de laboratorio",
            text: "Validar ferramenta, registrar ambiente, manter trilha de auditoria e preservar arquivos originais.",
            icon: "BookCheck",
          },
          {
            heading: "Atividade pratica sugerida",
            text: "Executar um mini caso com imagem de disco e memoria, gerar achados e validar correlacao entre fontes.",
            icon: "Microscope",
          },
          {
            heading: "Objetivo final",
            text: "Consolidar dominio operacional das ferramentas para produzir relatorios tecnicos consistentes.",
            icon: "Crosshair",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    type: "quiz",
    title: "Banco de Exercicios",
    subtitle: "Modulo 6 - Ferramentas de Investigacao Forense",
  },
];
