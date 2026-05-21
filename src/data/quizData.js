export const quizQuestions = [
  {
    id: 1,
    chapter: 1,
    question:
      "No contexto da Segunda Guerra Mundial, o desenvolvimento do computador Colossus pelo Reino Unido teve um papel estratégico crucial. Qual era o objetivo principal e específico dessa máquina digital eletrônica programável?",
    options: [
      "Calcular com precisão as tabelas de balística para a artilharia das forças aliadas.",
      "Decifrar mensagens estratégicas do exército alemão protegidas pela criptografia Lorenz.",
      "Armazenar em massa os dados de inteligência militar em fitas magnéticas e tambores.",
      "Executar sistemas operacionais multiusuário baseados na filosofia de terminais compartilhados.",
    ],
    correct: 1,
    feedback:
      "O Colossus foi projetado especificamente para quebrar o código das teleimpressoras Lorenz usadas pelo alto comando alemão, marcando o início da computação criptográfica aplicada à inteligência militar.",
  },
  {
    id: 2,
    chapter: 1,
    question:
      "A Arquitetura de Von Neumann, formalizada em 1945, introduziu um conceito revolucionário que serve de base para o funcionamento e para a investigação de sistemas computacionais até hoje. Que conceito é esse?",
    options: [
      "O processamento distribuído de dados em contêineres e nuvem.",
      "A execução de múltiplos sistemas operacionais por meio de hipervisores.",
      "O conceito de programa armazenado, onde dados e instruções compartilham a mesma memória.",
      "A separação física obrigatória entre a unidade lógica e a unidade de controle do processador.",
    ],
    correct: 2,
    feedback:
      "A grande inovação de Von Neumann foi permitir que as instruções do programa fossem tratadas e armazenadas na memória principal da mesma forma que os dados, definindo o comportamento de leitura e execução de código.",
  },
  {
    id: 3,
    chapter: 1,
    question:
      "Sob a ótica da computação forense, quais eram as principais características e limitações do ambiente de processamento centralizado dos Mainframes nas décadas de 1950 e 1960?",
    options: [
      "Acesso pulverizado por redes sem fio globais e logs criptografados nativos.",
      "Acesso físico e centralizado, com manipulação de dados dependente de permissões em um único núcleo de processamento.",
      "Uso de sistemas de arquivos efêmeros que se autodestruíam após o desligamento da máquina.",
      "Total ausência de mídias de armazenamento magnético, dependendo exclusivamente de memória RAM estática.",
    ],
    correct: 1,
    feedback:
      "Os mainframes concentravam toda a capacidade de armazenamento e processamento em um único local físico, limitando a atuação do perito clássico àquela infraestrutura isolada e centralizada.",
  },
  {
    id: 4,
    chapter: 2,
    question:
      "O Princípio de Troca de Locard é a espinha dorsal da criminalística tradicional. Como esse princípio se aplica perfeitamente ao contexto da Computação Forense em Sistemas Operacionais?",
    options: [
      "Postula que arquivos deletados no Windows são destruídos fisicamente de forma imediata.",
      "Garante que o perito nunca alterará nenhum metadado ao interagir com o sistema ativo do suspeito.",
      "Determina que qualquer interação de um agente ou processo com o sistema operacional gera modificações de estado e deixa um rastro lógico.",
      "Exige que a extração de provas seja feita exclusivamente em mídias de armazenamento mecânico.",
    ],
    correct: 2,
    feedback:
      "Assim como Locard defendia que um criminoso deixa vestígios físicos na cena do crime, no ecossistema digital qualquer comando, conexão ou clique altera de forma inevitável o estado do SO (gerando logs, chaves de registro ou modificando timestamps).",
  },
  {
    id: 5,
    chapter: 2,
    question:
      "No âmbito da criminalística, qual é a diferença conceitual exata entre os termos 'Vestígio' e 'Indício'?",
    options: [
      "O vestígio é uma prova validada pelo juiz, enquanto o indício é qualquer marca sem valor legal.",
      "Vestígio é o rastro bruto encontrado na cena do crime, enquanto o indício é o vestígio que, após análise pericial, demonstrou ter relação lógica com o fato investigado.",
      "Indício refere-se apenas a dados biológicos, enquanto vestígio aplica-se exclusivamente a metadados digitais.",
      "Não há diferença conceitual, sendo termos sinônimos utilizados de forma alternada no Código de Processo Penal.",
    ],
    correct: 1,
    feedback:
      "O vestígio é o elemento bruto (ex: um HD ou pendrive apreendido). Ele se transforma em indício apenas quando o perito o analisa e demonstra tecnicamente o seu vínculo causal com o delito.",
  },
  {
    id: 6,
    chapter: 2,
    question:
      "A Cadeia de Custódia tornou-se uma exigência jurídica e metodológica rigorosa nos tribunais modernos (como no Pacote Anticrime brasileiro). Qual é o seu principal objetivo?",
    options: [
      "Garantir a destruição automatizada de dados privados do suspeito após o encerramento do processo.",
      "Assegurar o registro cronológico, documentado e auditável que comprova que a evidência analisada em laboratório é exatamente a mesma coletada na cena do crime.",
      "Permitir que assistentes técnicos das partes modifiquem os hashes das imagens forenses em tempo real.",
      "Acelerar o julgamento por meio da eliminação da fase de quesitos técnicos e depoimentos de peritos.",
    ],
    correct: 1,
    feedback:
      "A cadeia de custódia protege a integridade e a autenticidade da prova digital, documentando detalhadamente quem a manuseou, desde a sua apreensão até o laudo final, blindando o processo contra alegações de nulidade.",
  },
  {
    id: 7,
    chapter: 3,
    question:
      "Na década de 1990, a Computação Forense consolidou a metodologia de análise estática conhecida como Dead Analysis (ou análise Post-Mortem). Qual era o procedimento técnico padrão e obrigatório dessa abordagem?",
    options: [
      "A execução de comandos de varredura diretamente no terminal do sistema operacional do suspeito enquanto ele navegava na internet.",
      "O desligamento do computador seguido da utilização obrigatória de bloqueadores de escrita de hardware para extração de uma cópia bit-a-bit (imagem forense).",
      "A extração contínua de dumps de memória RAM através de conexões via criptografia pós-quântica.",
      "A análise exclusiva de metadados pulverizados em servidores distribuídos de nuvem multilocatária.",
    ],
    correct: 1,
    feedback:
      "A análise post-mortem baseia-se em preservar o estado estático do disco rígido. O uso de write-blockers de hardware impede que o sistema de análise grave dados na mídia original durante o espelhamento.",
  },
  {
    id: 8,
    chapter: 3,
    question:
      "Por que o avanço tecnológico na década de 2010 impulsionou a necessidade técnica da Memory Forensics (Forense de Memória) e do uso de ferramentas como o Volatility?",
    options: [
      "Devido à obsolescência definitiva de todos os sistemas operacionais baseados em arquitetura de 64 bits.",
      "Porque os discos rígidos mecânicos foram totalmente substituídos por fitas magnéticas de alta volatilidade.",
      "Devido à proliferação de ataques fileless (que rodam apenas em RAM) e ao uso generalizado de criptografia total de disco por padrão.",
      "Porque os tribunais internacionais proibiram a apreensão física de qualquer tipo de armazenamento em disco rígido.",
    ],
    correct: 2,
    feedback:
      "Se o perito desliga um computador moderno com criptografia de disco ativa (como o BitLocker) sem a chave, o disco torna-se inacessível. Além disso, malwares avançados passaram a operar puramente em memória, tornando a extração da RAM indispensável.",
  },
  {
    id: 9,
    chapter: 3,
    question:
      "Em 1986, Clifford Stoll desvendou um caso complexo de espionagem digital internacional que culminou no livro 'The Cuckoo's Egg'. Qual foi o estopim técnico que deu origem a essa investigação forense pioneira?",
    options: [
      "Uma discrepância contábil de apenas $0,75 no faturamento do tempo de uso do mainframe de um laboratório.",
      "O sequestro total dos servidores militares americanos por meio de um ataque de Ransomware quântico.",
      "A infecção em massa de smart TVs e dispositivos IoT industriais dentro de uma usina nuclear.",
      "A falsificação em larga escala de assinaturas digitais baseadas em redes Blockchain privadas.",
    ],
    correct: 0,
    feedback:
      "Stoll iniciou a investigação por não ignorar um erro irrelevante de centavos na tarifação de processamento do sistema, o que o levou a rastrear o uso não autorizado por um hacker alemão vendendo segredos à KGB.",
  },
  {
    id: 10,
    chapter: 4,
    question:
      "O sistema de arquivos NTFS, amplamente utilizado em ambientes Microsoft Windows, possui uma estrutura central chamada MFT (Master File Table). Sob a perspectiva forense, o que caracteriza um 'arquivo residente' na MFT?",
    options: [
      "Um arquivo infectado por malware que se esconde exclusivamente na partição de boot do Linux.",
      "Um arquivo cujo conteúdo é tão pequeno (menor que ~700 bytes) que fica armazenado diretamente dentro do próprio registro de metadados da tabela MFT.",
      "Um arquivo de log do Visualizador de Eventos que foi corrompido por uma exclusão acidental via comando PowerShell.",
      "Um documento armazenado em um servidor de nuvem compartilhado que não pode ser baixado localmente.",
    ],
    correct: 1,
    feedback:
      "Arquivos residentes não ocupam clusters de dados adicionais no disco; seu conteúdo fica embutido no metadado da própria linha da MFT, permitindo a extração imediata dos dados pelo perito ao ler a tabela.",
  },
  {
    id: 11,
    chapter: 4,
    question:
      "Durante uma investigação em ambiente Linux, o perito precisa auditar tentativas de acessos remotos via SSH e elevações de privilégio administrativo. Qual diretório e arquivo padrão devem ser priorizados nesta análise?",
    options: [
      "O arquivo binário oculto .bash_history localizado na raiz do diretório de boot do kernel.",
      "O diretório central /var/log/ e especificamente o arquivo auth.log (ou secure em distribuições RedHat).",
      "As chaves hierárquicas de persistência de malware contidas no Windows Registry.",
      "Os metadados textuais extraídos automaticamente pelo indexador Spotlight do macOS.",
    ],
    correct: 1,
    feedback:
      "O arquivo auth.log centraliza todas as mensagens do subsistema de autenticação e segurança do Linux, registrando logins bem-sucedidos, falhas e o uso do comando sudo.",
  },
  {
    id: 12,
    chapter: 4,
    question:
      "No ecossistema Windows, os Prefetch Files constituem um dos artefatos mais ricos para a perícia digital. O que a análise desses arquivos permite ao perito provar tecnicamente em juízo?",
    options: [
      "A marca e o número de série físico de todos os pendrives conectados à placa-mãe no passado.",
      "O conteúdo em texto claro das mensagens enviadas por aplicativos de chat criptografados de ponta a ponta.",
      "A prova de execução de um programa, indicando o nome do executável, quantidade de vezes que foi rodado, timestamps de execução e arquivos secundários carregados nos primeiros segundos.",
      "O histórico completo de geolocalização IP por satélite configurado nas placas de rede.",
    ],
    correct: 2,
    feedback:
      "O Prefetch serve para otimizar o carregamento de softwares pelo SO. Para a perícia, ele funciona como uma linha do tempo inatacável que prova que um executável específico (ex: um apagador de evidências) rodou na máquina.",
  },
  {
    id: 13,
    chapter: 5,
    question:
      "A virtualização avançada e a popularização de ambientes baseados em contêineres (como o Docker) criaram um cenário de alta complexidade para a perícia tradicional pós-morte (Dead Analysis). Qual é o principal motivo dessa barreira técnica?",
    options: [
      "Os contêineres Docker utilizam exclusivamente discos rígidos mecânicos de baixa velocidade de leitura.",
      "A natureza efêmera dos contêineres, cujas camadas de escrita em memória e logs locais são destruídas instantaneamente quando o ambiente é reiniciado ou derrubado.",
      "A ausência total de pilhas de protocolos TCP/IP nas comunicações internas de microsserviços.",
      "A impossibilidade legal de aplicar as regras da cadeia de custódia em ambientes corporativos de tecnologia.",
    ],
    correct: 1,
    feedback:
      "Como os contêineres são projetados para serem voláteis e modulares, desligar o host ou reiniciar a instância apaga os vestígios voláteis da invasão, impedindo a recuperação clássica em disco rígido.",
  },
  {
    id: 14,
    chapter: 5,
    question:
      "No cenário corporativo atual de resposta a incidentes, ferramentas de SIEM (Security Information and Event Management) são frequentemente integradas a sistemas de UEBA. Qual é a função da Inteligência Artificial quando aplicada ao ecossistema UEBA?",
    options: [
      "Fazer a varredura física de mídias magnéticas antigas em busca de vírus da década de 1980.",
      "Analisar o comportamento contínuo dos usuários e entidades para alertar os investigadores sobre anomalias que desviem do padrão habitual de uso do SO.",
      "Substituir a necessidade de elaboração de Relatórios Periciais por decisões autônomas de juízes virtuais.",
      "Criptografar todos os discos do laboratório forense usando algoritmos baseados na tabela MFT.",
    ],
    correct: 1,
    feedback:
      "O UEBA (User and Entity Behavior Analytics) usa Machine Learning para aprender a rotina de acessos do usuário. Se uma credencial legítima começa a acessar chaves confidenciais do SO em horários anômalos, o sistema gera telemetria preventiva instantânea.",
  },
  {
    id: 15,
    chapter: 5,
    question:
      "As técnicas de Anti-Forense (Anti-Forensics) visam intencionalmente frustrar o trabalho dos peritos. Um exemplo clássico é o Timestomping. No que consiste essa técnica?",
    options: [
      "Na destruição física dos circuitos de memória RAM por meio de sobrecarga elétrica controlada.",
      "A manipulação e adulteração intencional dos metadados temporais de um arquivo (timestamps de criação, modificação ou acesso) para burlar a análise de linhas do tempo.",
      "O uso de inteligência artificial generativa para traduzir scripts PowerShell para a linguagem textual do Linux.",
      "A ocultação de arquivos executáveis dentro de imagens legítimas utilizando algoritmos de esteganografia.",
    ],
    correct: 1,
    feedback:
      "O Timestomping consiste em alterar cirurgicamente as marcas de tempo de um arquivo (como um binário malicioso) para fazê-lo parecer um arquivo antigo e legítimo do sistema, tentando enganar a cronologia da investigação.",
  },
  {
    id: 16,
    chapter: 6,
    question:
      "O desenvolvimento da Computação Quântica trará profundos impactos para a segurança global. Qual é a principal preocupação forense em relação ao advento dessas máquinas de alta performance?",
    options: [
      "A incompatibilidade total dos processadores quânticos com sistemas de arquivos baseados em partições Linux Ext4.",
      "A destruição mecânica automática de todos os storages baseados em nuvem.",
      "A capacidade teórica de quebrar os sistemas de criptografia de chave pública (RSA/ECC) amplamente utilizados hoje, forçando a migração para a Criptografia Pós-Quântica (PQC).",
      "A eliminação completa do uso de logs e ferramentas de auditoria no ecossistema do Windows.",
    ],
    correct: 2,
    feedback:
      "Computadores quânticos conseguirão quebrar os algoritmos assimétricos atuais através de modelos matemáticos complexos, o que forçará a perícia a se adaptar para validar e analisar sistemas sob a ótica da Criptografia Pós-Quântica (PQC).",
  },
  {
    id: 17,
    chapter: 6,
    question:
      "O modelo emergente de arquiteturas Serverless (Funções como Serviço - FaaS) redefine a forma de gerenciar aplicações. Como esse modelo impacta o trabalho operacional da computação forense em sistemas operacionais?",
    options: [
      "Exige que o perito faça o espelhamento bit-a-bit do hardware físico de smartphones industriais.",
      "Elimina o acesso tradicional ao SO subjacente (via SSH ou imagem de disco), fazendo com que a investigação dependa da auditoria de APIs e coleta de logs do provedor de nuvem.",
      "Obriga o perito a recuperar tabelas MFT exclusivamente em servidores descentralizados P2P.",
      "Extingue definitivamente o uso do protocolo TCP/IP nas conexões web globais.",
    ],
    correct: 1,
    feedback:
      "No modelo Serverless, a infraestrutura do SO é completamente abstraída para o desenvolvedor e para o perito. Não há um 'disco de servidor' para apreender; a evidência deve ser coletada via chamadas de API e logs fornecidos pelo cloud provider.",
  },
  {
    id: 18,
    chapter: 6,
    question:
      "Visando blindar a Cadeia de Custódia contra alegações de adulteração ou vazamentos, qual tecnologia disruptiva desponta como tendência para registrar os metadados e hashes das evidências coletadas?",
    options: [
      "Unidades centrais de tambores magnéticos de processamento manual.",
      "Filtros de esteganografia automatizados aplicados em kernels de smart TVs.",
      "Redes Blockchain descentralizadas, gravando de forma imutável os hashes de integridade imediatamente após a coleta.",
      "Softwares de timestomping integrados a sistemas automatizados de EDR.",
    ],
    correct: 2,
    feedback:
      "A tecnologia Blockchain atua como um ledger distribuído e imutável. Registrar o hash SHA-256 de uma evidência digital na Blockchain no momento da coleta garante matematicamente aos tribunais que o arquivo não sofreu nenhuma modificação posterior.",
  },
  {
    id: 19,
    chapter: 7,
    question:
      "Ao final do Módulo 1, mapeamos quatro pilares conceituais que sustentam a computação forense de alto nível. Qual das alternativas abaixo sintetiza INCORRETAMENTE um desses pilares estudados?",
    options: [
      "A base estrutural de Von Neumann, que rege a lógica de processamento até hoje.",
      "O rastro inevitável baseado no Princípio de Locard aplicado ao ambiente lógico.",
      "A rigidez legal imposta pelos critérios de admissibilidade de prova (Padrão Daubert) e Cadeia de Custódia.",
      "A dependência absoluta da perícia estática (Dead Analysis) como a única metodologia aceita para coletar dados em nuvem.",
    ],
    correct: 3,
    feedback:
      "A perícia estática (pós-morte) é inviável em ambientes de nuvem pulverizados e multilocatários, exigindo que o perito adote técnicas de Live Forensics e DFIR ativo, tornando a afirmação incorreta.",
  },
  {
    id: 20,
    chapter: 7,
    question:
      "De acordo com as conclusões do Módulo 1, por que o perito digital moderno não pode ser apenas um operador de ferramentas automatizadas de cliques (button-pusher)?",
    options: [
      "Porque as ferramentas automatizadas comerciais foram banidas pelo Código de Processo Penal brasileiro.",
      "Porque os crimes modernos envolvem ocultação avançada, criptografia e volatilidade que exigem o conhecimento profundo de como o kernel do SO gerencia o dado.",
      "Porque os processadores modernos de 64 bits executam apenas códigos textuais abertos em servidores Linux.",
      "Porque a Inteligência Artificial Generativa assumirá de forma autônoma todas as decisões de mérito judicial nos tribunais.",
    ],
    correct: 1,
    feedback:
      "Softwares automatizados geram relatórios padronizados, mas falham em interpretar anomalias complexas, técnicas anti-forenses (como timestomping) ou fragmentos em memória RAM. O perito precisa compreender a intimidade do SO para fundamentar um laudo inatacável.",
  },
  {
    id: 21,
    chapter: 7,
    question:
      "Em conformidade com a Declaração de Transparência Tecnológica exigida na capa do material, como se caracteriza o processo de desenvolvimento desse conteúdo pedagógico?",
    options: [
      "Geração automatizada e sem supervisão humana de dados fictícios sem base bibliográfica.",
      "Cópia literal de manuais antigos de sistemas de mainframes centralizados da década de 1960.",
      "Idealização, planejamento e estruturação metodológica pelo docente responsável, com expansão textual e suporte técnico de Inteligência Artificial Generativa baseada na bibliografia oficial.",
      "Tradução mecânica de artigos de esteganografia publicados exclusivamente no ecossistema macOS.",
    ],
    correct: 2,
    feedback:
      "O material foi idealizado, planejado e estruturado metodologicamente pelo Prof. Me. Maximiano Eduardo Pereira, com expansão textual via IA Generativa (Gemini/Google), baseada na bibliografia oficial da disciplina.",
  },
];
