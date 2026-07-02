export const quizQuestions = [
	{
		id: 1,
		chapter: 1,
		question:
			"Qual e a funcao principal da cadeia de custodia em computacao forense?",
		options: [
			"Aumentar o desempenho das ferramentas de analise",
			"Registrar de forma continua a trajetoria da evidencia",
			"Substituir a necessidade de relatorio pericial",
			"Dispensar verificacao de integridade por hash",
		],
		correct: 1,
		feedback:
			"A cadeia de custodia documenta pessoas, locais, datas e transferencias, garantindo rastreabilidade e confianca na evidencia digital.",
	},
	{
		id: 2,
		chapter: 1,
		question:
			"Sem documentacao adequada da cadeia de custodia, o principal risco juridico e:",
		options: [
			"A prova ser automaticamente criptografada",
			"O laudo ficar maior que o permitido",
			"A evidencia perder credibilidade e poder ser invalidada",
			"A ferramenta forense deixar de funcionar",
		],
		correct: 2,
		feedback:
			"Mesmo com achado tecnico correto, falhas de custodia podem comprometer admissibilidade e valor probatorio da evidencia.",
	},
	{
		id: 3,
		chapter: 1,
		question:
			"Qual conjunto representa principios basicos da cadeia de custodia?",
		options: [
			"Rastreabilidade, integridade, autenticidade e responsabilidade",
			"Velocidade, automacao, anonimato e redundancia",
			"Compressao, indexacao, criptografia e backup",
			"Portabilidade, escalabilidade, latencia e cache",
		],
		correct: 0,
		feedback:
			"Esses quatro principios sustentam a demonstracao de que a evidencia permaneceu identificavel, integra e sob guarda controlada.",
	},
	{
		id: 4,
		chapter: 1,
		question:
			"Qual pratica e correta no controle de integridade da evidencia?",
		options: [
			"Registrar hash apenas no fim da pericia",
			"Alterar metadados para padronizar arquivos",
			"Calcular hash na coleta e nas etapas de analise",
			"Desconsiderar hash se o equipamento estiver lacrado",
		],
		correct: 2,
		feedback:
			"Comparacao de hashes em momentos diferentes confirma se o conteudo permaneceu inalterado durante o processo.",
	},
	{
		id: 5,
		chapter: 2,
		question:
			"No acondicionamento da evidencia, qual conduta e mais adequada?",
		options: [
			"Embalar dispositivos juntos para facilitar transporte",
			"Embalagem individual, lacre e etiqueta unica",
			"Manter midias sem identificacao para sigilo",
			"Transportar sem registro quando houver urgencia",
		],
		correct: 1,
		feedback:
			"Acondicionamento individual com lacre e identificacao reduz risco de dano, troca ou contaminacao da evidencia.",
	},
	{
		id: 6,
		chapter: 2,
		question:
			"Qual item deve constar na secao de metodologia do relatorio pericial?",
		options: [
			"Somente opiniao final do perito",
			"Apenas nome do caso e do solicitante",
			"Ferramentas/versoes e passos executados",
			"Lista de anexos sem descricao tecnica",
		],
		correct: 2,
		feedback:
			"Metodologia precisa explicitar como a analise foi realizada para permitir reproducao tecnica e auditoria.",
	},
	{
		id: 7,
		chapter: 2,
		question:
			"Em relatorio pericial, uma conclusao tecnicamente adequada deve:",
		options: [
			"Ser objetiva e vinculada aos dados observados",
			"Incluir suposicoes nao verificadas para contexto",
			"Evitar referencia a limitacoes metodologicas",
			"Dispensar anexos quando o caso for simples",
		],
		correct: 0,
		feedback:
			"Conclusao valida deve ser sustentada por evidencias analisadas, com linguagem clara, imparcial e sem extrapolacao indevida.",
	},
	{
		id: 8,
		chapter: 2,
		question:
			"Qual alternativa descreve corretamente o modo de trabalho com a evidencia original?",
		options: [
			"Instalar ferramentas diretamente no original para agilizar",
			"Trabalhar em copia e manter original preservado",
			"Modificar permissoes para ampliar acesso da equipe",
			"Mesclar evidencias de casos distintos em repositorio unico",
		],
		correct: 1,
		feedback:
			"A pratica forense recomenda preservar o original e analisar copias controladas, evitando alteracoes irreversiveis.",
	},
	{
		id: 9,
		chapter: 3,
		question:
			"Qual norma internacional e referencia para coleta e preservacao de evidencias digitais?",
		options: ["ISO/IEC 27037", "RFC 1918", "ISO 9001", "NBR 5410"],
		correct: 0,
		feedback:
			"A ISO/IEC 27037 estabelece diretrizes para identificacao, coleta, aquisicao e preservacao de evidencia digital.",
	},
	{
		id: 10,
		chapter: 3,
		question:
			"Qual falha pode comprometer diretamente o valor probatorio de uma evidencia?",
		options: [
			"Uso de checklist na coleta",
			"Registro completo de transferencias",
			"Alteracao do conteudo original durante analise",
			"Anexacao de hashes no relatorio",
		],
		correct: 2,
		feedback:
			"Alterar o original compromete integridade e autenticidade, enfraquecendo a sustentacao tecnico-juridica da prova.",
	},
	{
		id: 11,
		chapter: 3,
		question:
			"Por que legalidade, integridade, rastreabilidade e imparcialidade sao pilares da pericia?",
		options: [
			"Porque substituem a necessidade de ferramentas",
			"Porque tornam a analise mais rapida apenas",
			"Porque sustentam validade tecnica e juridica",
			"Porque eliminam contraditorio processual",
		],
		correct: 2,
		feedback:
			"Esses pilares conectam procedimento tecnico a exigencias legais, fortalecendo confiabilidade e aceitacao da evidencia.",
	},
	{
		id: 12,
		chapter: 3,
		question:
			"Qual e o objetivo final do relatorio e da cadeia de custodia no processo judicial?",
		options: [
			"Aumentar o numero de anexos tecnicos",
			"Transformar dados em prova confiavel e compreensivel",
			"Reduzir a necessidade de interpretacao do juiz",
			"Substituir totalmente o depoimento pericial",
		],
		correct: 1,
		feedback:
			"A documentacao tecnica deve converter vestigios digitais em prova robusta, inteligivel e defensavel em juizo.",
	},
];
