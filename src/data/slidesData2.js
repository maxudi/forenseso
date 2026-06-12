export const chapters = [
  {
    id: 0,
    type: "cover",
    title: "Computação Forense em Sistemas Operacionais",
    subtitle: "Fundamentos de Forense em SO: Estruturas de Diretórios e Arquivos em Windows e Linux",
    instructor: "Prof. Me. Maximiano Eduardo Pereira",
    institution: "UNCISAL — Moodle (ced.uncisal.edu.br)",
    module: "Módulo 2",
    note: "Material desenvolvido com suporte de IA Generativa (Gemini/Google) sob planejamento e estruturação metodológica do docente responsável.",
  },
  {
    id: 1,
    type: "intro",
    chapterNum: "Apresentação",
    title: "Bem-vindos ao Módulo 2",
    icon: "FileSearch",
    color: "green",
    content: `Neste módulo entraremos na anatomia interna dos Sistemas Operacionais. O foco deixa de ser a interface gráfica e passa a ser a engenharia de baixo nível que gerencia o hardware. Estudaremos a arquitetura dos diretórios, a matemática de alocação de espaço em disco e os resíduos microscópicos deixados por arquivos nos ecossistemas Windows e Linux. Compreender os kernels e as tabelas indexadoras (MFT e Inodes) dará a base científica para identificar fraudes, recuperar dados apagados e decifrar técnicas anti-forenses.`,
    topics: [
      { icon: "FileText", text: "Conceito de arquivo e metadados sob a ótica forense" },
      { icon: "GitBranch", text: "Diretórios, árvores e sistemas de arquivos (FAT, NTFS, EXT4)" },
      { icon: "Layers", text: "Filosofias de design: Linux (FHS) vs. Windows (NT)" },
      { icon: "HardDrive", text: "Engenharia de alocação e Slack Space" },
      { icon: "Search", text: "Artefatos forenses nativos e metadados MACB" },
    ],
  },
  {
    id: 2,
    type: "chapter",
    chapterNum: "Capítulo 1",
    title: "Estruturas de Diretórios e Arquivos",
    icon: "FileSearch",
    color: "green",
    slides: [
      {
        subtitle: "1.1 — O Conceito de Arquivo sob a Ótica Forense",
        icon: "FileText",
        content: [
          {
            heading: "Arquivo como Stream de Bytes",
            text: "Fisicamente, um arquivo é apenas um stream (fluxo) de bytes — uma sequência não-estruturada de dados binários. Para o controlador de armazenamento (HDD ou SSD), não há barreiras conceituais. É o SO que dá sentido a esse fluxo por meio de metadados estruturados.",
            icon: "Cpu",
          },
          {
            heading: "Tamanho Lógico vs. Tamanho Físico",
            text: "O tamanho lógico representa o tamanho real dos dados. O tamanho físico reflete o espaço efetivamente alocado em disco. Essa diferença é a gênese do Slack Space — uma área formalmente alocada mas subutilizada que funciona como repositório involuntário de evidências.",
            icon: "Scale",
            highlight: true,
          },
          {
            heading: "Metadados e Identificadores",
            text: "Todo arquivo carrega: ID do Dono (Owner Identity), IDs de Grupos, Matrizes de Permissão (ACLs no Windows / bits POSIX no Linux), Carimbos de Tempo — Timestamps (criação, modificação, acesso) e Metadados de Segurança (criptografia, integridade, privilégios).",
            icon: "Settings",
          },
          {
            heading: "Inconsistências como Vestígios",
            text: "O conteúdo bruto de um arquivo pode ser adulterado, mas as inconsistências lógicas entre o stream de bytes e os metadados registrados pelo SO são os primeiros indícios de atividade fraudulenta. O perito persegue exatamente essas contradições.",
            icon: "AlertTriangle",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "1.2 — O Conceito de Diretório e a Arquitetura em Árvore",
        icon: "GitBranch",
        content: [
          {
            heading: "Diretório como Tabela de Tradução",
            text: "O diretório é uma estrutura de dados do sistema que mapeia o nome nominal de um arquivo (legível por humanos) à sua localização física real no meio de armazenamento, agrupando também seus atributos lógicos.",
            icon: "Network",
          },
          {
            heading: "Estrutura de Diretórios em Árvore",
            text: "Os SOs modernos adotam a Tree-Structured Directory. O Diretório Raiz (MFD) é o ponto de partida absoluto; Subdiretórios ramificam-se como contêineres lógicos; e os Arquivos-Folha são os dados finais que não podem conter subdiretórios.",
            icon: "Layers3",
          },
          {
            heading: "Caminho Absoluto como Evidência",
            text: "O perito analisa o Caminho Absoluto (Absolute Path) para estabelecer nexo de causalidade. Um executável crítico fora de sua pasta padrão — como um utilitário administrativo dentro de uma pasta temporária de usuário comum — é forte indicador de comprometimento ou persistência maliciosa.",
            icon: "Crosshair",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "1.3 — Sistemas de Arquivos: A Infraestrutura Lógica do Disco",
        icon: "Database",
        generations: [
          {
            era: "FAT16",
            name: "File Allocation Table 16-bit",
            desc: "Sistema legado limitado a partições de no máximo 2 GB. Totalmente sem permissões de segurança a nível de arquivo — vulnerável à corrupção por falhas de energia.",
            forensic: "Sem ACLs, sem journaling. Recuperação depende exclusivamente de file carving por assinaturas.",
            color: "gray",
          },
          {
            era: "FAT32",
            name: "Extended FAT",
            desc: "Expansão do FAT16. Suporta volumes até 2 TB e arquivos de até 4 GB. Padrão de alta compatibilidade para mídias removíveis.",
            forensic: "Ainda deficiente em auditoria avançada e controle de acessos por usuário.",
            color: "blue",
          },
          {
            era: "NTFS",
            name: "New Technology File System",
            desc: "Padrão absoluto do Windows moderno. Baseado em Árvore-B balanceada. Oferece criptografia nativa (EFS), ACLs granulares, compressão e tolerância a falhas.",
            forensic: "Riquíssimo em artefatos: MFT, $Bitmap, Prefetch, Registry, Event Logs (.evtx).",
            color: "cyan",
          },
          {
            era: "EXT4",
            name: "Extended File System 4",
            desc: "Padrão Linux moderno. Organizado em torno de Inodes com tecnologia de Journaling — registra intenções de modificação antes de executá-las.",
            forensic: "Journal = caixa-preta forense: atacante apaga logs em /var/log/, perito extrai do journal.",
            color: "green",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    type: "chapter",
    chapterNum: "Capítulo 2",
    title: "Arquitetura de Diretórios e Filosofias de Design",
    icon: "Layers",
    color: "purple",
    slides: [
      {
        subtitle: "2.1 — Filosofia Linux: 'Tudo é um Arquivo' (FHS)",
        icon: "Terminal",
        pillars: [
          {
            icon: "Shield",
            title: "/bin/ e /sbin/",
            desc: "Executáveis essenciais do SO e ferramentas de administração do root. Peritos inspecionam se binários nativos foram substituídos por versões trojanizadas — técnica de implantação de Rootkits de modo usuário.",
          },
          {
            icon: "Settings",
            title: "/etc/",
            desc: "Repositório centralizado de configuração. Vitais para perícia: /etc/passwd (contas e UIDs) e /etc/shadow (hashes das senhas — alvo primário de ataques de força bruta e exfiltração de credenciais).",
          },
          {
            icon: "Users",
            title: "/home/ e /root/",
            desc: "/home/ concentra perfis de usuários comuns, documentos e .bash_history. /root/ é o perfil do superusuário — evidências aqui têm impacto crítico em investigações de intrusão e escalada de privilégios.",
          },
          {
            icon: "HardDrive",
            title: "/dev/",
            desc: "Arquivo de dispositivos: /dev/sda = primeiro disco rígido físico. O perito utiliza este diretório em Live Forensics para extração bit-a-bit com o utilitário dd sem sair do Linux.",
          },
          {
            icon: "Trash2",
            title: "/tmp/ e /var/tmp/",
            desc: "Permissão universal de escrita com Sticky Bit. Foco Forense: alvos primários de atacantes para descompactar scripts, compilar exploits e ocultar malwares em servidores comprometidos.",
          },
          {
            icon: "Activity",
            title: "/proc/",
            desc: "Sistema de arquivos virtual na RAM, gerenciado em tempo real pelo kernel. /proc/[PID]/exe permite extrair o binário exato rodando em memória — mesmo se o malware foi deletado do disco após execução.",
          },
        ],
      },
      {
        subtitle: "2.2 — Filosofia Windows: Arquitetura NT e Registro",
        icon: "Monitor",
        content: [
          {
            heading: "Drives com Letras de Unidade",
            text: "O Windows rejeita a raiz única do Unix. Abstrai o armazenamento em Drives com letras (C:, D:, E:). Cada partição ou mídia externa gera uma nova raiz hierárquica independente — multiplicando os pontos de coleta de evidências.",
            icon: "HardDrive",
          },
          {
            heading: "C:\\Windows\\ (%SystemRoot%)",
            text: "Abriga o núcleo do SO, drivers e DLLs. Contém System32\\config\\ (colmeias binárias do Registro) e a pasta Prefetch\\ (evidências de execução de programas). Alterações ou executáveis inesperados aqui indicam infecção.",
            icon: "Shield",
            highlight: true,
          },
          {
            heading: "C:\\Users\\ (%UserProfile%)",
            text: "Centraliza perfis e dados privados de todos os usuários. Cada conta possui AppData, documentos, logs de navegação e o arquivo binário oculto NTUSER.DAT — que registra o histórico individualizado de interações do investigado.",
            icon: "Users",
          },
          {
            heading: "Windows Registry — O Banco Central",
            text: "Diferente do Linux, o Windows centraliza toda a inteligência do sistema em um gigantesco banco de dados binário hierárquico: o Registro (Hives). Guarda políticas de segurança, histórico de hardware, chaves de persistência de malwares e comportamento do usuário.",
            icon: "Database",
            highlight: true,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: "chapter",
    chapterNum: "Capítulo 3",
    title: "Engenharia de Alocação de Espaço",
    icon: "HardDrive",
    color: "blue",
    slides: [
      {
        subtitle: "3.1 — Métodos de Alocação em Disco e Estruturas de Índices",
        icon: "Layers",
        techniques: [
          {
            name: "Alocação Contígua",
            desc: "O arquivo é gravado em uma sequência linear e ininterrupta de blocos lógicos (Clusters/Blocos de ~4096 bytes). Um bloco imediatamente atrás do outro.",
            pros: ["Altíssima velocidade de leitura sequencial", "Simplicidade de implementação"],
            cons: ["Gera Fragmentação Externa — buracos entre arquivos remanescentes", "Novos arquivos maiores podem não encontrar espaço contíguo disponível"],
            tools: [],
            color: "gray",
          },
          {
            name: "Alocação Encadeada (Ligada)",
            desc: "O arquivo é fragmentado em extents. Cada bloco contém os dados e um ponteiro para o próximo bloco da cadeia. Elimina fragmentação externa.",
            pros: ["Elimina fragmentação externa", "Usa qualquer bloco livre disponível no disco"],
            cons: ["Acesso estritamente sequencial (bloco 10 exige ler ponteiros 1 a 9)", "Corrupção de um ponteiro intermediário torna o restante do arquivo irrecuperável"],
            tools: [],
            color: "orange",
          },
          {
            name: "Alocação Indexada — I-nodes e MFT",
            desc: "O SO mantém uma estrutura de índice centralizada. Linux (Ext4): I-node com ponteiros diretos e indiretos. Windows (NTFS): entrada na MFT com Data Runs mapeando os clusters alocados.",
            pros: ["Cenário ideal para forense: índice sobrevive à exclusão lógica", "Arquivo deletado pode ser reconstruído enquanto o I-node/entrada MFT existir na tabela"],
            cons: ["Maior overhead de metadados por arquivo", "Exige tabelas de índice persistentes em área protegida"],
            tools: ["MFTExplorer", "istat / icat (Sleuth Kit)", "Autopsy"],
            color: "cyan",
          },
        ],
      },
      {
        subtitle: "3.2 — Fragmentação Interna: File Slack e RAM Slack",
        icon: "BarChart",
        content: [
          {
            heading: "A Gênese do Slack Space",
            text: "O SO opera com blocos de tamanho fixo (ex: 4096 bytes). Um arquivo de 5700 bytes exige ⌈5700/4096⌉ = 2 blocos → 8192 bytes alocados. Os 2492 bytes restantes (8192 − 5700) constituem o Slack Space — área formalmente alocada mas não utilizada pelos dados do arquivo.",
            icon: "Calculator",
            highlight: true,
          },
          {
            heading: "RAM Slack (Folga de RAM)",
            text: "Do final dos dados até o fim do setor físico de 512 bytes. Em SOs legados, esse espaço era preenchido com dados brutos da memória RAM ativa no momento da gravação. Pode conter: fragmentos de senhas, chaves criptográficas, URLs e trechos de chat presentes na RAM naquele milissegundo.",
            icon: "MemoryStick",
          },
          {
            heading: "Drive Slack / File Slack (Folga de Disco)",
            text: "Setores alocados no mesmo cluster que ficaram totalmente vazios. O SO não os limpa — apenas os ignora. Se pertenceram a um arquivo anteriormente deletado, os dados do arquivo antigo permanecem intactos e protegidos dentro do File Slack do novo arquivo.",
            icon: "HardDrive",
          },
          {
            heading: "Ocultação Anti-Forense no Slack Space",
            text: "Hackers avançados injetam malwares e payloads diretamente no Slack Space de arquivos legítimos. Antivírus e buscas textuais varrem apenas o tamanho lógico — ignoram a área de folga. O perito usa ferramentas de baixo nível que analisam o cluster físico na sua totalidade.",
            icon: "Ghost",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "3.3 & 3.4 — Espaço Livre, Espaço Não Alocado e File Carving",
        icon: "Search",
        content: [
          {
            heading: "Mapas de Bits (Bitmaps)",
            text: "Cada bloco/cluster do disco é representado por um único bit: 0 = livre, 1 = alocado. Técnica utilizada no NTFS via arquivo de sistema $Bitmap e no Ext4 do Linux. O $Bitmap é o mapa do espaço não alocado — território de evidências ocultas.",
            icon: "Table",
          },
          {
            heading: "Listas Encadeadas de Blocos Livres",
            text: "Blocos vazios conectados por ponteiros lógicos. O primeiro bloco livre contém o endereço do segundo, e assim sucessivamente. Economiza RAM em discos muito vazios, mas degrada em performance à medida que o disco enche.",
            icon: "Link",
          },
          {
            heading: "A Verdade Forense sobre a Exclusão",
            text: "Ao deletar um arquivo, o SO apenas: (1) marca o ponteiro no índice (MFT/Inode) como excluído e (2) altera o bit no $Bitmap de 1 para 0. Os dados originais continuam fisicamente no disco como 'dados fantasmas' no Espaço Não Alocado.",
            icon: "Ghost",
            highlight: true,
          },
          {
            heading: "File Carving — A Resposta Forense",
            text: "O perito usa ferramentas que ignoram o sistema de arquivos e varrem o espaço não alocado em busca de Magic Numbers — assinaturas hexadecimais de header/footer. JPEG: FF D8 FF (início) → FF D9 (fim). Dados permanecem recuperáveis até a Sobrescrita Real.",
            icon: "FileSearch",
            highlight: true,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    type: "chapter",
    chapterNum: "Capítulo 4",
    title: "Artefatos Forenses de Alto Nível",
    icon: "Crosshair",
    color: "orange",
    slides: [
      {
        subtitle: "4.1 — Artefatos Nativos do Windows (Parte I)",
        icon: "Monitor",
        content: [
          {
            heading: "MFT — Arquivos Residentes",
            text: "Arquivos menores que ~700 bytes ficam armazenados diretamente dentro do registro de 1024 bytes da MFT (Arquivos Residentes). Se deletados, os dados permanecem protegidos na própria tabela. Chance de recuperação íntegra muito maior que em arquivos grandes — o registro da MFT é reutilizado muito mais devagar que blocos de dados livres.",
            icon: "Table",
            highlight: true,
          },
          {
            heading: "Windows Registry — Hives Críticas",
            text: "SYSTEM (histórico de USBs via chave USBSTOR — fabricante, modelo, número de série), SOFTWARE (softwares instalados + Run Keys de malwares), SAM (contas e hashes de senhas locais), NTUSER.DAT (RecentDocs, RunMRU, histórico individualizado do investigado).",
            icon: "Database",
          },
          {
            heading: "Prefetch Files (.pf)",
            text: "Evidência irrefutável de execução. Armazena: nome exato do executável, caminho absoluto de origem, Run Counter (quantas vezes rodou) e timestamps das últimas 8 execuções. Se o suspeito deletou um script após o ataque, o .pf prova que ele foi executado na máquina.",
            icon: "Zap",
            highlight: true,
          },
          {
            heading: "Recycle Bin ($Recycle.Bin)",
            text: "Ao enviar para a lixeira: $R (conteúdo real do arquivo) + $I (nome original, tamanho em bytes, data/hora exata de exclusão e caminho absoluto de origem). Esses dados sobrevivem mesmo após 'esvaziar a lixeira' no espaço não alocado.",
            icon: "Trash2",
          },
        ],
      },
      {
        subtitle: "4.1 — Artefatos Nativos do Windows (Parte II)",
        icon: "Shield",
        content: [
          {
            heading: "Event Viewer (.evtx) — Event IDs",
            text: "ID 4624: login bem-sucedido (local ou RDP — registra IP de origem). ID 4625: falha de autenticação — detecta ataques de força bruta em andamento. ID 1102: limpeza manual dos logs de auditoria — prova que o atacante tentou apagar seus rastros.",
            icon: "FileText",
            highlight: true,
          },
          {
            heading: "pagefile.sys — Memória Virtual",
            text: "Quando a RAM atinge capacidade máxima, o kernel descarrega processos em estado bruto para este arquivo. Retém: fragmentos de documentos não salvos, chaves criptográficas descriptografadas, senhas em texto claro e URLs de navegação anônima.",
            icon: "MemoryStick",
          },
          {
            heading: "hiberfil.sys — Dump de Hibernação",
            text: "Armazena o dump completo da RAM quando o computador hiberna. Equivale a um snapshot perfeito de toda a memória volátil: processos ativos, dados de sessão e credenciais em uso no momento exato da hibernação.",
            icon: "Eye",
            highlight: true,
          },
          {
            heading: "Ferramentas de Análise Windows",
            text: "MFTExplorer / Autopsy (MFT e $Bitmap), Registry Explorer / RegRipper (Hives), WinPrefetchView (Prefetch), Volatility (pagefile e hiberfil), Event Log Explorer (.evtx). O perito nunca depende de uma só ferramenta.",
            icon: "Wrench",
          },
        ],
      },
      {
        subtitle: "4.2 — Artefatos Nativos do Linux",
        icon: "Terminal",
        content: [
          {
            heading: "/var/log/auth.log e /var/log/secure",
            text: "Principal alvo de análise de intrusão. Registra todas as autenticações locais e remotas (SSH com IPs de origem), criações/modificações de contas, trocas de senhas e todos os comandos executados com elevação de privilégio via sudo.",
            icon: "Lock",
            highlight: true,
          },
          {
            heading: "/var/log/wtmp e /var/log/utmp",
            text: "Arquivos binários de histórico de conexões. utmp: usuários ativos em tempo real. wtmp: linha do tempo histórica de todos os logins e logouts (incluindo reboots). Lidos com comandos 'last' ou 'who' — não podem ser editados com editores de texto comuns.",
            icon: "Clock",
          },
          {
            heading: "/var/log/btmp — Tentativas Falhas",
            text: "Registra especificamente as tentativas de login que falharam. Vital para comprovar ataques de dicionário ou força bruta. Lido com 'lastb'. Um pico de entradas é assinatura clássica de ataque automatizado contra o servidor.",
            icon: "AlertTriangle",
          },
          {
            heading: ".bash_history — Limitações Forenses",
            text: "Artefato volátil e de fácil subversão: 'history -c' apaga tudo, redirecionamento para /dev/null elimina, deleção direta também. Não registra timestamps por padrão. O perito nunca confia cegamente — valida cruzando com auth.log e logs binários do journald.",
            icon: "Terminal",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "4.3 — Metadados Temporais MACB e Técnicas Anti-Forense",
        icon: "Clock",
        concepts: [
          {
            term: "M — Modification Time (mtime)",
            def: "Registra quando o conteúdo interno do arquivo sofreu sua última alteração — quando o usuário editou e salvou o arquivo.",
            example: "Ex: data em que um script malicioso teve seu payload modificado.",
            color: "blue",
          },
          {
            term: "A — Access Time (atime)",
            def: "Registra quando o arquivo foi lido ou acessado. Atenção: SOs modernos desabilitam ou atrasam o atime para economizar I/O em SSDs — exige cautela na interpretação.",
            example: "Ex: momento em que um executável foi carregado pelo loader do SO.",
            color: "green",
          },
          {
            term: "C — Change Time (ctime / MFT Modified)",
            def: "Linux: alteração dos metadados (chmod, chown, rename) — NÃO reflete edição de conteúdo. Windows: modificação do descritor do arquivo na tabela MFT.",
            example: "ctime posterior ao mtime de forma anômala = forte indício de Timestomping.",
            color: "yellow",
          },
          {
            term: "B — Birth Time (btime)",
            def: "Data e hora exata de criação original do arquivo dentro do volume lógico. Mais difícil de falsificar que os outros, mas não imune ao Timestomping.",
            example: "Ex: data de criação do script malicioso no disco do suspeito.",
            color: "cyan",
          },
          {
            term: "Timestomping — Anti-Forense",
            def: "Uso de APIs de baixo nível para falsificar deliberadamente os carimbos MACB na MFT ou nos Inodes. O malware implantado hoje recebe data de 2015 — mistura-se aos arquivos legítimos da instalação do SO.",
            example: "Detectado por cross-reference: Prefetch data vs. MFT timestamp vs. ctime.",
            color: "red",
          },
          {
            term: "Análise Cross-Reference — Contra-medida",
            def: "O perito gera uma Super Timeline cruzando logs de eventos, Prefetch, lixeira e Registry. Se o .pf mostra primeira execução na data do incidente mas a MFT diz 2015, ou ctime é posterior ao mtime de forma anômala, a fraude é desmascarada.",
            example: "Ferramentas: Plaso (log2timeline), Autopsy Timeline Analysis.",
            color: "purple",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    type: "chapter",
    chapterNum: "Capítulo 5",
    title: "Quadro Comparativo e Encerramento",
    icon: "Flag",
    color: "cyan",
    slides: [
      {
        subtitle: "5.1 — Quadro Comparativo: Windows vs. Linux",
        icon: "Table",
        concepts: [
          {
            term: "Arquitetura de Entrada",
            def: "Windows: Abstração por volumes lógicos com letras (C:\\, D:\\). Linux: Raiz única universal representada pela barra (/).",
            example: "No Windows, cada drive é uma raiz hierárquica independente — múltiplos pontos de coleta.",
            color: "blue",
          },
          {
            term: "Indexação de Baixo Nível",
            def: "Windows: MFT (Master File Table) com registros de 1024 bytes. Linux: Inodes (Nós de Índice) associados a blocos físicos.",
            example: "Ambos sobrevivem à exclusão lógica — chave da recuperação forense de arquivos deletados.",
            color: "purple",
          },
          {
            term: "Centralização de Configurações",
            def: "Windows: Banco de dados binário hierárquico — Registro (Hives: SAM, SYSTEM, SOFTWARE, NTUSER.DAT). Linux: Arquivos de texto plano distribuídos em /etc/.",
            example: "Registry sobrevive a reboots e concentra histórico de todo uso do sistema.",
            color: "yellow",
          },
          {
            term: "Artefato de Execução Recente",
            def: "Windows: Arquivos .pf no diretório %SystemRoot%\\Prefetch\\ — confiáveis e difíceis de apagar completamente. Linux: .bash_history — volátil e facilmente subvertível.",
            example: "Prefetch é evidência irrefutável; .bash_history requer validação cruzada.",
            color: "orange",
          },
          {
            term: "Mecanismo de Resiliência",
            def: "Windows: Transações de logs NTFS baseadas em Árvore-B. Linux: Journaling nativo do Ext4 (caixa-preta de transações de metadados).",
            example: "Journal do Linux = evidência de atividade mesmo após rm -rf em /var/log/.",
            color: "green",
          },
          {
            term: "Análise Ativa de Processos",
            def: "Windows: Estruturas internas do kernel capturadas via dump de RAM (pagefile/hiberfil). Linux: Diretório virtual e dinâmico /proc/ — acesso em tempo real ao estado do kernel.",
            example: "/proc/[PID]/exe recupera o binário malicioso em memória mesmo após deleção do disco.",
            color: "cyan",
          },
        ],
      },
      {
        subtitle: "5.2 — Reflexão Final",
        icon: "Lightbulb",
        reflection: true,
        quote: "Nenhuma evidência digital faz sentido de maneira isolada. Ela deve ser contextualizada dentro das regras arquiteturais, cronológicas e de alocação que governam o ecossistema afetado.",
        author: "Prof. Me. Maximiano Eduardo Pereira",
        keyMessage: "O domínio da engenharia de baixo nível — da estrutura de clusters ao comportamento da MFT e dos Inodes — é o que separa o operador de ferramentas automatizadas do verdadeiro especialista em forense de dados. Cada byte alocado, cada entrada no índice e cada carimbo de tempo conta uma história que o perito capacitado é o único habilitado a ler com precisão científica.",
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
    id: 7,
    type: "quiz",
    title: "Banco de Exercícios",
    subtitle: "Módulo 2 — Estruturas de Diretórios e Arquivos",
  },
];
