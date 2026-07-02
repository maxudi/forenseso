export const quizQuestions = [
  {
    id: 1,
    chapter: 1,
    question:
      "Qual e o principal beneficio de padronizar ferramentas forenses em um laboratorio?",
    options: [
      "Aumentar somente a velocidade operacional",
      "Evitar qualquer necessidade de documentacao",
      "Garantir confiabilidade, repetibilidade e defensabilidade da prova",
      "Substituir a cadeia de custodia por logs automaticos",
    ],
    correct: 2,
    feedback:
      "Padronizacao sustenta consistencia metodologica e facilita reproducao tecnica dos resultados em auditoria e contraditorio.",
  },
  {
    id: 2,
    chapter: 1,
    question:
      "Qual alternativa agrupa corretamente categorias de ferramentas forenses?",
    options: [
      "Somente antivirus e firewall",
      "Distribuicoes, aquisicao, analise de disco/memoria e ferramentas auxiliares",
      "Apenas navegadores e editores de texto",
      "Somente ferramentas comerciais",
    ],
    correct: 1,
    feedback:
      "O ecossistema forense combina ferramentas de coleta, processamento e analise especializada para diferentes tipos de evidencia.",
  },
  {
    id: 3,
    chapter: 1,
    question:
      "Kali Linux e relevante em pericia digital porque:",
    options: [
      "Nao suporta ferramentas open-source",
      "E exclusivo para redes sem fio",
      "Reune amplo conjunto de ferramentas de seguranca e forense",
      "Dispensa validacao de procedimento",
    ],
    correct: 2,
    feedback:
      "Kali e um ambiente consolidado para praticas de seguranca e forense, com diversas ferramentas prontas para uso.",
  },
  {
    id: 4,
    chapter: 1,
    question:
      "Qual ferramenta e mais associada a copia bit a bit em linha de comando?",
    options: ["dd/dcfldd", "Wireshark", "RegRipper", "Autopsy"],
    correct: 0,
    feedback:
      "dd e dcfldd sao classicos para aquisicao binaria, com uso cuidadoso para preservar integridade e destino apropriado.",
  },
  {
    id: 5,
    chapter: 2,
    question:
      "O Autopsy e melhor descrito como:",
    options: [
      "Sniffer de rede em tempo real",
      "Interface grafica do The Sleuth Kit para casos forenses",
      "Ferramenta exclusiva para memoria RAM",
      "Utilitario de criptografia de discos",
    ],
    correct: 1,
    feedback:
      "Autopsy integra recursos de analise de imagem, artefatos, timeline e relatorios em um fluxo orientado a caso.",
  },
  {
    id: 6,
    chapter: 2,
    question:
      "Qual etapa do fluxo do Autopsy ocorre logo apos criar o caso?",
    options: [
      "Gerar relatorio final",
      "Adicionar fonte de dados",
      "Exportar hash para tribunal",
      "Rodar plugins de memoria",
    ],
    correct: 1,
    feedback:
      "Apos criar o caso, a etapa natural e adicionar a evidencia (fonte de dados) para iniciar ingestao e processamento.",
  },
  {
    id: 7,
    chapter: 2,
    question:
      "No uso forense do Autopsy, o modo somente leitura e importante porque:",
    options: [
      "Acelera relatorios PDF",
      "Evita alteracao acidental da evidencia original",
      "Permite editar metadados para padronizacao",
      "Remove necessidade de hash",
    ],
    correct: 1,
    feedback:
      "Preservar a evidencia sem escrita e requisito basico para manter integridade e aceitacao tecnica da analise.",
  },
  {
    id: 8,
    chapter: 3,
    question:
      "Qual afirmacao sobre Volatility esta correta?",
    options: [
      "Serve apenas para Linux",
      "E focado em analise de memoria volatil com multiplos plugins",
      "Substitui integralmente analise de disco",
      "Nao exige correlacao com outras fontes",
    ],
    correct: 1,
    feedback:
      "Volatility e framework de memoria. Seus achados ganham forca quando correlacionados com artefatos de disco e contexto do caso.",
  },
  {
    id: 9,
    chapter: 3,
    question:
      "No contexto de memoria, qual plugin e comumente usado para conexoes de rede?",
    options: ["pslist", "netscan", "imageinfo", "filescan"],
    correct: 1,
    feedback:
      "Netscan auxilia no mapeamento de conexoes e portas com associacao a processos, fundamental para investigar comunicacao externa.",
  },
  {
    id: 10,
    chapter: 3,
    question:
      "Qual combinacao representa uma abordagem correta para analise com Volatility?",
    options: [
      "Ignorar hash e focar apenas em performance",
      "Identificar perfil, executar plugins e registrar resultados",
      "Executar comandos sem documentar parametros",
      "Concluir sem comparar com outras evidencias",
    ],
    correct: 1,
    feedback:
      "Fluxo tecnico minimo envolve identificacao do ambiente, execucao orientada de plugins e documentacao dos achados.",
  },
  {
    id: 11,
    chapter: 4,
    question:
      "Qual regra de ouro e coerente com boas praticas forenses neste modulo?",
    options: [
      "Usar evidencia original para acelerar testes",
      "Documentar comandos, usar copia e verificar hash",
      "Priorizar somente um tipo de artefato",
      "Desconsiderar diferencas entre ferramentas",
    ],
    correct: 1,
    feedback:
      "Reprodutibilidade e integridade dependem de documentacao, preservacao e validacao por meio de hash e correlacao tecnica.",
  },
  {
    id: 12,
    chapter: 4,
    question:
      "Por que cruzar dados de disco e memoria melhora a conclusao forense?",
    options: [
      "Porque elimina necessidade de timeline",
      "Porque reduz o volume de evidencia automaticamente",
      "Porque combina fontes independentes e fortalece nexo tecnico",
      "Porque evita uso de ferramentas diferentes",
    ],
    correct: 2,
    feedback:
      "Correlacao entre fontes independentes aumenta robustez da narrativa tecnica e reduz risco de interpretacao isolada.",
  },
];
