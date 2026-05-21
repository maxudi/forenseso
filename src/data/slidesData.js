export const chapters = [
  {
    id: 0,
    type: "cover",
    title: "Computação Forense em Sistemas Operacionais",
    subtitle: "Introdução, Evolução Histórica e Fundamentos",
    instructor: "Prof. Me. Maximiano Eduardo Pereira",
    institution: "UNCISAL — Moodle (ced.uncisal.edu.br)",
    module: "Módulo 1",
    note: "Material desenvolvido com suporte de IA Generativa (Gemini/Google) sob planejamento e estruturação metodológica do docente responsável.",
  },
  {
    id: 1,
    type: "intro",
    chapterNum: "Apresentação",
    title: "Bem-vindos ao Módulo 1",
    icon: "BookOpen",
    color: "cyan",
    content: `Neste módulo faremos o resgate histórico da arquitetura de hardware e software que moldou os sistemas operacionais modernos, compreendendo como os princípios milenares da criminalística tradicional se expandiram para o ambiente lógico, culminando no surgimento e consolidação da Computação Forense e suas perspectivas futuras.`,
    topics: [
      { icon: "Cpu", text: "Evolução histórica da tecnologia computacional" },
      { icon: "Microscope", text: "Aspectos históricos da ciência forense" },
      { icon: "Search", text: "Surgimento da computação forense" },
      { icon: "Monitor", text: "Forense em sistemas operacionais" },
      { icon: "TrendingUp", text: "Cenário atual e perspectivas futuras" },
    ],
  },
  {
    id: 2,
    type: "chapter",
    chapterNum: "Capítulo 1",
    title: "Evolução Histórica da Tecnologia Computacional",
    icon: "Cpu",
    color: "green",
    slides: [
      {
        subtitle: "1.1 — A Origem da Computação Moderna",
        icon: "Calculator",
        content: [
          {
            heading: "Máquinas Mecânicas de Cálculo",
            text: "A busca pela automação do cálculo remonta à Pascalina (Blaise Pascal, Séc. XVII) e à Máquina Analítica de Charles Babbage (Séc. XIX). Esses dispositivos introduziram os conceitos primordiais de entrada, processamento, armazenamento e saída de dados.",
            icon: "Wrench",
          },
          {
            heading: "Segunda Guerra Mundial — Divisor de Águas",
            text: "O Colossus (Reino Unido) foi o primeiro computador digital eletrônico programável, criado para decifrar a criptografia Lorenz do exército alemão. O ENIAC (EUA) foi desenvolvido para calcular tabelas de balística de artilharia.",
            icon: "Shield",
            highlight: true,
          },
          {
            heading: "A Arquitetura de Von Neumann (1945)",
            text: "Revolucionou a computação com o conceito de programa armazenado: a memória passou a guardar tanto os dados quanto as instruções. Estrutura: CPU (ULA + UC), Memória RAM, E/S e Barramentos.",
            icon: "GitBranch",
          },
          {
            heading: "Mainframes — Centralização e Forense",
            text: "Nos anos 50-60, mainframes dominavam computação corporativa (IBM System/360). Sob a ótica forense: acesso físico e centralizado, manipulação de dados dependente de permissões em um único núcleo.",
            icon: "Server",
          },
        ],
      },
      {
        subtitle: "1.2 — Evolução dos Sistemas Operacionais",
        icon: "Layers",
        generations: [
          {
            era: "1ª Geração (Anos 40–50)",
            name: "Processamento Manual",
            desc: "Sem SO. Programadores interagiam com hardware via chaves físicas, plugues e cartões perfurados.",
            forensic: "Sem logs, registros ou concorrência de usuários.",
            color: "gray",
          },
          {
            era: "2ª Geração (Anos 50–60)",
            name: "Processamento em Lote (Batch)",
            desc: "Primeiros monitores residentes. Programas em fitas magnéticas executados sequencialmente.",
            forensic: "Surge a análise de falhas e análise de memória rudimentar (core dump).",
            color: "blue",
          },
          {
            era: "3ª Geração (Anos 60–70)",
            name: "Multiprogramação e Time-Sharing",
            desc: "Múltiplos programas na memória simultaneamente. Divisão de tempo entre vários usuários.",
            forensic: "Sistemas de arquivos complexos, isolamento de memória, primeiros logs de auditoria de login.",
            color: "purple",
          },
          {
            era: "4ª Geração (Anos 80–Hoje)",
            name: "Computadores Pessoais",
            desc: "Surgimento do PC. UNIX, MS-DOS/Windows, Linux. FAT → NTFS. Interface gráfica multithread.",
            forensic: "Ricos em artefatos: Registro, Prefetch, Event Logs, $MFT.",
            color: "green",
          },
          {
            era: "5ª Geração (Presente)",
            name: "Sistemas Distribuídos e Hiperconectividade",
            desc: "Virtualização (hipervisores), contêineres (Docker), nuvem (AWS/Azure), mobile (Android/iOS), IoT.",
            forensic: "Desafios: ambientes efêmeros, criptografia nativa, jurisdição internacional.",
            color: "cyan",
          },
        ],
      },
      {
        subtitle: "1.3 — Segurança e Incidentes Históricos",
        icon: "AlertTriangle",
        cases: [
          {
            year: "1988",
            name: "Morris Worm",
            desc: "Primeiro worm a se propagar massivamente pela internet. Explorou vulnerabilidades no UNIX. Paralisou ~10% da internet.",
            legacy: "Necessidade urgente de resposta a incidentes e análise de processos em RAM.",
            severity: "high",
          },
          {
            year: "1999–2000",
            name: "Melissa & ILOVEYOU",
            desc: "Ataques massivos por engenharia social. Macros do Word e VBScript infectaram milhões via Outlook.",
            legacy: "Forense em metadados de e-mail e automação de escritório.",
            severity: "high",
          },
          {
            year: "2010",
            name: "Stuxnet",
            desc: "Arma cibernética de extrema complexidade. Quatro Zero-Days do Windows. Sabotou centrífugas nucleares do Irã.",
            legacy: "Era da guerra cibernética: análise de Rootkits, firmwares e técnicas anti-forensics.",
            severity: "critical",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: "chapter",
    chapterNum: "Capítulo 2",
    title: "Aspectos Históricos da Ciência Forense",
    icon: "Microscope",
    color: "purple",
    slides: [
      {
        subtitle: "2.1 — Origem da Investigação Forense",
        icon: "BookOpen",
        content: [
          {
            heading: "Antiguidade — Confissões e Testemunhos",
            text: "Nos primórdios, a resolução de crimes dependia massivamente de confissões e testemunhos orais. O primeiro registro do uso da ciência para resolver um crime está no livro chinês Yi Yu Ji (Séc. III).",
            icon: "Scroll",
          },
          {
            heading: "Medicina Legal como Pioneira",
            text: "Ambroise Paré (Séc. XVI) estudou sistematicamente efeitos de mortes violentas. Em 1784, na Inglaterra, um assassino foi condenado pela correspondência da bucha de pistola com o jornal no bolso do suspeito — balística primitiva.",
            icon: "Activity",
          },
          {
            heading: "Evolução da Prova Material",
            text: "No Séc. XIX, a justiça reconheceu que testemunhos são falhos. A ciência forense migrou o foco da investigação do subjetivismo para a objetividade científica — buscando o 'testemunho silencioso'.",
            icon: "Scale",
          },
        ],
      },
      {
        subtitle: "2.2 — Consolidação e Marcos Históricos",
        icon: "Award",
        content: [
          {
            heading: "Datiloscopia (Impressões Digitais)",
            text: "Herschel e Galton estabeleceram unicidade e imutabilidade das impressões digitais. Em 1892, Juan Vucetich (Argentina) usou datiloscopia para resolver um duplo homicídio, substituindo o falho sistema de Bertillon.",
            icon: "Fingerprint",
            highlight: true,
          },
          {
            heading: "Balística e DNA Forense",
            text: "Calvin Goddard aperfeiçoou o microscópio de comparação balística. Em 1984, Sir Alec Jeffreys desenvolveu o perfil de DNA — tornando-se o padrão-ouro de confiabilidade científica.",
            icon: "Dna",
          },
          {
            heading: "Princípio de Troca de Locard",
            text: "\"Todo contato deixa um rastro\" (Every contact leaves a trace). No ambiente digital: se um atacante interage com um SO, ele inevitavelmente deixa um rastro — log em disco, linha em memória, timestamp alterado.",
            icon: "ArrowLeftRight",
            highlight: true,
          },
          {
            heading: "Cadeia de Custódia",
            text: "Os tribunais passaram a exigir comprovação absoluta de que a evidência coletada na cena era exatamente a mesma analisada. Surgiu o registro cronológico e auditável de todas as pessoas que manusearam o vestígio.",
            icon: "Link",
          },
        ],
      },
      {
        subtitle: "2.2 — Conceitos Fundamentais da Criminalística",
        icon: "BookMarked",
        concepts: [
          {
            term: "Vestígio",
            def: "Qualquer marca, objeto, fato ou rastro bruto encontrado no local do crime, que pode ou não ter relação com o evento investigado.",
            example: "Ex: pendrive encontrado na mesa do suspeito.",
            color: "yellow",
          },
          {
            term: "Indício",
            def: "Vestígio que, após análise pericial, apresenta relação lógica e comprovada com o fato criminoso.",
            example: "Ex: o pendrive contém as senhas bancárias da vítima.",
            color: "orange",
          },
          {
            term: "Evidência",
            def: "Indício que se tornou prova técnica robusta após validação científica e contraditório, aceito pelo magistrado.",
            example: "Ex: laudo pericial apresentado e aceito em juízo.",
            color: "green",
          },
          {
            term: "Integridade",
            def: "Garantia de que o vestígio não sofreu nenhuma alteração desde a coleta até a análise.",
            example: "Verificada por hash criptográfico (MD5, SHA-256).",
            color: "cyan",
          },
          {
            term: "Autenticidade",
            def: "Certeza de que a prova é genuína e provém exatamente da fonte alegada.",
            example: "Assinatura digital e cadeia de custódia documentada.",
            color: "blue",
          },
          {
            term: "Reprodutibilidade",
            def: "Permite que outro perito, usando os mesmos métodos e ferramentas, alcance exatamente o mesmo resultado.",
            example: "Metodologia documentada e validada pela comunidade.",
            color: "purple",
          },
        ],
      },
      {
        subtitle: "2.3 — A Ciência Forense no Contexto Jurídico",
        icon: "Scale",
        content: [
          {
            heading: "Critério de Frye (1923)",
            text: "A técnica científica só seria aceita em tribunal se tivesse 'aceitação geral' na sua respectiva comunidade científica.",
            icon: "CheckCircle",
          },
          {
            heading: "Padrão Daubert (1993)",
            text: "O juiz assume o papel de 'porteiro' (gatekeeper) da evidência. A técnica precisa: ser testável/refutável; ter sido submetida a revisão por pares; ter taxa de erro conhecida; possuir padrões de controle de operação.",
            icon: "Shield",
            highlight: true,
          },
          {
            heading: "O Papel do Perito Judicial",
            text: "O perito atua como os 'olhos técnicos' do juiz. Deve ser estritamente imparcial, traduzindo dados científicos complexos em linguagem acessível para o ecossistema jurídico. No Brasil, sua atuação é regida pelo CPP.",
            icon: "UserCheck",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: "chapter",
    chapterNum: "Capítulo 3",
    title: "Surgimento da Computação Forense",
    icon: "Search",
    color: "blue",
    slides: [
      {
        subtitle: "3.1 — O Encontro entre Tecnologia e Investigação",
        icon: "Crosshair",
        content: [
          {
            heading: "Popularização dos Computadores (Anos 80)",
            text: "Com o advento dos microcomputadores pessoais (Apple II, IBM PC), a computação entrou nas residências. Até então, acesso era restrito a grandes corporações e universidades.",
            icon: "Monitor",
          },
          {
            heading: "Crimes Digitais Emergentes",
            text: "Os computadores passaram a ser usados tanto como alvo do crime (ataques, destruição de dados) quanto como meio para crimes tradicionais (estelionato, desvios financeiros, falsificação de documentos).",
            icon: "AlertOctagon",
          },
          {
            heading: "O Grande Impasse Jurídico",
            text: "As leis de busca e apreensão foram desenhadas para documentos em papel e vestígios biológicos. Dados magnéticos eram invisíveis, voláteis e podiam ser destruídos com uma única tecla.",
            icon: "AlertTriangle",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "3.2 — Primeiros Casos de Computação Forense",
        icon: "FileSearch",
        cases: [
          {
            year: "1986",
            name: "The Cuckoo's Egg — Clifford Stoll",
            desc: "Uma discrepância de apenas $0,75 no faturamento do mainframe do Laboratório Lawrence Berkeley levou Stoll a uma investigação de meses. Resultado: desmantelamento de uma célula hacker alemã que vendia segredos militares dos EUA para a KGB soviética.",
            legacy: "Pioneiro da investigação forense digital e da correlação de logs de rede.",
            severity: "critical",
          },
          {
            year: "Anos 80",
            name: "Fraudes Bancárias — Salami Slicing",
            desc: "Programadores maliciosos modificavam código bancário para desviar frações de centavos de milhares de contas para uma conta pessoal. Identificação exigia análise técnica minuciosa do código-fonte.",
            legacy: "Primeiros exames periciais em software no setor financeiro.",
            severity: "high",
          },
          {
            year: "Anos 80",
            name: "Pirataria de Software",
            desc: "Roubo de código-fonte e distribuição ilegal de softwares. Criou necessidade de metodologias para comparar assinaturas de arquivos e estruturas lógicas em discos apreendidos.",
            legacy: "Origem das técnicas de comparação de assinaturas digitais (hashing).",
            severity: "medium",
          },
        ],
      },
      {
        subtitle: "3.3 — Evolução por Décadas",
        icon: "Clock",
        timeline: [
          {
            decade: "Anos 1980",
            title: "Empirismo e CART/FBI",
            items: [
              "Baseada em tentativas e erros por profissionais de TI apaixonados por segurança",
              "1984: FBI cria o CART (Computer Analysis and Response Team)",
              "Foco em mídias magnéticas locais (disquetes) e análise no SO original — hoje violaria a cadeia de custódia",
            ],
            color: "gray",
          },
          {
            decade: "Anos 1990",
            title: "Ferramentas Especializadas e Dead Analysis",
            items: [
              "Consolidação da perícia baseada em disco rígido (Post-Mortem)",
              "Surgem EnCase e ferramentas de linha de comando no UNIX",
              "Introdução obrigatória de write-blockers de hardware",
              "Técnicas de file carving e leitura de tabelas FAT",
            ],
            color: "blue",
          },
          {
            decade: "Anos 2000",
            title: "Internet e Mobile Forensics",
            items: [
              "Análise de tráfego de rede, e-mails, logs de servidores remotos",
              "Surgimento do ecossistema mobile (iOS, Android, BlackBerry)",
              "Início da Live Forensics para não perder dados voláteis",
            ],
            color: "purple",
          },
          {
            decade: "Anos 2010+",
            title: "Memória, Nuvem e DFIR",
            items: [
              "Memory Forensics com Volatility — dumps de RAM como padrão",
              "Cloud Forensics em AWS, Azure — desafios de jurisdição",
              "DFIR: integração com resposta a incidentes corporativos",
              "Malware Forensics e Threat Intelligence",
            ],
            color: "green",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    type: "chapter",
    chapterNum: "Capítulo 4",
    title: "Computação Forense em Sistemas Operacionais",
    icon: "Monitor",
    color: "cyan",
    slides: [
      {
        subtitle: "4.1 — Por que os SOs são Centrais?",
        icon: "Settings",
        pillars: [
          {
            icon: "MemoryStick",
            title: "Gerenciamento de Memória",
            desc: "O SO dita como o espaço de endereçamento virtual e físico é distribuído. A forense de memória investiga páginas na RAM para recuperar dados que o sistema nunca chegou a registrar em disco.",
          },
          {
            icon: "HardDrive",
            title: "Sistema de Arquivos",
            desc: "Estrutura lógica para organizar dados. O perito reconstrói metadados, analisa permissões, examina setores não alocados e interpreta tabelas (MFT/NTFS, Inodes/EXT4).",
          },
          {
            icon: "Activity",
            title: "Gerenciamento de Processos",
            desc: "Cada executável gera estrutura de dados com PID, subprocessos, descritores de arquivos abertos. Investigar processos identifica malwares ativos e conexões em tempo real.",
          },
          {
            icon: "Users",
            title: "Usuários e Privilégios",
            desc: "O SO controla permissões e matrizes de acesso. Mapear contas, grupos e elevações (UAC/sudo) é vital para provar autoria de ações maliciosas.",
          },
          {
            icon: "FileText",
            title: "Subsistema de Logs e Auditoria",
            desc: "Mecanismos nativos que registram eventos críticos, alterações de configuração e autenticações. Principal fonte para construir timelines de incidentes.",
          },
          {
            icon: "Network",
            title: "Gerenciamento de Rede",
            desc: "O SO gerencia sockets e pilha de protocolos. Investigar tabelas de roteamento, conexões ativas e histórico de Wi-Fi permite traçar a origem de ataques.",
          },
        ],
      },
      {
        subtitle: "4.2 — Vestígios Digitais: Ecossistema Windows",
        icon: "Monitor",
        ecosystem: "windows",
        artifacts: [
          {
            name: "Windows Registry",
            desc: "Base de dados hierárquica central. Permite rastrear dispositivos USB conectados no passado, softwares instalados e redes acessadas.",
            forensic: "HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\USBSTOR",
            icon: "Database",
          },
          {
            name: "Event Viewer (.evtx)",
            desc: "Registra logins bem-sucedidos ou fracassados, limpeza de logs e instalações de serviços em arquivos estruturados.",
            forensic: "Security.evtx — Event IDs 4624 (login), 4688 (processo criado)",
            icon: "FileText",
          },
          {
            name: "Prefetch Files",
            desc: "Acceleram a inicialização de softwares. Registram nome do executável, quantidade de execuções, última data/hora e arquivos carregados nos primeiros 10 segundos.",
            forensic: "C:\\Windows\\Prefetch\\*.pf — Ferramenta: WinPrefetchView",
            icon: "Zap",
          },
          {
            name: "NTFS — Master File Table (MFT)",
            desc: "Arquivos pequenos (<700 bytes) ficam armazenados diretamente no metadado da tabela (arquivos residentes), facilitando recuperação mesmo se deletados.",
            forensic: "$MFT — Ferramenta: MFTExplorer, Autopsy",
            icon: "Table",
          },
          {
            name: "Recycle Bin ($Recycle.Bin)",
            desc: "Armazena arquivos excluídos. Gera dois arquivos: $R (conteúdo) e $I (nome original, tamanho, data e hora da exclusão).",
            forensic: "C:\\$Recycle.Bin\\{SID}\\$I* — Ferramenta: Recycle Bin Forensics",
            icon: "Trash2",
          },
        ],
      },
      {
        subtitle: "4.2 — Vestígios Digitais: Linux & macOS",
        icon: "Terminal",
        ecosystems: [
          {
            os: "Linux",
            color: "yellow",
            artifacts: [
              {
                name: "Syslog / Journald",
                desc: "Centralização de mensagens de log do sistema. Syslog grava texto plano em /var/log/; journald usa formato binário indexado.",
                path: "/var/log/syslog | journalctl",
              },
              {
                name: ".bash_history",
                desc: "Arquivo oculto no diretório de cada usuário que armazena os comandos digitados na linha de comando.",
                path: "~/.bash_history",
              },
              {
                name: "auth.log / secure",
                desc: "Registra tentativas de acesso via SSH, trocas de senha e uso do comando sudo.",
                path: "/var/log/auth.log (Debian) | /var/log/secure (RedHat)",
              },
              {
                name: "Ext4 — Inodes e Journaling",
                desc: "O journal registra transações antes da gravação no disco — excelente fonte para recuperar metadados de arquivos recentemente modificados.",
                path: "istat, icat (The Sleuth Kit) | debugfs",
              },
            ],
          },
          {
            os: "macOS",
            color: "purple",
            artifacts: [
              {
                name: "Unified Logs",
                desc: "Mecanismo centralizado de alta performance em formato binário proprietário (.tracev3), exigindo ferramentas específicas para leitura.",
                path: "log show | /var/db/diagnostics/",
              },
              {
                name: "APFS — Apple File System",
                desc: "Sistema de arquivos moderno com criptografia nativa e Snapshots — permite visualizar o estado exato dos arquivos em um ponto anterior no tempo.",
                path: "diskutil apfs listSnapshots | Ferramenta: Apple Configurator",
              },
              {
                name: "Spotlight Metadata",
                desc: "O indexador de buscas cria metadados ricos sobre interações do usuário com arquivos, registrando quando um documento foi aberto, visualizado ou transferido.",
                path: "mdls <arquivo> | /private/var/folders/",
              },
            ],
          },
        ],
      },
      {
        subtitle: "4.3 — Evolução das Técnicas Forenses",
        icon: "TrendingUp",
        techniques: [
          {
            name: "Dead Analysis (Análise Estática)",
            desc: "Perícia tradicional de disco com o sistema desligado. Garante preservação absoluta do estado físico dos dados.",
            pros: ["Dados estáticos e inalterados", "Sem risco de sobrescrever evidências"],
            cons: ["Falha com criptografia total de disco ativa", "Perde dados voláteis (RAM)"],
            tools: ["EnCase", "FTK", "Autopsy", "dd/dcfldd"],
            color: "blue",
          },
          {
            name: "Live Analysis (Sistema Ativo)",
            desc: "Coleta realizada com o SO rodando. Crucial para servidores de produção ou sistemas criptografados.",
            pros: ["Captura dados em RAM", "Acessa sistemas criptografados desbloqueados"],
            cons: ["Modifica timestamps e metadados", "Maior risco de contaminação"],
            tools: ["WinPmem", "LiME", "DumpIt", "Belkasoft RAM Capturer"],
            color: "orange",
          },
          {
            name: "Memory Forensics",
            desc: "Extração e análise estruturada da RAM (dump). Técnica mais eficaz contra malwares residentes em memória.",
            pros: ["Detecta malwares fileless", "Recupera credenciais e chaves de criptografia"],
            cons: ["Dados voláteis — perdidos ao desligar", "Análise técnica avançada"],
            tools: ["Volatility", "Rekall", "MemProcFS"],
            color: "purple",
          },
          {
            name: "DFIR — Análise Comportamental",
            desc: "Fusão da Computação Forense com Resposta a Incidentes. Foco na reconstrução do comportamento da ameaça dentro do SO.",
            pros: ["Visão completa do incidente", "Integração com EDR/XDR"],
            cons: ["Requer telemetria contínua", "Alto volume de dados a correlacionar"],
            tools: ["Velociraptor", "GRR", "KAPE", "Carbon Black"],
            color: "green",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    type: "chapter",
    chapterNum: "Capítulo 5",
    title: "Cenário Atual da Computação Forense",
    icon: "TrendingUp",
    color: "orange",
    slides: [
      {
        subtitle: "5.1 — Desafios Contemporâneos",
        icon: "AlertOctagon",
        challenges: [
          {
            icon: "Lock",
            title: "Criptografia Total de Disco e de Fluxo",
            desc: "BitLocker, LUKS e FileVault tornaram a Dead Analysis inviável sem a senha. TLS 1.3 e criptografia E2E em apps de mensageria forçam a perícia nos endpoints ativos.",
            color: "red",
          },
          {
            icon: "Ghost",
            title: "Técnicas Anti-Forense",
            desc: "Timestomping (falsificação de timestamps), fragmentação intencional de dados, sistemas de arquivos em RAM efêmeros e esteganografia para ocultar arquivos em mídias legítimas.",
            color: "purple",
          },
          {
            icon: "Package",
            title: "Contêineres e Microserviços",
            desc: "Docker e Kubernetes criam ambientes efêmeros. Quando um contêiner comprometido é reiniciado, toda camada de escrita e logs locais são destruídos instantaneamente.",
            color: "blue",
          },
          {
            icon: "Cloud",
            title: "Ambientes em Nuvem e Híbridos",
            desc: "Dados distribuídos entre servidores locais, AWS/Azure/GCP e SaaS. Desafios de Jurisdição Internacional e Multilocação (o perito não pode espelhar hardware de servidor na nuvem).",
            color: "cyan",
          },
          {
            icon: "Database",
            title: "Volume Massivo de Dados (Big Data Forensics)",
            desc: "Apreensões envolvem múltiplos discos de terabytes e smartphones de alta capacidade. Indexação manual consome semanas, exigindo novas abordagens de triagem rápida (triage).",
            color: "yellow",
          },
        ],
      },
      {
        subtitle: "5.2 — Automação e IA na Investigação",
        icon: "Bot",
        aitools: [
          {
            icon: "Brain",
            title: "Machine Learning na Detecção de Anomalias",
            desc: "Algoritmos varrem sistemas de arquivos e dumps de memória em busca de padrões anômalos. Incluem detecção de imagens ilícitas por redes neurais e identificação de binários maliciosos por fuzzy hashing.",
          },
          {
            icon: "BarChart",
            title: "SIEM + UEBA",
            desc: "SIEM agrega e correlaciona logs de múltiplos SOs em tempo real. UEBA aplica IA para analisar comportamento dos usuários — alerta quando uma credencial legítima acessa arquivos confidenciais em horários anômalos.",
          },
          {
            icon: "Clock",
            title: "Super Timelines Automatizadas",
            desc: "Ferramentas processam centenas de fontes de logs simultaneamente, gerando Super Timelines. A IA filtra ruídos do sistema, destacando os eventos cronológicos críticos antes e depois do incidente.",
          },
          {
            icon: "MessageSquare",
            title: "IA Generativa na Investigação",
            desc: "LLMs especializados auxiliam: tradução e análise de scripts maliciosos em PowerShell/Linux, consulta de documentação técnica de artefatos obscuros e suporte na redação e padronização de laudos periciais.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    type: "chapter",
    chapterNum: "Capítulo 6",
    title: "Perspectivas Futuras da Computação Forense",
    icon: "Telescope",
    color: "violet",
    slides: [
      {
        subtitle: "6.1 — Tendências Tecnológicas Disruptivas",
        icon: "Rocket",
        future: [
          {
            icon: "Atom",
            title: "Computação Quântica",
            desc: "O Algoritmo de Shor tem capacidade de quebrar RSA e ECC. Isso invalidará assinaturas digitais atuais e forçará migração para a Criptografia Pós-Quântica (PQC) baseada em reticulados.",
            impact: "Alto — invalida toda a criptografia assimétrica atual",
            urgency: "critical",
          },
          {
            icon: "Wifi",
            title: "Edge Computing (Computação de Borda)",
            desc: "A evidência deixa de estar em Data Centers centralizados. O perito precisará isolar e extrair dados de nós de borda pulverizados, gateways locais e dispositivos inteligentes em tempo real.",
            impact: "Médio — fragmentação geográfica das evidências",
            urgency: "medium",
          },
          {
            icon: "Radio",
            title: "IoT Forense Avançada",
            desc: "Expansão da IoT para infraestruturas críticas. A cena do crime incluirá dados de sensores ambientais, assistentes de voz e wearables.",
            impact: "Crescente — novos tipos de evidência digital",
            urgency: "medium",
          },
          {
            icon: "Car",
            title: "Forense em Veículos Autônomos",
            desc: "Carros são datacenters sobre rodas. A perícia investigará telemetria LIDAR, GPS, logs de frenagem autônoma e redes veiculares (V2X) para reconstruir acidentes ou ataques cibernéticos.",
            impact: "Emergente — nova especialidade pericial",
            urgency: "low",
          },
          {
            icon: "Globe",
            title: "Metaverso e Realidade Estendida (XR)",
            desc: "Novos crimes: fraudes financeiras digitais, roubo de identidade virtual, assédio em 3D. Coleta de logs de avatares, transações de ativos virtuais e dados sensoriais de headsets VR.",
            impact: "Emergente — fronteiras legais ainda indefinidas",
            urgency: "low",
          },
        ],
      },
      {
        subtitle: "6.2 & 6.3 — O Futuro dos SOs e da Perícia Digital",
        icon: "Sparkles",
        futureOS: [
          {
            icon: "GitBranch",
            title: "SOs Descentralizados",
            desc: "Baseados em redes P2P ou ledger distribuído. O núcleo do sistema não reside em uma única máquina, mas distribuído criptograficamente.",
          },
          {
            icon: "Zap",
            title: "Ambientes Efêmeros",
            desc: "SOs projetados para rodar na RAM por segundos, executar uma tarefa e se autodestruírem sem deixar rastro em armazenamento persistente.",
          },
          {
            icon: "Cloud",
            title: "Serverless (FaaS)",
            desc: "Não há SO tradicional para acessar via SSH. A investigação depende exclusivamente de APIs e logs fornecidos pelo cloud provider.",
          },
          {
            icon: "Eye",
            title: "Ambient Intelligence",
            desc: "SO opera de forma ubíqua via voz e gestos. Elimina conceitos tradicionais de arquivos, pastas e credenciais digitadas.",
          },
        ],
        futureForensics: [
          {
            icon: "Bot",
            title: "Perícia Totalmente Orientada por IA",
            desc: "O perito humano assumirá papel de auditor e validador legal, enquanto agentes autônomos de IA realizarão triagem, correlação de logs e geração de relatórios técnicos em minutos.",
          },
          {
            icon: "Activity",
            title: "Forense Contínua e em Tempo Real",
            desc: "O conceito de 'apreender o computador' será substituído pela coleta contínua de telemetrias. O estado do SO será preservado automaticamente no exato milissegundo da anomalia.",
          },
          {
            icon: "Link",
            title: "Cadeia de Custódia em Blockchain",
            desc: "Hashes de integridade, metadados de coleta e histórico de acesso serão registrados de forma imutável e descentralizada em rede Blockchain pública ou governamental.",
          },
          {
            icon: "Shield",
            title: "Resposta Autônoma a Incidentes",
            desc: "SOs que, ao detectar invasão, isolam o processo malicioso em sandbox forense na RAM, geram imagem forense automaticamente e notificam autoridades legais sem intervenção humana.",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    type: "chapter",
    chapterNum: "Capítulo 7",
    title: "Encerramento Conceitual",
    icon: "Flag",
    color: "green",
    slides: [
      {
        subtitle: "7.1 — Síntese da Trilha de Aprendizagem",
        icon: "CheckCircle",
        pillars: [
          {
            num: "01",
            title: "Base Estrutural",
            desc: "A Arquitetura de Von Neumann (1945) ainda governa a lógica de processamento de todo sistema operacional investigado hoje.",
            icon: "Cpu",
            color: "blue",
          },
          {
            num: "02",
            title: "O Rastro Inevitável",
            desc: "O Princípio de Locard validado no ambiente lógico: qualquer interação com um SO — por usuário, atacante ou processo — gera uma modificação de estado e um vestígio digital.",
            icon: "Footprints",
            color: "purple",
          },
          {
            num: "03",
            title: "A Rigidez Legal",
            desc: "A técnica mais avançada não possui valor jurídico sem respeitar os critérios de admissibilidade da prova (Padrão Daubert) e os ritos rigorosos da Cadeia de Custódia.",
            icon: "Scale",
            color: "yellow",
          },
          {
            num: "04",
            title: "A Mudança de Paradigma",
            desc: "Transição da análise estática pós-morte (Dead Analysis) para a resposta a incidentes, forense em sistemas vivos, ambientes de nuvem e memória volátil.",
            icon: "ArrowRight",
            color: "cyan",
          },
        ],
      },
      {
        subtitle: "7.2 — Reflexão Final",
        icon: "Lightbulb",
        reflection: true,
        quote:
          "O perito digital moderno não pode ser apenas um operador de ferramentas automatizadas (button-pusher). Os crimes modernos envolvem ocultação avançada, criptografia e volatilidade que exigem o conhecimento profundo de como o kernel do SO gerencia cada dado.",
        author: "Prof. Me. Maximiano Eduardo Pereira",
        keyMessage:
          "A Computação Forense é uma ciência adaptativa e simbiótica ao desenvolvimento tecnológico. O profissional que domina os fundamentos históricos e técnicos é o único capaz de fundamentar laudos inatacáveis em qualquer ambiente — presente ou futuro.",
        bibliography: [
          "Amorim, C. (2019). Computação Forense.",
          "Casey, E. (2011). Digital Evidence and Computer Crime.",
          "Mandia, K. (2014). Incident Response & Computer Forensics.",
          "Nelson, B. (2017). Guide to Computer Forensics and Investigations.",
        ],
      },
    ],
  },
  {
    id: 9,
    type: "quiz",
    title: "Banco de Exercícios",
    subtitle: "Módulo 1 — Computação Forense em Sistemas Operacionais",
  },
];
