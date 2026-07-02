export const quizQuestions = [
  {
    id: 1,
    chapter: 1,
    question:
      "No contexto do Modulo 3, o que caracteriza corretamente um artefato digital em sistemas Windows?",
    options: [
      "Um arquivo criado manualmente pelo usuario para documentar suas atividades.",
      "Um dado gerado automaticamente pelo sistema operacional durante uso e funcionamento.",
      "Um log exclusivo de ferramentas antivirus e EDR corporativas.",
      "Um registro criptografado que so existe em ambientes de servidor.",
    ],
    correct: 1,
    feedback:
      "Artefatos digitais sao produzidos automaticamente pelo sistema e podem registrar atividades do usuario e do proprio sistema, mesmo sem intencao direta de criacao de prova.",
  },
  {
    id: 2,
    chapter: 1,
    question:
      "Qual alternativa descreve corretamente a organizacao logica do Registro do Windows?",
    options: [
      "Setor, cluster e trilha.",
      "Tabela, indice e hash.",
      "Chave, subchave e valor.",
      "Usuario, sessao e token.",
    ],
    correct: 2,
    feedback:
      "O Registro e hierarquico: chaves contem subchaves, e estas possuem valores com nome, tipo e conteudo. Esse modelo e central para navegacao e extracao forense.",
  },
  {
    id: 3,
    chapter: 1,
    question:
      "Qual chave raiz e mais associada as preferencias do usuario atualmente logado?",
    options: ["HKLM", "HKCR", "HKCU", "HKU"],
    correct: 2,
    feedback:
      "HKCU mapeia a visao do perfil atualmente logado, sendo util para rastros de uso individualizado, configuracoes e historicos do usuario ativo.",
  },
  {
    id: 4,
    chapter: 1,
    question:
      "Qual pratica esta alinhada a cadeia de custodia ao analisar hives do Registro?",
    options: [
      "Editar valores no sistema original para testar hipoteses.",
      "Executar limpeza automatica antes da aquisicao para reduzir ruido.",
      "Trabalhar em copia confiavel e evitar alteracao da fonte original.",
      "Desativar logs para impedir contaminacao de evidencias novas.",
    ],
    correct: 2,
    feedback:
      "A analise deve ocorrer em copia forense para preservar integridade e repetibilidade. Alterar o sistema original pode comprometer validade tecnica e juridica da evidencia.",
  },
  {
    id: 5,
    chapter: 2,
    question:
      "Sobre arquivos Prefetch, qual afirmacao e correta?",
    options: [
      "Sao criados apenas quando o usuario executa programas como administrador.",
      "Registram dados de execucao para otimizar abertura futura de programas.",
      "Existem somente em sistemas Windows Server por padrao.",
      "Substituem completamente os logs de eventos do Windows.",
    ],
    correct: 1,
    feedback:
      "Prefetch e um mecanismo de performance que tambem tem valor pericial, pois registra metadados de execucao de binarios em diversos cenarios de uso.",
  },
  {
    id: 6,
    chapter: 2,
    question:
      "Qual padrao de nome representa melhor um arquivo Prefetch?",
    options: [
      "Programa.LOG-<SessionId>.evt",
      "Programa.EXE-<CodigoHash>.pf",
      "Programa.CFG-<Usuario>.dat",
      "Programa.BIN-<Timestamp>.tmp",
    ],
    correct: 1,
    feedback:
      "O formato com executavel e hash no nome e caracteristico do Prefetch e ajuda na identificacao rapida dos binarios executados.",
  },
  {
    id: 7,
    chapter: 2,
    question:
      "Qual inferencia forense sobre arquivos .lnk e mais adequada?",
    options: [
      "Um .lnk prova assinatura digital do arquivo alvo.",
      "Um .lnk pode preservar caminho e metadados de acesso mesmo apos mudancas no arquivo original.",
      "Um .lnk so existe se o arquivo original ainda estiver no mesmo local.",
      "Um .lnk e apagado automaticamente quando o arquivo alvo e excluido.",
    ],
    correct: 1,
    feedback:
      "Atalhos podem manter rastros uteis como caminho, datas e informacoes de volume, sendo valiosos para reconstruir acesso a arquivos e dispositivos.",
  },
  {
    id: 8,
    chapter: 2,
    question:
      "Ao investigar uso de documentos em midia externa, qual artefato tende a ajudar mais na evidencia de caminho de origem?",
    options: ["SAM", "Arquivos .lnk", "pagefile.sys", "boot.ini"],
    correct: 1,
    feedback:
      "Arquivos .lnk costumam registrar referencias de caminho e volume, auxiliando a associar documentos a dispositivos externos e contextos de acesso.",
  },
  {
    id: 9,
    chapter: 3,
    question:
      "Nos Windows modernos, qual estrutura representa corretamente um item na Reciclagem?",
    options: [
      "Um unico arquivo .tmp com dados e metadados combinados.",
      "Dois arquivos: $I (metadados) e $R (conteudo real).",
      "Tres arquivos: .idx, .raw e .sig.",
      "Um arquivo .zip cifrado com senha do usuario.",
    ],
    correct: 1,
    feedback:
      "A dupla $I/$R e central na analise da lixeira: o $I preserva dados de contexto e o $R representa o conteudo excluido.",
  },
  {
    id: 10,
    chapter: 3,
    question:
      "Qual afirmacao descreve melhor a recuperacao apos esvaziar a Reciclagem?",
    options: [
      "Os dados sao sempre destruídos de forma criptografica imediata.",
      "A recuperacao pode ser possivel ate ocorrer sobrescrita fisica dos blocos.",
      "O sistema move os dados para HKLM para auditoria posterior.",
      "Arquivos passam automaticamente para Prefetch para retencao longa.",
    ],
    correct: 1,
    feedback:
      "Esvaziar lixeira remove referencias logicas, mas o conteudo pode permanecer no disco por um periodo. A janela de recuperacao depende de nao haver sobrescrita.",
  },
  {
    id: 11,
    chapter: 4,
    question:
      "Qual conjunto de boas praticas esta mais correto para analise forense de artefatos Windows?",
    options: [
      "Alterar o ambiente para facilitar leitura e registrar apenas conclusoes finais.",
      "Usar uma unica ferramenta para evitar divergencia de resultados.",
      "Trabalhar com copia, documentar passos e validar achados com ferramentas distintas.",
      "Priorizar velocidade sobre preservacao para reduzir tempo de resposta.",
    ],
    correct: 2,
    feedback:
      "Boas praticas exigem integridade, rastreabilidade e validacao cruzada para aumentar confiabilidade tecnica e defensabilidade da prova.",
  },
  {
    id: 12,
    chapter: 4,
    question:
      "Qual estrategia de corroboracao e mais adequada para fortalecer uma conclusao pericial?",
    options: [
      "Usar apenas Prefetch porque e suficiente para qualquer caso.",
      "Cruzar Registro, Prefetch, .lnk e Reciclagem para formar narrativa temporal consistente.",
      "Descartar artefatos divergentes para simplificar o relatorio.",
      "Basear conclusao apenas em relato do usuario investigado.",
    ],
    correct: 1,
    feedback:
      "A forca da analise aumenta com correlacao entre fontes independentes. A convergencia de artefatos reduz falsos positivos e melhora robustez da conclusao.",
  },
];
