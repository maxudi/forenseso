export const chapters = [
  {
    id: 0,
    type: "cover",
    title: "Computacao Forense em Sistemas Operacionais",
    subtitle: "Artefatos do Linux: Logs, Configuracao e Historico de Comandos",
    instructor: "Prof. Me. Maximiano Eduardo Pereira",
    institution: "UNCISAL - Moodle (ced.uncisal.edu.br)",
    module: "Unidade 2 · Modulo 4",
    note: "Material desenvolvido com suporte de IA Generativa sob planejamento e estruturacao metodologica do docente responsavel.",
  },
  {
    id: 1,
    type: "intro",
    chapterNum: "Apresentacao",
    title: "Bem-vindos ao Modulo 4",
    icon: "Terminal",
    color: "blue",
    content:
      "Neste modulo estudaremos artefatos nativos do Linux com foco forense: logs em /var/log, arquivos de configuracao em /etc e historico de comandos dos usuarios.",
    topics: [
      { icon: "FileText", text: "Logs do sistema em /var/log" },
      { icon: "Settings", text: "Arquivos de configuracao do sistema" },
      { icon: "Terminal", text: "Historico de comandos dos usuarios" },
      { icon: "Search", text: "Extracao e interpretacao forense" },
      { icon: "ShieldCheck", text: "Integridade e cadeia de custodia" },
    ],
  },
  {
    id: 2,
    type: "chapter",
    chapterNum: "Capitulo 1",
    title: "Arquivos de Logs (/var/log)",
    icon: "FileText",
    color: "blue",
    slides: [
      {
        subtitle: "Introducao aos Artefatos do Linux",
        icon: "Terminal",
        content: [
          {
            heading: "Contexto",
            text: "Diferente do Windows, o Linux segue o principio de que tudo e arquivo. Atividades, configuracoes e eventos ficam registrados em arquivos estruturados e analisaveis.",
            icon: "Terminal",
          },
          {
            heading: "O que sao esses artefatos?",
            text: "Sao arquivos gerados pelo sistema, servicos e usuarios que armazenam historico de acoes, alteracoes e acessos, apoiando a reconstrucao de eventos.",
            icon: "FileSearch",
          },
          {
            heading: "Temas estudados nesta parte",
            text: "Arquivos de Logs (/var/log), Arquivos de Configuracao do Sistema e Historico de Comandos dos Usuarios.",
            icon: "BookCheck",
            highlight: true,
          },
          {
            heading: "Objetivo da analise",
            text: "Localizar, interpretar e extrair informacoes relevantes para investigacoes forenses, preservando integridade e confiabilidade dos dados.",
            icon: "Crosshair",
          },
        ],
      },
      {
        subtitle: "1. Arquivos de Logs - Conceito e Localizacao",
        icon: "Scroll",
        content: [
          {
            heading: "O que sao logs?",
            text: "Registros sequenciais com data, hora, origem e descricao de eventos do sistema, incluindo inicializacao, falhas, acessos, servicos e conexoes.",
            icon: "Clock",
          },
          {
            heading: "Localizacao padrao",
            text: "Os principais logs ficam em /var/log/. O diretorio tem controle de acesso restrito e normalmente exige privilegio administrativo para analise completa.",
            icon: "HardDrive",
            highlight: true,
          },
          {
            heading: "Formato comum",
            text: "Em geral sao texto simples no formato: data/hora, origem do evento e mensagem detalhada, o que facilita filtros e buscas pontuais.",
            icon: "FileText",
          },
          {
            heading: "Rotacao de logs",
            text: "Para controlar espaco, logs antigos sao rotacionados, renomeados e compactados, por exemplo: syslog.1 e syslog.2.gz.",
            icon: "RotateCcw",
          },
        ],
      },
      {
        subtitle: "1. Arquivos de Logs - Principais Arquivos e Uso Forense",
        icon: "BarChart",
        content: [
          {
            heading: "syslog",
            text: "Registro amplo de eventos de sistema, servicos e aplicacoes. E referencia inicial para entender o que ocorreu em um periodo.",
            icon: "BarChart",
          },
          {
            heading: "auth.log ou secure",
            text: "Reune tentativas de login, autenticacoes, uso de sudo e alteracoes de contas. E essencial para detectar acessos nao autorizados.",
            icon: "Lock",
            highlight: true,
          },
          {
            heading: "kern.log, boot.log e dmesg",
            text: "kern.log registra eventos do kernel, boot.log registra inicializacao e dmesg mostra deteccao de hardware e dispositivos.",
            icon: "Settings",
          },
          {
            heading: "wtmp, btmp e lastlog",
            text: "wtmp guarda logins bem-sucedidos, btmp tentativas com falha e lastlog o ultimo acesso conhecido de cada usuario.",
            icon: "UserCheck",
          },
        ],
      },
      {
        subtitle: "1. Arquivos de Logs - Ferramentas e Cuidados",
        icon: "Wrench",
        content: [
          {
            heading: "O que investigar?",
            text: "Horarios de atividade, origem de conexoes, uso de privilegios elevados, falhas repetidas de autenticacao e alteracoes relevantes.",
            icon: "Search",
          },
          {
            heading: "Ferramentas nativas",
            text: "cat, less, grep, tail e head para leitura/filtragem; last e lastb para acessos; journalctl para ambientes com systemd.",
            icon: "Terminal",
          },
          {
            heading: "Ferramentas especializadas",
            text: "Logwatch, Autopsy e outras suites ajudam na organizacao de eventos, correlacao e geracao de relatorios.",
            icon: "Wrench",
          },
          {
            heading: "Cuidado forense",
            text: "Sempre trabalhe em copia. Evite alterar permissao, timestamps ou conteudo dos arquivos para nao comprometer cadeia de custodia.",
            icon: "AlertTriangle",
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
    title: "Arquivos de Configuracao",
    icon: "Settings",
    color: "cyan",
    slides: [
      {
        subtitle: "2. Arquivos de Configuracao - Conceito e Localizacao",
        icon: "FileText",
        content: [
          {
            heading: "O que sao?",
            text: "Arquivos que definem comportamento de sistema, servicos, rede, usuarios e permissoes. Mudancas de funcionamento passam por essas configuracoes.",
            icon: "Settings",
          },
          {
            heading: "Diretorio principal",
            text: "As configuracoes globais ficam em /etc/, com alteracao normalmente restrita ao administrador.",
            icon: "HardDrive",
            highlight: true,
          },
          {
            heading: "Estrutura dos arquivos",
            text: "Muitos arquivos seguem formato chave=valor e incluem comentarios, favorecendo comparacao com baseline e deteccao de mudancas.",
            icon: "FileSearch",
          },
          {
            heading: "Importancia forense",
            text: "Revelam servicos ativos, regras de seguranca, compartilhamentos e usuarios autorizados no equipamento.",
            icon: "Puzzle",
          },
        ],
      },
      {
        subtitle: "2. Arquivos de Configuracao - Principais Arquivos e Analise",
        icon: "Shield",
        content: [
          {
            heading: "passwd e shadow",
            text: "/etc/passwd lista contas e caracteristicas; /etc/shadow guarda hashes de senha e politicas de validade.",
            icon: "Users",
            highlight: true,
          },
          {
            heading: "group, sudoers e hosts",
            text: "/etc/group define grupos; /etc/sudoers controla elevacao; /etc/hosts mapeia nomes e enderecos localmente.",
            icon: "Lock",
          },
          {
            heading: "fstab, interfaces e resolv.conf",
            text: "/etc/fstab define montagens, configuracoes de rede variam por distribuicao, e /etc/resolv.conf registra DNS em uso.",
            icon: "Globe",
          },
          {
            heading: "Como analisar?",
            text: "Busque contas desconhecidas, privilegios excessivos, alteracoes recentes e servicos desnecessarios. Compare com referencia confiavel.",
            icon: "Search",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: "chapter",
    chapterNum: "Capitulo 3",
    title: "Historico de Comandos",
    icon: "Terminal",
    color: "purple",
    slides: [
      {
        subtitle: "3. Historico de Comandos - Funcionamento e Localizacao",
        icon: "Terminal",
        content: [
          {
            heading: "O que e o historico?",
            text: "Registro de comandos digitados no terminal, permitindo observar a sequencia de acoes e parametros usados.",
            icon: "Terminal",
          },
          {
            heading: "Arquivo de armazenamento",
            text: "Geralmente fica em /home/<usuario>/.bash_history e, para root, em /root/.bash_history.",
            icon: "FileText",
            highlight: true,
          },
          {
            heading: "Regras de funcionamento",
            text: "Tem limite de linhas, costuma gravar ao encerrar sessao e pode variar conforme configuracao de shell e ambiente.",
            icon: "Settings",
          },
          {
            heading: "Relevancia para investigacao",
            text: "Permite identificar tentativas de copia, exclusao, alteracao de arquivos, conexoes remotas e instalacao de ferramentas.",
            icon: "Eye",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "3. Historico de Comandos - Detalhes e Cuidados",
        icon: "Search",
        content: [
          {
            heading: "Informacoes que podemos obter",
            text: "Sequencia de acoes, caminhos acessados, arquivos manipulados, ferramentas usadas e possiveis contatos externos.",
            icon: "BookCheck",
          },
          {
            heading: "Limitacoes e riscos",
            text: "O historico pode ser limpo manualmente e sessoes simultaneas podem atrasar gravacao, exigindo correlacao com outros artefatos.",
            icon: "AlertTriangle",
            highlight: true,
          },
          {
            heading: "Como acessar e analisar",
            text: "Use history ou cat .bash_history em ambiente controlado; em forense, priorize extracao da copia de disco para evitar contaminacao.",
            icon: "Search",
          },
          {
            heading: "Outros arquivos relacionados",
            text: ".bashrc e .bash_profile trazem configuracoes de shell; a pasta .ssh pode revelar chaves e conexoes remotas.",
            icon: "Link",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    type: "chapter",
    chapterNum: "Capitulo 4",
    title: "Resumo e Praticas",
    icon: "CheckCircle",
    color: "green",
    slides: [
      {
        subtitle: "Resumo Geral - Artefatos do Linux",
        icon: "BookOpen",
        content: [
          {
            heading: "Logs do Sistema",
            text: "Registram acessos, falhas e alteracoes, com foco principal em /var/log.",
            icon: "Scroll",
          },
          {
            heading: "Arquivos de Configuracao",
            text: "Definem funcionamento de sistema, usuarios e rede, com base principal em /etc.",
            icon: "Settings",
          },
          {
            heading: "Historico de Comandos",
            text: "Mostra acoes executadas no terminal por usuario, com destaque para .bash_history.",
            icon: "Terminal",
          },
          {
            heading: "Caracteristica principal",
            text: "A analise e favorecida por texto estruturado, mas exige preservacao rigorosa para manter valor probatorio.",
            icon: "CheckCircle",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "Boas Praticas e Atividades Praticas",
        icon: "ShieldCheck",
        content: [
          {
            heading: "Regras essenciais",
            text: "Trabalhar com copia bit a bit, nao alterar origem, registrar caminhos/comandos e validar achados com mais de uma fonte.",
            icon: "ShieldCheck",
            highlight: true,
          },
          {
            heading: "Atividade 1",
            text: "Analisar auth.log e syslog para identificar horarios de atividade e padroes de acesso.",
            icon: "FileText",
          },
          {
            heading: "Atividade 2",
            text: "Avaliar passwd, shadow e sudoers para mapear contas e privilegios.",
            icon: "Microscope",
          },
          {
            heading: "Atividade 3",
            text: "Extrair e interpretar historico de comandos por usuario e correlacionar com logs.",
            icon: "Monitor",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    type: "quiz",
    title: "Banco de Exercicios",
    subtitle: "Modulo 4 - Artefatos do Linux",
  },
];
