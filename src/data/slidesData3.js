export const chapters = [
  {
    id: 0,
    type: "cover",
    title: "Computacao Forense em Sistemas Operacionais",
    subtitle: "Artefatos do Windows: Registro, Prefetch, LNK e Reciclagem",
    instructor: "Prof. Me. Maximiano Eduardo Pereira",
    institution: "UNCISAL - Moodle (ced.uncisal.edu.br)",
    module: "Modulo 3",
    note: "Material desenvolvido com suporte de IA Generativa sob planejamento e estruturacao metodologica do docente responsavel.",
  },
  {
    id: 1,
    type: "intro",
    chapterNum: "Apresentacao",
    title: "Bem-vindos ao Modulo 3",
    icon: "Database",
    color: "orange",
    content:
      "Neste modulo vamos estudar artefatos digitais nativos do Windows para reconstruir eventos, confirmar acoes e sustentar analises tecnicas em investigacoes forenses.",
    topics: [
      { icon: "Database", text: "Registro do Windows" },
      { icon: "Zap", text: "Arquivos Prefetch" },
      { icon: "Link", text: "Arquivos de atalho (.lnk)" },
      { icon: "Trash2", text: "Reciclagem" },
      { icon: "GitBranch", text: "Correlacao entre artefatos" },
    ],
  },
  {
    id: 2,
    type: "chapter",
    chapterNum: "Capitulo 1",
    title: "Registro do Windows",
    icon: "Database",
    color: "orange",
    slides: [
      {
        subtitle: "Apresentacao e Objetivos",
        icon: "BookOpen",
        content: [
          {
            heading: "O que sao Artefatos Digitais?",
            text: "Sao dados gerados automaticamente pelo sistema operacional durante seu funcionamento e uso. Nao sao criados intencionalmente pelo usuario, mas registram as atividades realizadas.",
            icon: "FileSearch",
          },
          {
            heading: "Importancia na Computacao Forense",
            text: "Permitem reconstruir cronologias, identificar acoes, confirmar fatos e recuperar informacoes mesmo apos tentativas de exclusao ou alteracao. Sao provas essenciais em investigacoes.",
            icon: "Search",
            highlight: true,
          },
          {
            heading: "Artefatos estudados neste modulo",
            text: "Registro do Windows, Arquivos Prefetch, Arquivos de Atalho (.lnk) e Reciclagem.",
            icon: "BookCheck",
          },
          {
            heading: "Objetivo da aula",
            text: "Compreender funcao, estrutura, localizacao e informacoes uteis de cada artefato, alem de saber como extrai-los e analisa-los corretamente.",
            icon: "Crosshair",
          },
        ],
      },
      {
        subtitle: "1. Registro do Windows - Conceito e Estrutura",
        icon: "Database",
        content: [
          {
            heading: "O que e?",
            text: "Banco de dados hierarquico e centralizado que armazena configuracoes do sistema, hardware, programas e contas de usuarios. Funciona como cerebro de configuracoes do Windows.",
            icon: "Database",
          },
          {
            heading: "Como e organizado?",
            text: "Estrutura em camadas: Chave (pasta principal), Subchave (subpasta com agrupamento de dados) e Valor (informacao especifica com nome, tipo e conteudo).",
            icon: "Layers3",
          },
          {
            heading: "Principais Chaves Raiz",
            text: "HKLM (sistema), HKCU (usuario logado), HKU (todos os perfis) e HKCR (associacoes de tipos de arquivos).",
            icon: "Lock",
            highlight: true,
          },
          {
            heading: "Onde ficam os arquivos fisicos?",
            text: "Chamados de hives. Sistema: C:\\Windows\\System32\\config\\. Usuario: C:\\Users\\<Usuario>\\NTUSER.DAT.",
            icon: "HardDrive",
          },
        ],
      },
      {
        subtitle: "1. Registro do Windows - Uso Forense e Ferramentas",
        icon: "Wrench",
        content: [
          {
            heading: "Quais informacoes podemos obter?",
            text: "Programas instalados e datas, dispositivos externos conectados, contas de usuario e horarios, arquivos/pastas recentes e alteracoes de configuracao.",
            icon: "BarChart",
          },
          {
            heading: "Por que e relevante?",
            text: "Mesmo com alteracoes de configuracao ou desinstalacao de programas, vestigios costumam permanecer por um periodo. Isso permite verificar acoes ausentes em outras fontes.",
            icon: "Scale",
            highlight: true,
          },
          {
            heading: "Ferramentas de analise",
            text: "Regedit (visualizacao nativa), RegRipper (extracao automatizada), Registry Explorer (leitura de hives), Autopsy/FTK Imager (analise em copias de disco).",
            icon: "Wrench",
          },
          {
            heading: "Cuidados essenciais",
            text: "Nunca analise o Registro diretamente no sistema original. Trabalhe com copias para evitar alteracoes e preservar validade da prova.",
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
    title: "Prefetch e Arquivos LNK",
    icon: "Link",
    color: "cyan",
    slides: [
      {
        subtitle: "2. Arquivos Prefetch - Conceito e Estrutura",
        icon: "Zap",
        content: [
          {
            heading: "O que e?",
            text: "Mecanismo de otimizacao do Windows que armazena dados sobre programas executados para acelerar aberturas futuras. E criado automaticamente a cada execucao.",
            icon: "Zap",
          },
          {
            heading: "Localizacao e formato",
            text: "Caminho: C:\\Windows\\Prefetch\\. Nome: Programa.EXE-<CodigoHash>.pf. Disponivel desde Windows XP; em versoes de servidor pode estar desativado por padrao.",
            icon: "FileSearch",
          },
          {
            heading: "Informacoes armazenadas",
            text: "Nome e caminho do executavel, data/hora da primeira execucao, datas/horarios das ultimas execucoes e quantidade de vezes aberto.",
            icon: "Clock",
            highlight: true,
          },
          {
            heading: "Observacao importante",
            text: "Mesmo que o programa seja excluido, o .pf pode permanecer por longo periodo, ate que o sistema precise de espaco e recicle entradas.",
            icon: "Lightbulb",
          },
        ],
      },
      {
        subtitle: "2. Arquivos Prefetch - Uso Forense e Ferramentas",
        icon: "Search",
        content: [
          {
            heading: "Valor para a investigacao",
            text: "Ajuda a responder quais programas foram usados, quando foram abertos e com que frequencia. E um dos artefatos mais fortes para confirmar execucao.",
            icon: "Eye",
          },
          {
            heading: "O que ele revela?",
            text: "Ferramentas usadas para apagar vestigios ou acessar dados sensiveis podem deixar registro no Prefetch. Nao e facilmente alterado por usuario comum.",
            icon: "Search",
            highlight: true,
          },
          {
            heading: "Ferramentas de analise",
            text: "PECmd (extracao organizada), WinPrefetchView (interface simples) e Autopsy (integracao com analise de disco).",
            icon: "Wrench",
          },
          {
            heading: "Limitacoes",
            text: "Nem toda execucao aparece. O recurso pode estar desativado por configuracao, e por isso a analise deve ser cruzada com outros artefatos.",
            icon: "AlertTriangle",
          },
        ],
      },
      {
        subtitle: "3. Arquivos de Atalho (.lnk) - Conceito e Estrutura",
        icon: "Link",
        content: [
          {
            heading: "O que sao?",
            text: "Arquivos que funcionam como caminho curto para acessar rapidamente arquivos, pastas, programas ou unidades. Podem ser gerados automaticamente ou criados pelo usuario.",
            icon: "Link",
          },
          {
            heading: "Onde sao encontrados?",
            text: "Area de trabalho, Menu Iniciar, C:\\Users\\<Usuario>\\AppData\\Roaming\\Microsoft\\Windows\\Recent\\, pastas comuns e unidades externas.",
            icon: "Footprints",
          },
          {
            heading: "Dados armazenados",
            text: "Caminho completo e nome original, datas relevantes, numero de serie do disco de origem, tamanho do arquivo e parametros de execucao.",
            icon: "FileText",
            highlight: true,
          },
          {
            heading: "Caracteristica principal",
            text: "O atalho pode manter informacoes mesmo se o arquivo original for movido, renomeado, excluido ou acessado em outro computador.",
            icon: "HardDrive",
          },
        ],
      },
      {
        subtitle: "3. Arquivos de Atalho (.lnk) - Uso Forense e Ferramentas",
        icon: "Wrench",
        content: [
          {
            heading: "Relevancia para a investigacao",
            text: "Permite identificar quais arquivos foram abertos, quando e de onde vieram, incluindo acessos a documentos, dispositivos externos e recursos de rede.",
            icon: "FileSearch",
          },
          {
            heading: "Exemplo pratico",
            text: "Se um usuario exclui um arquivo importante, mas o atalho permanece, ainda e possivel inferir nome, local e horario de ultimo acesso.",
            icon: "Clock",
            highlight: true,
          },
          {
            heading: "Ferramentas de analise",
            text: "LECmd/LnkParser (extracao detalhada), ShellLinkViewer (visualizacao simples) e Autopsy (leitura automatica em imagem de disco).",
            icon: "Wrench",
          },
          {
            heading: "Vantagem",
            text: "Como muitos usuarios ignoram esse artefato, os arquivos .lnk frequentemente permanecem no ambiente e preservam vestigios valiosos.",
            icon: "Brain",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    type: "chapter",
    chapterNum: "Capitulo 3",
    title: "Reciclagem",
    icon: "Trash2",
    color: "green",
    slides: [
      {
        subtitle: "4. Reciclagem - Funcionamento e Estrutura",
        icon: "Trash2",
        content: [
          {
            heading: "Como funciona?",
            text: "Ao apagar, o arquivo normalmente nao some de imediato. Ele e movido para a Reciclagem, e o espaco e tratado como disponivel para gravacao futura.",
            icon: "Trash2",
          },
          {
            heading: "Localizacao por versao do Windows",
            text: "Windows XP: C:\\RECYCLER\\. Vista/7/8/10/11: C:\\$Recycle.Bin\\.",
            icon: "HardDrive",
          },
          {
            heading: "Estrutura nos sistemas atuais",
            text: "Cada exclusao gera dois arquivos: $Ixxxx (metadados com nome, caminho e data de exclusao) e $Rxxxx (conteudo real do arquivo).",
            icon: "FileText",
            highlight: true,
          },
          {
            heading: "Quando os dados somem?",
            text: "A remocao definitiva ocorre ao esvaziar a lixeira, atingir limite de espaco ou haver sobrescrita fisica por novos dados.",
            icon: "Clock",
          },
        ],
      },
      {
        subtitle: "4. Reciclagem - Uso Forense e Ferramentas",
        icon: "Search",
        content: [
          {
            heading: "O que podemos descobrir?",
            text: "Quais arquivos foram excluidos, data/hora da exclusao, caminho original e indicios do usuario associado a acao.",
            icon: "Search",
          },
          {
            heading: "Valor da prova",
            text: "Mesmo apos esvaziar a Reciclagem, dados podem continuar no disco ate sobrescrita. Isso permite recuperar itens que o usuario tentou ocultar.",
            icon: "Package",
            highlight: true,
          },
          {
            heading: "Ferramentas de analise",
            text: "RBCmd (metadados da Reciclagem), Recuva/PhotoRec (recuperacao de conteudo) e Autopsy (analise automatizada e relatorios).",
            icon: "Wrench",
          },
          {
            heading: "Cuidado na analise",
            text: "A recuperacao depende de o espaco nao ter sido reutilizado. Priorize aquisicao imediata e analise em copia confiavel.",
            icon: "AlertTriangle",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    type: "chapter",
    chapterNum: "Capitulo 4",
    title: "Resumo e Boas Praticas",
    icon: "CheckCircle",
    color: "purple",
    slides: [
      {
        subtitle: "Resumo Geral do Modulo",
        icon: "BookCheck",
        content: [
          {
            heading: "Registro do Windows",
            text: "Banco de dados de configuracoes. Revela instalacoes, dispositivos e acessos.",
            icon: "Database",
          },
          {
            heading: "Prefetch",
            text: "Arquivos de otimizacao que ajudam a confirmar quais programas foram executados e quando.",
            icon: "Zap",
          },
          {
            heading: "Arquivos .lnk",
            text: "Atalhos que preservam detalhes de arquivos acessados, inclusive apos exclusao do original.",
            icon: "Link",
          },
          {
            heading: "Reciclagem",
            text: "Armazenamento temporario de exclusoes, com potencial de recuperacao e analise de descarte.",
            icon: "Trash2",
            highlight: true,
          },
        ],
      },
      {
        subtitle: "Boas Praticas e Atividades Praticas",
        icon: "Microscope",
        content: [
          {
            heading: "Regras essenciais",
            text: "Sempre trabalhar com copias, nao alterar sistema original, documentar todos os passos e validar resultados com mais de uma ferramenta.",
            icon: "CheckCircle",
            highlight: true,
          },
          {
            heading: "Atividade 1",
            text: "Extrair e analisar o Registro usando RegRipper e Registry Explorer.",
            icon: "FileText",
          },
          {
            heading: "Atividade 2",
            text: "Analisar Prefetch e .lnk com PECmd e LECmd para montar linha do tempo tecnica.",
            icon: "Microscope",
          },
          {
            heading: "Atividade 3",
            text: "Verificar arquivos excluidos e recuperar dados com RBCmd e Autopsy.",
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
    subtitle: "Modulo 3 - Artefatos do Windows",
  },
];
