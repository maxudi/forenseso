export const quizQuestions = [
  {
    id: 1,
    chapter: 1,
    question:
      "Sob a ótica forense e de baixo nível, como um arquivo é tratado pelo controlador de armazenamento (HDD ou SSD)?",
    options: [
      "Como uma estrutura hierárquica com nome, extensão e permissões nativamente embarcadas no hardware.",
      "Como um stream (fluxo) de bytes — uma sequência não-estruturada de dados binários sem barreiras conceituais de formato.",
      "Como um objeto orientado com metadados nativos de segurança e autenticação impostos pelo controlador.",
      "Como um bloco cifrado com assinatura digital obrigatória imposta pelo firmware do disco.",
    ],
    correct: 1,
    feedback:
      "Para o hardware de armazenamento, o arquivo é apenas uma cadeia de bits. É o Sistema Operacional que, por meio dos metadados estruturados (MFT/Inode), transforma esse fluxo em uma entidade com nome, permissões, timestamps e proprietário.",
  },
  {
    id: 2,
    chapter: 1,
    question:
      "Qual a importância pericial da diferença entre Tamanho Lógico e Tamanho Físico de um arquivo?",
    options: [
      "Essa diferença é irrelevante, pois os sistemas de arquivos modernos sempre alocam espaço exato ao byte.",
      "O tamanho físico maior que o lógico indica que o arquivo está infectado por um vírus residente no slack space.",
      "Essa diferença gera o Slack Space — uma área formalmente alocada mas não utilizada que pode conter resíduos de arquivos anteriores ou fragmentos de dados da RAM.",
      "O tamanho lógico maior que o físico indica corrupção irrecuperável do cluster de armazenamento.",
    ],
    correct: 2,
    feedback:
      "O Tamanho Físico é sempre múltiplo do tamanho do bloco e geralmente maior que o Tamanho Lógico. O espaço resultante entre eles é o Slack Space — um repositório involuntário de evidências históricas que o perito sabe como explorar.",
  },
  {
    id: 3,
    chapter: 1,
    question:
      "O Journaling do sistema de arquivos Ext4 (Linux) possui valor forense inestimável. Qual é a sua função e por que o perito o valoriza?",
    options: [
      "O journal armazena cópias completas dos arquivos deletados em texto plano, acessíveis via comando cat.",
      "O journal registra as intenções de modificação de metadados antes da gravação real, funcionando como caixa-preta que sobrevive à exclusão dos logs de texto plano.",
      "O journal cifra automaticamente todos os arquivos com AES-256, protegendo as evidências de adulteração.",
      "O journal gera uma cópia da MFT do Windows para compatibilidade em dual-boot.",
    ],
    correct: 1,
    feedback:
      "Se um atacante deleta arquivos de log em /var/log/ para apagar rastros, o perito pode extrair o histórico recente de transações diretamente do journal do Ext4, pois as intenções de modificação foram registradas antes mesmo de serem executadas no disco.",
  },
  {
    id: 4,
    chapter: 1,
    question:
      "O NTFS, padrão do Windows moderno, é arquitetado sobre qual estrutura de dados para indexação eficiente de arquivos?",
    options: [
      "Listas encadeadas de blocos livres organizadas sequencialmente na tabela FAT.",
      "Árvores binárias balanceadas (Árvore-B), permitindo alta performance e resiliência na localização e recuperação de metadados.",
      "Tabelas hash simples com colisão resolvida por encadeamento externo em memória RAM.",
      "Grafos acíclicos direcionados distribuídos entre múltiplos controladores de I/O.",
    ],
    correct: 1,
    feedback:
      "A estrutura de Árvore-B do NTFS garante eficiência logarítmica nas operações de busca e alta resiliência a falhas. A MFT (Master File Table) é o coração desse sistema, com registros de 1024 bytes para cada arquivo do volume.",
  },
  {
    id: 5,
    chapter: 2,
    question:
      "Qual é a premissa filosófica central da arquitetura de armazenamento do Linux, herdada do POSIX/Unix, e qual seu impacto na forense?",
    options: [
      "'Tudo é um processo' — cada arquivo é executável e gerenciado exclusivamente pelo kernel em modo seguro.",
      "'Tudo é um registro' — toda informação do sistema é armazenada em um banco de dados binário centralizado.",
      "'Tudo é um arquivo' — dispositivos, sockets, processos e configurações são representados como arquivos em uma árvore única de diretórios.",
      "'Tudo é um módulo' — cada componente do SO é independente e pode ser substituído sem reinicialização.",
    ],
    correct: 2,
    feedback:
      "A filosofia 'Everything is a file' do Unix/Linux unifica o ponto de coleta de evidências: hardware (/dev/sda), processos (/proc/), e conexões de rede são todos mapeados como arquivos, permitindo ao perito usar ferramentas padronizadas de leitura para qualquer tipo de vestígio.",
  },
  {
    id: 6,
    chapter: 2,
    question:
      "Durante uma investigação de intrusão em servidor Linux, qual diretório e quais arquivos são os alvos primários de ataques de exfiltração de credenciais?",
    options: [
      "/dev/null e /dev/zero, pois armazenam as chaves criptográficas do kernel em formato binário.",
      "/etc/passwd e /etc/shadow: o passwd lista contas e UIDs publicamente, enquanto o shadow armazena os hashes criptográficos das senhas com permissões restritas de leitura.",
      "/bin/login e /sbin/su, pois contêm os executáveis de autenticação que podem ser trojanizados.",
      "/proc/keys e /proc/crypto, pois expõem os anéis de chaves criptográficas dos processos ativos.",
    ],
    correct: 1,
    feedback:
      "O /etc/shadow é o arquivo-alvo de ataques de força bruta offline: comprometer sua leitura permite extrair os hashes de senha de todos os usuários do sistema para quebra local com ferramentas como hashcat ou john the ripper.",
  },
  {
    id: 7,
    chapter: 2,
    question:
      "Por que o diretório /proc/ é de valor inestimável para a perícia em Live Forensics no Linux?",
    options: [
      "Porque armazena o cache permanente de todos os arquivos recentemente abertos em disco rígido.",
      "Porque contém os scripts de inicialização dos serviços do sistema em formato de texto plano editável.",
      "Porque é um sistema de arquivos virtual na RAM que expõe o estado real dos processos, permitindo extrair o binário exato rodando em memória mesmo que o malware já tenha sido deletado do disco.",
      "Porque registra o histórico completo de comandos sudo em formato binário indexado pelo journald.",
    ],
    correct: 2,
    feedback:
      "O /proc/[PID]/exe é um link simbólico para o executável em memória. Mesmo que o atacante tenha deletado o arquivo de malware do disco após a execução, o perito pode copiá-lo diretamente de /proc/ enquanto o processo ainda estiver ativo — técnica vital de Live Forensics.",
  },
  {
    id: 8,
    chapter: 2,
    question:
      "Qual é o motivo pelo qual os diretórios /tmp/ e /var/tmp/ do Linux são os alvos primários de agentes maliciosos em servidores comprometidos?",
    options: [
      "Porque são diretórios criptografados por padrão, impedindo a análise direta pelo administrador.",
      "Porque possuem permissão universal de escrita com Sticky Bit, permitindo que qualquer usuário (incluindo processos exploitados) grave, compile e execute arquivos ali sem restrição.",
      "Porque são montados em partições separadas com sistema FAT32, sem suporte a permissões POSIX.",
      "Porque o kernel do Linux apaga automaticamente o conteúdo dessas pastas durante processos de auditoria.",
    ],
    correct: 1,
    feedback:
      "O Sticky Bit com escrita universal torna /tmp/ o laboratório preferido de atacantes: eles descompactam toolkits, compilam exploits e ocultam payloads ali, contando que administradores raramente monitoram ativamente esse diretório.",
  },
  {
    id: 9,
    chapter: 2,
    question:
      "O Microsoft Windows centraliza a inteligência do sistema e o histórico de uso em uma estrutura única. Qual é ela e o que representa para a perícia?",
    options: [
      "O arquivo C:\\boot.ini, que contém todas as políticas de grupo e histórico de conexões em XML.",
      "O Windows Registry — um banco de dados binário hierárquico (Hives) que centraliza configurações, histórico de hardware USB, chaves de persistência de malwares e comportamento individualizado do usuário.",
      "O arquivo NTLDR, que mantém um log centralizado de todas as transações de disco em modo kernel.",
      "O diretório C:\\Windows\\System32\\etc\\ com arquivos .conf equivalentes ao /etc/ do Linux.",
    ],
    correct: 1,
    feedback:
      "O Registry é a mina de ouro do perito Windows. Hives como SYSTEM (USBs conectados via USBSTOR), SAM (hashes de senhas), SOFTWARE (malwares com Run Keys) e NTUSER.DAT (histórico do investigado) fornecem evidências que sobrevivem a reboots e deleções.",
  },
  {
    id: 10,
    chapter: 2,
    question:
      "Durante uma investigação, o perito encontra o arquivo NTUSER.DAT na pasta de perfil do suspeito. Que tipo de informação esse artefato registra?",
    options: [
      "O número de série e modelo de todos os processadores instalados ao longo da vida do hardware.",
      "O comportamento individualizado do usuário: histórico de arquivos abertos (RecentDocs), comandos digitados no Run (RunMRU), buscas realizadas e preferências de aplicativos de terceiros.",
      "Os metadados binários do sistema de arquivos NTFS de toda a partição C:\\.",
      "O log de eventos de autenticação com os IDs 4624 e 4625 em formato binário proprietário.",
    ],
    correct: 1,
    feedback:
      "O NTUSER.DAT é o diário digital do usuário. Cada arquivo aberto, cada comando executado no Run, cada busca realizada fica registrado nesse hive — evidência direta do comportamento do investigado na máquina, independente do histórico do navegador.",
  },
  {
    id: 11,
    chapter: 3,
    question:
      "Na Alocação Encadeada (Ligada) em disco, qual desvantagem forense um atacante pode explorar para dificultar a recuperação de evidências?",
    options: [
      "O fato de que a alocação encadeada gera fragmentação externa, impossibilitando a análise de cluster físico.",
      "A dependência de ponteiros sequenciais — a corrupção ou deleção de um único bloco intermediário quebra a cadeia, tornando a recuperação do arquivo extremamente complexa ou inviável.",
      "A impossibilidade técnica de usar write-blockers de hardware em discos com alocação encadeada.",
      "A geração automática de arquivos residentes na MFT que sobrescrevem as evidências de alocação anteriores.",
    ],
    correct: 1,
    feedback:
      "Na alocação encadeada, cada bloco aponta para o próximo. Se um atacante corrompe propositalmente um bloco do meio, toda a cadeia posterior é perdida, forçando o perito a usar técnicas de file carving manual por assinaturas hexadecimais sem a garantia de recuperação integral.",
  },
  {
    id: 12,
    chapter: 3,
    question:
      "Por que a Alocação Indexada (I-nodes/MFT) é considerada o cenário ideal para a computação forense mesmo quando o arquivo já foi marcado como excluído?",
    options: [
      "Porque a alocação indexada criptografa automaticamente os dados excluídos, preservando sua integridade.",
      "Porque o I-node ou o registro da MFT frequentemente permanece intacto na tabela após a exclusão lógica, permitindo ao perito reconstruir perfeitamente o arquivo com todos os seus metadados originais.",
      "Porque o SO cria uma cópia de backup automática em /var/cache antes de excluir qualquer arquivo indexado.",
      "Porque a alocação indexada usa SHA-256 nativo que impede a sobrescrita dos blocos de dados originais.",
    ],
    correct: 1,
    feedback:
      "A exclusão lógica apenas marca o índice (I-node/MFT) como disponível e atualiza o $Bitmap. A estrutura de metadados muitas vezes permanece intacta por mais tempo que os próprios blocos de dados — garantindo uma janela de recuperação que o perito capacitado sabe explorar.",
  },
  {
    id: 13,
    chapter: 3,
    question:
      "Um arquivo de 5700 bytes é salvo em sistema com blocos de 4096 bytes. Qual é o Slack Space gerado e qual subdivisão pode conter fragmentos de memória RAM?",
    options: [
      "Slack Space de 8192 bytes; o Drive Slack contém fragmentos de RAM.",
      "Slack Space de 2492 bytes; o RAM Slack (do final dos dados ao fim do setor físico de 512 bytes) pode conter dados brutos da memória volátil presentes durante a gravação.",
      "Slack Space de 4096 bytes; o File Slack contém os metadados do arquivo anterior naquele cluster.",
      "Não há Slack Space — o SO arredonda o arquivo para 5120 bytes automaticamente.",
    ],
    correct: 1,
    feedback:
      "Com 2 blocos alocados (8192 bytes) para um arquivo de 5700 bytes, o Slack Space é 2492 bytes. O RAM Slack especificamente — do fim dos dados ao fim do setor de 512 bytes — pode conter fragmentos brutos da RAM ativa no exato momento da gravação do arquivo.",
  },
  {
    id: 14,
    chapter: 3,
    question:
      "Qual é a função do arquivo de sistema $Bitmap no NTFS do Windows e por que sua análise é crítica para a forense?",
    options: [
      "Armazena ícones e miniaturas de todos os arquivos do volume para o Explorador de Arquivos.",
      "É o arquivo de paginação virtual que gerencia a memória RAM para processos em segundo plano.",
      "É um vetor binário onde cada bit representa um cluster: 0 = livre, 1 = alocado. Sua análise revela o mapa exato do espaço não alocado — onde residem os dados fantasmas de arquivos excluídos.",
      "Armazena os hashes SHA-256 de integridade de todos os arquivos do sistema para detecção de malwares.",
    ],
    correct: 2,
    feedback:
      "O $Bitmap é o mapa de tesouros do perito. Ao identificar quais clusters estão marcados como livres (bit = 0) mas ainda contêm dados, o especialista localiza o espaço não alocado onde residem evidências de arquivos previamente deletados aguardando o file carving.",
  },
  {
    id: 15,
    chapter: 3,
    question:
      "Qual técnica forense avançada é utilizada para recuperar arquivos do Espaço Não Alocado, ignorando completamente as diretivas do sistema de arquivos?",
    options: [
      "Journaling Reverso — recria o histórico de transações do Ext4 para restaurar os inodes deletados.",
      "File Carving — varredura do espaço não alocado em busca de Magic Numbers (assinaturas hexadecimais de header/footer dos formatos de arquivo).",
      "Timestomping Forense — manipula os carimbos MACB para revelar a data real de criação dos arquivos.",
      "RAM Slack Mining — extrai dados da memória ativa via Volatility em modo kernel.",
    ],
    correct: 1,
    feedback:
      "O File Carving busca por assinaturas hexadecimais padronizadas: um arquivo JPEG começa sempre com FF D8 FF e termina com FF D9. A ferramenta extrai os bytes entre essas marcas, recuperando o arquivo mesmo sem nenhum metadado de sistema de arquivos disponível.",
  },
  {
    id: 16,
    chapter: 4,
    question:
      "Por que um script malicioso de ~450 bytes, após ser excluído do Windows NTFS, possui altíssima chance de recuperação integral mesmo com gravações subsequentes no disco?",
    options: [
      "Porque o Windows cria automaticamente uma cópia de segurança em C:\\Windows\\Backup antes de qualquer exclusão.",
      "Porque sendo menor que ~700 bytes, é um Arquivo Residente — seu conteúdo bruto fica armazenado diretamente dentro do registro de 1024 bytes da MFT, não em clusters externos que seriam rapidamente sobrescritos.",
      "Porque o NTFS usa journaling que mantém cópias completas de todos os arquivos excluídos por 30 dias.",
      "Porque o pagefile.sys absorve automaticamente o conteúdo de arquivos pequenos excluídos para eventual recuperação.",
    ],
    correct: 1,
    feedback:
      "Arquivos Residentes têm seu conteúdo diretamente dentro da MFT. O registro da tabela leva muito mais tempo para ser reutilizado pelo SO do que os clusters de dados livres do disco — garantindo uma janela de recuperação muito maior para o perito digital.",
  },
  {
    id: 17,
    chapter: 4,
    question:
      "O perito precisa provar que um suspeito conectou um pendrive específico a uma máquina Windows há dois anos, sem que nenhum log de texto esteja disponível. Qual hive do Registro deve ser minerado?",
    options: [
      "Hive SAM — armazena o número de série do USB junto com o hash da senha do usuário que o conectou.",
      "Hive NTUSER.DAT — registra todos os dispositivos físicos conectados em RecentDocs.",
      "Hive SYSTEM, especificamente a chave USBSTOR — mapeia fabricante, modelo e número de série exclusivo de cada dispositivo USB já conectado à máquina.",
      "Hive SOFTWARE — mantém um log de instalação de drivers USB com timestamps detalhados.",
    ],
    correct: 2,
    feedback:
      "A chave HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Enum\\USBSTOR é um registro histórico permanente. Cada pendrive que já foi conectado deixa sua impressão digital (fabricante, modelo, número de série) nessa chave — independentemente de quando ocorreu.",
  },
  {
    id: 18,
    chapter: 4,
    question:
      "O Event ID 1102 no arquivo Security.evtx de uma máquina Windows é um forte indicador de comportamento criminoso. O que ele registra?",
    options: [
      "A instalação bem-sucedida de um driver de dispositivo USB de fonte desconhecida.",
      "Uma tentativa malsucedida de autenticação via protocolo RDP de um endereço IP externo.",
      "A limpeza manual e deliberada dos logs de auditoria de segurança por um usuário ou processo com privilégios administrativos.",
      "A criação de uma nova conta de usuário com privilégios de administrador local.",
    ],
    correct: 2,
    feedback:
      "O ID 1102 é a prova do encobrimento: alguém com privilégios administrativos deliberadamente apagou os logs de segurança. Ironicamente, esse ato de ocultação fica registrado no próprio log que deveria ser apagado — criando uma evidência irrefutável da tentativa de apagamento.",
  },
  {
    id: 19,
    chapter: 4,
    question:
      "No acrônimo MACB, qual timestamp possui comportamento distinto entre Linux e Windows e exige atenção especial do perito na análise de linha do tempo?",
    options: [
      "M (Modification) — no Linux registra modificação de permissões, enquanto no Windows registra criação.",
      "B (Birth) — no Linux registra a última execução do arquivo, enquanto no Windows registra a compilação.",
      "C (Change/MFT Modified) — no Linux refere-se à alteração de metadados (chmod/chown), enquanto no Windows refere-se à modificação do descritor do arquivo dentro da tabela MFT.",
      "A (Access) — no Linux registra login de usuário, enquanto no Windows registra conexões RDP.",
    ],
    correct: 2,
    feedback:
      "O 'C' é o mais ambíguo: no Ext4 do Linux, ctime é atualizado quando metadados mudam (permissões, nome, proprietário). No NTFS, é o 'MFT Modified' — atualizado quando o registro do arquivo na Master File Table é alterado. Confundir os dois pode levar a interpretações incorretas da linha do tempo forense.",
  },
  {
    id: 20,
    chapter: 4,
    question:
      "Se um atacante aplicou Timestomping em um malware alterando seus timestamps MACB para 2015, qual cruzamento de evidências o perito deve realizar para desmascarar a falsificação?",
    options: [
      "Comparar o hash MD5 do arquivo com o banco de dados de malwares conhecidos do VirusTotal.",
      "Analisar o tamanho físico versus lógico do arquivo para identificar anomalias no Slack Space.",
      "Cruzar o timestamp da MFT com o arquivo Prefetch (.pf): se o .pf mostra primeira execução na data do incidente mas a MFT diz 2015, ou se o ctime é anomalamente posterior ao mtime, a fraude é tecnicamente desmascarada.",
      "Verificar se o arquivo possui assinatura digital válida do fabricante no certificado X.509.",
    ],
    correct: 2,
    feedback:
      "A Análise de Consistência Cross-Reference gera uma Super Timeline. O Prefetch não pode ser falsificado pelo mesmo método que a MFT — sua data de criação e Run Counter revelam quando o executável rodou de verdade, expondo a inconsistência cronológica do Timestomping com precisão científica.",
  },
];
