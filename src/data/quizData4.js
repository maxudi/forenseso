export const quizQuestions = [
  {
    id: 1,
    chapter: 1,
    question:
      "Qual principio arquitetural do Linux explica a relevancia forense de logs e configuracoes em arquivo?",
    options: [
      "Tudo e memoria",
      "Tudo e servico",
      "Tudo e arquivo",
      "Tudo e processo",
    ],
    correct: 2,
    feedback:
      "No Linux, grande parte dos vestigios de operacao fica materializada em arquivos, o que facilita coleta, leitura e correlacao quando a preservacao e bem executada.",
  },
  {
    id: 2,
    chapter: 1,
    question:
      "Qual diretorio concentra os principais logs do sistema Linux?",
    options: ["/opt/log", "/var/log", "/usr/log", "/etc/log"],
    correct: 1,
    feedback:
      "O diretorio padrao para logs de sistema e servicos e /var/log, com permissoes e formatos que variam conforme distribuicao e daemon de logging.",
  },
  {
    id: 3,
    chapter: 1,
    question:
      "Para que serve a rotacao de logs?",
    options: [
      "Apagar automaticamente qualquer evidencia antiga",
      "Mover logs para o kernel em tempo real",
      "Controlar espaco e manter historico em arquivos renomeados/compactados",
      "Converter logs em banco SQL por padrao",
    ],
    correct: 2,
    feedback:
      "Rotacao organiza e limita crescimento de arquivos, preservando periodos anteriores em nomes sequenciais e possivelmente compactados.",
  },
  {
    id: 4,
    chapter: 1,
    question:
      "Qual arquivo de log e mais indicado para investigar autenticacao e uso de sudo?",
    options: ["boot.log", "auth.log ou secure", "kern.log", "dmesg"],
    correct: 1,
    feedback:
      "auth.log (ou secure, dependendo da distribuicao) registra eventos de autenticacao, falhas de login e elevacao de privilegios.",
  },
  {
    id: 5,
    chapter: 1,
    question:
      "Quais comandos nativos sao uteis para leitura e filtro inicial de logs?",
    options: [
      "cat, less, grep, tail e head",
      "docker, kubectl e helm",
      "mkdir, rm e chmod",
      "ping, traceroute e iperf",
    ],
    correct: 0,
    feedback:
      "Esses comandos permitem leitura progressiva, busca por padroes e recorte temporal, fundamentais na triagem forense inicial.",
  },
  {
    id: 6,
    chapter: 2,
    question:
      "Qual diretorio concentra configuracoes globais do Linux?",
    options: ["/var/tmp", "/etc", "/root", "/srv"],
    correct: 1,
    feedback:
      "O diretorio /etc agrega arquivos de configuracao de sistema e servicos, sendo fonte central para detectar mudancas de comportamento operacional.",
  },
  {
    id: 7,
    chapter: 2,
    question:
      "Qual par de arquivos esta corretamente associado a contas e hashes de senha?",
    options: [
      "/etc/group e /etc/hosts",
      "/etc/passwd e /etc/shadow",
      "/etc/fstab e /etc/resolv.conf",
      "/etc/profile e /etc/motd",
    ],
    correct: 1,
    feedback:
      "/etc/passwd descreve contas; /etc/shadow contem hashes e politicas relacionadas a senha, exigindo maior restricao de acesso.",
  },
  {
    id: 8,
    chapter: 2,
    question:
      "O arquivo /etc/sudoers e relevante porque define:",
    options: [
      "Mapeamento DNS do host",
      "Discos montados automaticamente",
      "Quem pode executar comandos com privilegio elevado",
      "Historico de comandos do bash",
    ],
    correct: 2,
    feedback:
      "sudoers controla autorizacao de elevacao. Mudancas indevidas aqui podem indicar persistencia, abuso de privilegios ou erro de hardening.",
  },
  {
    id: 9,
    chapter: 3,
    question:
      "Onde normalmente fica o historico de comandos de um usuario bash?",
    options: [
      "/var/log/bash.log",
      "/home/<usuario>/.bash_history",
      "/etc/bash/history",
      "/usr/local/.history",
    ],
    correct: 1,
    feedback:
      "Para o usuario comum, o historico costuma estar em /home/<usuario>/.bash_history; para root, em /root/.bash_history.",
  },
  {
    id: 10,
    chapter: 3,
    question:
      "Qual limitacao importante do .bash_history deve ser considerada em pericia?",
    options: [
      "Nao pode ser lido em texto simples",
      "Nunca registra parametros de comandos",
      "Pode ser limpo manualmente e nem sempre grava em tempo real",
      "So armazena comandos de rede",
    ],
    correct: 2,
    feedback:
      "Historico pode ser apagado, truncado ou atrasado por sessao, portanto nao deve ser tratado como fonte unica de verdade.",
  },
  {
    id: 11,
    chapter: 4,
    question:
      "Qual pratica preserva melhor a confiabilidade dos artefatos Linux coletados?",
    options: [
      "Analisar diretamente o sistema ligado para ganhar tempo",
      "Aplicar alteracoes de permissao antes da copia",
      "Trabalhar em copia bit a bit e documentar todo procedimento",
      "Excluir arquivos duplicados para reduzir volume",
    ],
    correct: 2,
    feedback:
      "Copia forense e documentacao detalhada preservam integridade, reprodutibilidade e defensabilidade tecnica da evidencia.",
  },
  {
    id: 12,
    chapter: 4,
    question:
      "Qual estrategia e mais robusta para conclusao pericial em Linux?",
    options: [
      "Basear relatorio apenas em .bash_history",
      "Usar somente um log para evitar contradicoes",
      "Correlacionar logs, configuracoes e historico de comandos",
      "Priorizar velocidade e ignorar validacao cruzada",
    ],
    correct: 2,
    feedback:
      "A correlacao entre fontes independentes reduz vieses e fortalece a linha do tempo, aumentando confianca e consistencia da conclusao tecnica.",
  },
];
