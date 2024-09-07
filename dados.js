// Dados de teste pra pesquisas
let dados = [
	{
		nomeGene: "CHD8",
		descricao: "Codifica uma proteína envolvida na regulação da cromatina.",
		caracteristicas:
			"A mutação no CHD8 tem sido ligada a grandes cabeças e atraso no desenvolvimento.",
		tags: [
			"desenvolvimento cerebral",
			"regulação da cromatina",
			"macrocefalia",
			"TEA",
		],
	},
	{
		nomeGene: "SHANK3",
		descricao:
			"Codifica uma proteína encontrada nas sinapses e é importante para a sinalização neuronal.",
		caracteristicas:
			"As mutações em SHANK3 estão fortemente associadas ao autismo e transtornos neurológicos graves.",
		tags: [
			"sinapse",
			"neurodesenvolvimento",
			"transtornos neurológicos",
			"TEA",
		],
	},
	{
		nomeGene: "SCN2A",
		descricao:
			"Codifica uma subunidade do canal de sódio que influencia a excitabilidade neuronal.",
		caracteristicas:
			"Mutações em SCN2A têm sido ligadas ao autismo e epilepsia.",
		tags: ["canal de sódio", "excitabilidade neuronal", "epilepsia", "TEA"],
	},
	{
		nomeGene: "PTEN",
		descricao: "Envolvido na regulação da sobrevivência celular e crescimento.",
		caracteristicas:
			"Mutações em PTEN têm sido associadas a macrocefalia e autismo.",
		tags: ["sobrevivência celular", "crescimento", "macrocefalia", "TEA"],
	},
	{
		nomeGene: "NRXN1",
		descricao: "Codifica uma proteína essencial para a comunicação sináptica.",
		caracteristicas:
			"As deleções em NRXN1 estão ligadas ao autismo e esquizofrenia.",
		tags: ["sinapse", "esquizofrenia", "comunicação neuronal", "TEA"],
	},
	{
		nomeGene: "CNTNAP2",
		descricao:
			"Codifica uma proteína importante para a função do sistema nervoso.",
		caracteristicas:
			"Mutações em CNTNAP2 estão associadas a distúrbios de linguagem e autismo.",
		tags: ["sistema nervoso", "distúrbios de linguagem", "TEA"],
	},
	{
		nomeGene: "MECP2",
		descricao:
			"Codifica uma proteína que regula a expressão gênica através da metilação do DNA.",
		caracteristicas:
			"Mutações em MECP2 são a principal causa da síndrome de Rett, relacionada ao autismo.",
		tags: ["regulação gênica", "síndrome de Rett", "TEA"],
	},
	{
		nomeGene: "TSC1",
		descricao: "Codifica uma proteína que regula o crescimento celular.",
		caracteristicas:
			"Mutado em indivíduos com esclerose tuberosa, que pode apresentar sintomas de TEA.",
		tags: ["crescimento celular", "esclerose tuberosa", "TEA"],
	},
	{
		nomeGene: "TSC2",
		descricao:
			"Envolvido na via mTOR, importante para a regulação do crescimento e proliferação celular.",
		caracteristicas:
			"Mutado na esclerose tuberosa, frequentemente associado ao autismo.",
		tags: ["via mTOR", "crescimento celular", "esclerose tuberosa", "TEA"],
	},
	{
		nomeGene: "SYNGAP1",
		descricao: "Codifica uma proteína que regula a plasticidade sináptica.",
		caracteristicas:
			"Mutações em SYNGAP1 estão associadas ao autismo e epilepsia.",
		tags: ["plasticidade sináptica", "epilepsia", "TEA"],
	},
	{
		nomeGene: "GRIN2B",
		descricao:
			"Codifica uma subunidade do receptor NMDA, importante para a memória e aprendizado.",
		caracteristicas:
			"Mutações em GRIN2B estão ligadas ao autismo e deficiência intelectual.",
		tags: ["receptor NMDA", "aprendizado", "deficiência intelectual", "TEA"],
	},
	{
		nomeGene: "UBE3A",
		descricao:
			"Está relacionado à síndrome de Angelman, uma condição que pode causar autismo.",
		caracteristicas:
			"A disfunção de UBE3A leva a problemas de desenvolvimento cognitivo.",
		tags: ["síndrome de Angelman", "desenvolvimento cognitivo", "TEA"],
	},
	{
		nomeGene: "KMT2C",
		descricao: "Codifica uma proteína envolvida na modificação da cromatina.",
		caracteristicas:
			"Mutações em KMT2C estão associadas ao TEA e deficiência intelectual.",
		tags: ["modificação da cromatina", "deficiência intelectual", "TEA"],
	},
	{
		nomeGene: "ADNP",
		descricao:
			"Envolvido no desenvolvimento neuronal e plasticidade sináptica.",
		caracteristicas:
			"Mutado na síndrome de Helsmoortel-Van der Aa, frequentemente ligada ao autismo.",
		tags: [
			"desenvolvimento neuronal",
			"síndrome de Helsmoortel-Van der Aa",
			"TEA",
		],
	},
	{
		nomeGene: "SLC6A4",
		descricao:
			"Codifica um transportador de serotonina, crucial para a neurotransmissão.",
		caracteristicas:
			"Alterações no gene têm sido associadas a transtornos do humor e autismo.",
		tags: ["serotonina", "neurotransmissão", "transtornos do humor", "TEA"],
	},
	{
		nomeGene: "GRIP1",
		descricao:
			"Envolvido na regulação de receptores glutamatérgicos nas sinapses.",
		caracteristicas:
			"Mutações em GRIP1 têm sido ligadas ao desenvolvimento de TEA.",
		tags: ["receptores glutamatérgicos", "sinapse", "TEA"],
	},
	{
		nomeGene: "CDKL5",
		descricao:
			"Codifica uma proteína quinase que é crucial para o desenvolvimento cerebral.",
		caracteristicas:
			"As mutações em CDKL5 estão associadas à deficiência intelectual e epilepsia, além de sintomas de autismo.",
		tags: [
			"desenvolvimento cerebral",
			"epilepsia",
			"deficiência intelectual",
			"TEA",
		],
	},
	{
		nomeGene: "ARID1B",
		descricao:
			"Regula a estrutura da cromatina e está envolvido no desenvolvimento do sistema nervoso.",
		caracteristicas:
			"Mutações em ARID1B são associadas a atraso no desenvolvimento e características de TEA.",
		tags: [
			"estrutura da cromatina",
			"desenvolvimento do sistema nervoso",
			"atraso no desenvolvimento",
			"TEA",
		],
	},
	{
		nomeGene: "FOXP1",
		descricao:
			"Codifica uma proteína que regula a expressão gênica relacionada ao desenvolvimento da fala e da linguagem.",
		caracteristicas:
			"Mutações em FOXP1 são associadas ao autismo, atraso na fala e desenvolvimento intelectual.",
		tags: ["expressão gênica", "fala", "desenvolvimento intelectual", "TEA"],
	},
	{
		nomeGene: "NLGN3",
		descricao:
			"Codifica uma proteína sináptica envolvida na comunicação entre os neurônios.",
		caracteristicas:
			"Mutações em NLGN3 estão associadas ao TEA e transtornos sociais.",
		tags: ["sinapse", "comunicação neuronal", "transtornos sociais", "TEA"],
	},
	{
		nomeGene: "NLGN4X",
		descricao:
			"Codifica uma proteína sináptica importante para a função neuronal.",
		caracteristicas:
			"Alterações em NLGN4X estão associadas ao autismo e outros transtornos do neurodesenvolvimento.",
		tags: ["sinapse", "neurodesenvolvimento", "TEA"],
	},
	{
		nomeGene: "CACNA1C",
		descricao:
			"Codifica um canal de cálcio que regula a excitabilidade neuronal.",
		caracteristicas:
			"Mutações em CACNA1C estão ligadas ao autismo, transtornos bipolares e esquizofrenia.",
		tags: [
			"canal de cálcio",
			"excitabilidade neuronal",
			"TEA",
			"esquizofrenia",
		],
	},
	{
		nomeGene: "ANK2",
		descricao:
			"Envolvido na organização estrutural dos neurônios e no transporte de proteínas.",
		caracteristicas:
			"Mutações em ANK2 estão associadas a distúrbios neurológicos, incluindo TEA.",
		tags: ["organização neuronal", "transporte de proteínas", "TEA"],
	},
	{
		nomeGene: "RORA",
		descricao:
			"Regula a expressão de vários genes envolvidos no desenvolvimento do cérebro.",
		caracteristicas:
			"Mutações em RORA estão associadas ao TEA e desenvolvimento cerebral anormal.",
		tags: ["desenvolvimento cerebral", "expressão gênica", "TEA"],
	},
	{
		nomeGene: "KDM5B",
		descricao:
			"Codifica uma enzima envolvida na modificação da cromatina e regulação gênica.",
		caracteristicas:
			"Mutações em KDM5B têm sido ligadas ao TEA e atraso no desenvolvimento.",
		tags: ["modificação da cromatina", "atraso no desenvolvimento", "TEA"],
	},
	{
		nomeGene: "GRIN2A",
		descricao:
			"Codifica uma subunidade do receptor NMDA, importante para a plasticidade sináptica.",
		caracteristicas:
			"Alterações em GRIN2A estão associadas ao autismo e epilepsia.",
		tags: ["receptor NMDA", "plasticidade sináptica", "epilepsia", "TEA"],
	},
	{
		nomeGene: "SRPX2",
		descricao:
			"Está envolvido na plasticidade sináptica e no desenvolvimento da fala.",
		caracteristicas:
			"Mutações em SRPX2 estão ligadas a distúrbios da fala e autismo.",
		tags: ["plasticidade sináptica", "fala", "TEA"],
	},
	{
		nomeGene: "TCF4",
		descricao:
			"Regula a expressão de genes importantes para o desenvolvimento cerebral.",
		caracteristicas:
			"Mutações em TCF4 estão associadas à síndrome de Pitt-Hopkins, que pode causar TEA.",
		tags: ["desenvolvimento cerebral", "síndrome de Pitt-Hopkins", "TEA"],
	},
	{
		nomeGene: "POGZ",
		descricao:
			"Envolvido na organização da cromatina e no desenvolvimento neuronal.",
		caracteristicas:
			"Mutações em POGZ estão associadas a deficiências intelectuais e autismo.",
		tags: ["organização da cromatina", "desenvolvimento neuronal", "TEA"],
	},
	{
		nomeGene: "MBD5",
		descricao:
			"Codifica uma proteína que regula a expressão gênica e a estrutura da cromatina.",
		caracteristicas:
			"Mutações em MBD5 estão associadas ao autismo e deficiência intelectual.",
		tags: ["regulação gênica", "cromatina", "deficiência intelectual", "TEA"],
	},
	{
		nomeGene: "SETD5",
		descricao:
			"Codifica uma proteína envolvida na modificação da cromatina e regulação gênica.",
		caracteristicas:
			"Mutações em SETD5 estão fortemente associadas ao autismo e ao atraso no desenvolvimento.",
		tags: ["modificação da cromatina", "regulação gênica", "TEA"],
	},
	{
		nomeGene: "SATB2",
		descricao:
			"Envolvido no desenvolvimento craniofacial e no desenvolvimento neuronal.",
		caracteristicas:
			"Mutações em SATB2 estão associadas ao TEA e a dificuldades de aprendizado.",
		tags: [
			"desenvolvimento craniofacial",
			"dificuldades de aprendizado",
			"TEA",
		],
	},
	{
		nomeGene: "SYN1",
		descricao:
			"Codifica uma proteína sináptica envolvida na regulação da neurotransmissão.",
		caracteristicas: "Mutações em SYN1 estão ligadas a autismo e epilepsia.",
		tags: ["neurotransmissão", "sinapse", "epilepsia", "TEA"],
	},
	{
		nomeGene: "SCN1A",
		descricao: "Codifica um canal de sódio crucial para a função neuronal.",
		caracteristicas:
			"Mutações em SCN1A estão associadas ao autismo e a distúrbios convulsivos.",
		tags: ["canal de sódio", "convulsões", "neurodesenvolvimento", "TEA"],
	},
	{
		nomeGene: "DSCAM",
		descricao:
			"Envolvido no desenvolvimento do sistema nervoso e na formação de conexões sinápticas.",
		caracteristicas:
			"Mutações em DSCAM estão associadas a dificuldades de aprendizado e autismo.",
		tags: ["desenvolvimento do sistema nervoso", "conexões sinápticas", "TEA"],
	},

	{
		nomeGene: "BCL11A",
		descricao: "Envolvido no desenvolvimento do sistema nervoso central.",
		caracteristicas:
			"Mutações em BCL11A estão ligadas ao desenvolvimento neurológico e características de autismo.",
		tags: ["sistema nervoso central", "desenvolvimento neurológico", "TEA"],
	},
	{
		nomeGene: "SHANK2",
		descricao:
			"Codifica uma proteína que participa da estrutura das sinapses excitadoras.",
		caracteristicas:
			"Mutações em SHANK2 estão associadas ao autismo e atraso no desenvolvimento.",
		tags: ["sinapse", "neurodesenvolvimento", "TEA"],
	},
	{
		nomeGene: "SLC2A1",
		descricao:
			"Codifica um transportador de glicose através da barreira hematoencefálica.",
		caracteristicas:
			"Mutações podem causar epilepsia e estão associadas ao autismo.",
		tags: ["transportador de glicose", "epilepsia", "TEA"],
	},
	{
		nomeGene: "AUTS2",
		descricao: "Associado à regulação da expressão gênica no cérebro.",
		caracteristicas:
			"Alterações em AUTS2 estão ligadas ao autismo e atraso no desenvolvimento.",
		tags: ["expressão gênica", "desenvolvimento cerebral", "TEA"],
	},
	{
		nomeGene: "MBD1",
		descricao:
			"Envolvido na regulação da expressão gênica através da metilação do DNA.",
		caracteristicas:
			"Mutações em MBD1 podem afetar o desenvolvimento neuronal e estão associadas ao TEA.",
		tags: ["metilação do DNA", "regulação gênica", "TEA"],
	},
	{
		nomeGene: "AFF2",
		descricao:
			"Ligado ao cromossomo X e envolvido na regulação da transcrição.",
		caracteristicas:
			"Alterações em AFF2 estão associadas à deficiência intelectual e autismo.",
		tags: ["transcrição gênica", "deficiência intelectual", "TEA"],
	},
	{
		nomeGene: "CACNA1H",
		descricao:
			"Codifica um canal de cálcio tipo T envolvido na excitabilidade neuronal.",
		caracteristicas:
			"Mutações podem contribuir para a susceptibilidade ao autismo.",
		tags: ["canal de cálcio", "excitabilidade neuronal", "TEA"],
	},
	{
		nomeGene: "GABRB3",
		descricao:
			"Codifica uma subunidade do receptor GABA-A, importante para a neurotransmissão inibitória.",
		caracteristicas: "Alterações estão associadas ao autismo e epilepsia.",
		tags: ["neurotransmissão inibitória", "epilepsia", "TEA"],
	},
	{
		nomeGene: "CNTN4",
		descricao:
			"Envolvido na adesão celular e na formação de conexões sinápticas.",
		caracteristicas:
			"Mutações em CNTN4 estão ligadas ao autismo e atraso no desenvolvimento.",
		tags: ["adesão celular", "conexões sinápticas", "TEA"],
	},
	{
		nomeGene: "RELN",
		descricao:
			"Codifica uma proteína que regula a migração neuronal e o posicionamento durante o desenvolvimento cerebral.",
		caracteristicas:
			"Alterações no gene RELN estão associadas ao autismo e esquizofrenia.",
		tags: [
			"migração neuronal",
			"desenvolvimento cerebral",
			"TEA",
			"esquizofrenia",
		],
	},
	{
		nomeGene: "NEUREXIN1",
		descricao: "Participa na formação e manutenção de sinapses funcionais.",
		caracteristicas: "Deleções ou mutações estão associadas ao TEA.",
		tags: ["formação de sinapses", "manutenção sináptica", "TEA"],
	},
	{
		nomeGene: "SLC9A9",
		descricao: "Envolvido no transporte de íons e pH intracelular.",
		caracteristicas: "Mutações podem estar associadas ao autismo e TDAH.",
		tags: ["transporte de íons", "TDAH", "TEA"],
	},
	{
		nomeGene: "ASTN2",
		descricao: "Participa na migração neuronal e desenvolvimento do cérebro.",
		caracteristicas: "Variantes genéticas estão associadas ao autismo.",
		tags: ["migração neuronal", "desenvolvimento cerebral", "TEA"],
	},
	{
		nomeGene: "GABRA4",
		descricao: "Codifica uma subunidade do receptor GABA-A.",
		caracteristicas:
			"Alterações podem afetar a neurotransmissão inibitória e estão ligadas ao TEA.",
		tags: ["receptor GABA-A", "neurotransmissão", "TEA"],
	},
	{
		nomeGene: "MACROD2",
		descricao:
			"Função exata desconhecida, mas possivelmente envolvido na reparação do DNA.",
		caracteristicas: "Associado ao autismo em estudos genômicos.",
		tags: ["reparação do DNA", "genômica", "TEA"],
	},
	{
		nomeGene: "NTRK2",
		descricao:
			"Codifica um receptor de neurotrofina influenciando a sobrevivência neuronal.",
		caracteristicas: "Mutações podem estar associadas ao autismo.",
		tags: ["neurotrofinas", "sobrevivência neuronal", "TEA"],
	},
	{
		nomeGene: "IGF1R",
		descricao: "Receptor do fator de crescimento semelhante à insulina.",
		caracteristicas:
			"Alterações podem afetar o crescimento e desenvolvimento cerebral, associados ao TEA.",
		tags: ["fator de crescimento", "desenvolvimento cerebral", "TEA"],
	},
	{
		nomeGene: "CELF6",
		descricao: "Envolvido na regulação da expressão gênica no cérebro.",
		caracteristicas:
			"Mutações estão associadas a distúrbios do espectro autista.",
		tags: ["expressão gênica", "regulação neural", "TEA"],
	},
	{
		nomeGene: "NAV2",
		descricao: "Participa na migração e crescimento neuronal.",
		caracteristicas: "Alterações genéticas podem estar ligadas ao autismo.",
		tags: ["crescimento neuronal", "migração neuronal", "TEA"],
	},
	{
		nomeGene: "UBE2A",
		descricao: "Envolvido no processo de ubiquitinação de proteínas.",
		caracteristicas: "Mutações podem causar deficiência intelectual e autismo.",
		tags: ["ubiquitinação", "deficiência intelectual", "TEA"],
	},
	{
		nomeGene: "ZMYND11",
		descricao: "Regula a expressão gênica através da interação com histonas.",
		caracteristicas:
			"Mutações estão associadas ao atraso no desenvolvimento e autismo.",
		tags: ["expressão gênica", "histonas", "TEA"],
	},
	{
		nomeGene: "MED13L",
		descricao: "Faz parte do complexo mediador da transcrição gênica.",
		caracteristicas: "Alterações levam a distúrbios do desenvolvimento e TEA.",
		tags: ["transcrição gênica", "complexo mediador", "TEA"],
	},
	{
		nomeGene: "DYRK1A",
		descricao:
			"Enzima quinase importante no desenvolvimento neural. Regula processos celulares como proliferação e diferenciação.",
		caracteristicas:
			"Mutações em DYRK1A têm sido associadas ao TEA e atraso no desenvolvimento. Duplicações podem estar associadas ao autismo.",
		tags: ["proliferação celular", "atraso no desenvolvimento", "TEA"],
	},
	{
		nomeGene: "NAA15",
		descricao: "Envolvido na modificação pós-traducional de proteínas.",
		caracteristicas:
			"Mutações estão associadas ao autismo e atraso no desenvolvimento.",
		tags: ["modificação proteica", "pós-tradução", "TEA"],
	},
	{
		nomeGene: "SCN1B",
		descricao: "Subunidade auxiliar dos canais de sódio voltagem-dependentes.",
		caracteristicas: "Alterações podem causar epilepsia e autismo.",
		tags: ["canal de sódio", "epilepsia", "TEA"],
	},
	{
		nomeGene: "TRIP12",
		descricao:
			"Enzima E3 ubiquitina-ligase envolvida na degradação de proteínas.",
		caracteristicas: "Mutações associadas ao atraso no desenvolvimento e TEA.",
		tags: ["ubiquitina-ligase", "degradação proteica", "TEA"],
	},
	{
		nomeGene: "GRIK2",
		descricao: "Codifica um receptor cainato de glutamato.",
		caracteristicas:
			"Alterações podem afetar a neurotransmissão excitadora e estão ligadas ao autismo.",
		tags: ["receptor de glutamato", "neurotransmissão", "TEA"],
	},
	{
		nomeGene: "MYT1L",
		descricao: "Fator de transcrição específico de neurônios.",
		caracteristicas:
			"Mutações estão associadas a distúrbios neurológicos e TEA.",
		tags: ["fator de transcrição", "neurônios", "TEA"],
	},
	{
		nomeGene: "CDH9",
		descricao: "Codifica uma caderina envolvida na adesão celular.",
		caracteristicas:
			"Alterações podem afetar a formação de sinapses e estão associadas ao TEA.",
		tags: ["caderina", "adesão celular", "TEA"],
	},
	{
		nomeGene: "CDH10",
		descricao: "Também uma caderina envolvida na adesão celular neuronal.",
		caracteristicas: "Associada ao desenvolvimento do cérebro e TEA.",
		tags: ["adesão celular", "desenvolvimento cerebral", "TEA"],
	},
	{
		nomeGene: "NLGN1",
		descricao:
			"Codifica uma neuroligina envolvida na formação de sinapses excitadoras.",
		caracteristicas: "Mutações podem contribuir para o autismo.",
		tags: ["neuroligina", "sinapses", "TEA"],
	},
	{
		nomeGene: "SLC25A12",
		descricao: "Transportador mitocondrial de aspartato-glutamato.",
		caracteristicas:
			"Alterações estão ligadas ao metabolismo energético e TEA.",
		tags: ["mitocôndria", "metabolismo energético", "TEA"],
	},
	{
		nomeGene: "FMR1",
		descricao:
			"Está relacionado à síndrome do X frágil, uma condição que pode causar autismo.",
		caracteristicas:
			"Mutações no FMR1 levam a deficiência intelectual e características do TEA.",
		tags: [
			"síndrome do X frágil",
			"deficiência intelectual",
			"déficits cognitivos",
			"TEA",
		],
	},
	{
		nomeGene: "BCKDK",
		descricao: "Envolvido no metabolismo de aminoácidos de cadeia ramificada.",
		caracteristicas: "Deficiências podem estar associadas ao TEA.",
		tags: ["metabolismo de aminoácidos", "TEA"],
	},
	{
		nomeGene: "HDAC4",
		descricao:
			"Histona desacetilase envolvida na regulação da expressão gênica.",
		caracteristicas:
			"Alterações podem afetar o desenvolvimento neuronal e estão ligadas ao autismo.",
		tags: ["desacetilação de histonas", "expressão gênica", "TEA"],
	},
	{
		nomeGene: "PTCHD1",
		descricao:
			"Receptor de sinalização sonic hedgehog. Envolvido na sinalização celular durante o desenvolvimento neuronal.",
		caracteristicas:
			"Mutações em PTCHD1 estão ligadas ao autismo e deficiência intelectual em homens.",
		tags: ["sinalização celular", "TEA"],
	},
	{
		nomeGene: "RPL10",
		descricao: "Proteína ribossomal envolvida na síntese proteica.",
		caracteristicas: "Mutações podem causar deficiência intelectual e autismo.",
		tags: ["síntese proteica", "deficiência intelectual", "TEA"],
	},
	{
		nomeGene: "NHE9",
		descricao: "Transportador de prótons envolvido no pH intracelular.",
		caracteristicas: "Alterações estão ligadas ao autismo.",
		tags: ["transporte de prótons", "pH intracelular", "TEA"],
	},
	{
		nomeGene: "FUT8",
		descricao: "Enzima envolvida na glicosilação de proteínas.",
		caracteristicas:
			"Deficiência pode levar a distúrbios do desenvolvimento e TEA.",
		tags: ["glicosilação", "desenvolvimento", "TEA"],
	},
	{
		nomeGene: "GIGYF2",
		descricao: "Interage com fatores de crescimento e sinalização de insulina.",
		caracteristicas: "Alterações podem estar associadas ao autismo.",
		tags: ["fatores de crescimento", "sinalização de insulina", "TEA"],
	},
	{
		nomeGene: "IMMP2L",
		descricao: "Envolvido na importação de proteínas mitocondriais.",
		caracteristicas:
			"Mutações estão associadas a distúrbios neurológicos e TEA.",
		tags: ["mitocôndria", "importação proteica", "TEA"],
	},
	{
		nomeGene: "DPP6",
		descricao: "Modula canais de potássio em neurônios.",
		caracteristicas: "Alterações estão ligadas ao autismo e epilepsia.",
		tags: ["canais de potássio", "epilepsia", "TEA"],
	},
	{
		nomeGene: "SRGAP3",
		descricao: "Envolvido na migração e morfologia neuronal.",
		caracteristicas: "Mutações podem contribuir para o TEA.",
		tags: ["morfologia neuronal", "migração", "TEA"],
	},
	{
		nomeGene: "GABRG3",
		descricao:
			"Subunidade do receptor GABA-A, importante para a neurotransmissão inibitória.",
		caracteristicas: "Alterações estão associadas ao autismo.",
		tags: ["receptor GABA-A", "neurotransmissão", "TEA"],
	},
	{
		nomeGene: "ITGB3",
		descricao: "Codifica uma integrina envolvida na adesão celular.",
		caracteristicas: "Associado ao autismo e regulação da serotonina.",
		tags: ["integrina", "adesão celular", "serotonina", "TEA"],
	},
	{
		nomeGene: "MET",
		descricao: "Receptor de fator de crescimento hepatócito.",
		caracteristicas: "Variantes estão associadas ao autismo.",
		tags: ["fator de crescimento", "sinalização celular", "TEA"],
	},
	{
		nomeGene: "NRG3",
		descricao: "Neuregulina envolvida no desenvolvimento do sistema nervoso.",
		caracteristicas: "Alterações podem estar associadas ao TEA.",
		tags: ["desenvolvimento nervoso", "neuregulina", "TEA"],
	},
	{
		nomeGene: "SEMA5A",
		descricao: "Semaforina envolvida na orientação axonal.",
		caracteristicas: "Níveis reduzidos estão associados ao autismo.",
		tags: ["orientação axonal", "semaforina", "TEA"],
	},
	{
		nomeGene: "SORCS1",
		descricao: "Envolvido no tráfego de proteínas e sinalização neuronal.",
		caracteristicas: "Mutações podem estar ligadas ao autismo.",
		tags: ["tráfego proteico", "sinalização neuronal", "TEA"],
	},
	{
		nomeGene: "NOS1AP",
		descricao: "Interage com a sintase de óxido nítrico neuronal.",
		caracteristicas: "Alterações associadas a distúrbios psiquiátricos e TEA.",
		tags: ["óxido nítrico", "sinalização neuronal", "TEA"],
	},
	{
		nomeGene: "EHMT1",
		descricao: "Metiltransferase envolvida na modificação de histonas.",
		caracteristicas:
			"Mutações causam síndrome de Kleefstra, associada ao autismo.",
		tags: ["metilação de histonas", "síndrome de Kleefstra", "TEA"],
	},
	{
		nomeGene: "UBE2I",
		descricao: "Envolvido na sumoilação de proteínas.",
		caracteristicas:
			"Alterações podem afetar a função proteica e estão ligadas ao TEA.",
		tags: ["sumoilação", "função proteica", "TEA"],
	},
	{
		nomeGene: "KCTD13",
		descricao:
			"Função não totalmente elucidada, mas deletado em algumas duplicações associadas ao autismo.",
		caracteristicas: "Alterações genéticas nesta região estão ligadas ao TEA.",
		tags: ["alterações genéticas", "duplicações cromossômicas", "TEA"],
	},
	{
		nomeGene: "MIR137",
		descricao: "MicroRNA envolvido na regulação da expressão gênica.",
		caracteristicas:
			"Variantes estão associadas à esquizofrenia e possivelmente ao autismo.",
		tags: ["microRNA", "regulação gênica", "TEA"],
	},
	{
		nomeGene: "RIMS1",
		descricao: "Participa na liberação de neurotransmissores nas sinapses.",
		caracteristicas:
			"Mutações podem afetar a neurotransmissão e estão associadas ao autismo.",
		tags: ["liberação de neurotransmissores", "sinapse", "TEA"],
	},
	{
		nomeGene: "TSNARE1",
		descricao: "Envolvido na fusão de vesículas sinápticas.",
		caracteristicas: "Alterações podem contribuir para o TEA.",
		tags: ["vesículas sinápticas", "fusão de membranas", "TEA"],
	},
	{
		nomeGene: "VIPR2",
		descricao: "Receptor de peptídeo intestinal vasoativo.",
		caracteristicas: "Duplicações podem estar associadas ao autismo.",
		tags: ["receptor", "sinalização celular", "TEA"],
	},
	{
		nomeGene: "ZNF804A",
		descricao: "Fator de transcrição associado a transtornos psiquiátricos.",
		caracteristicas:
			"Variantes estão associadas à esquizofrenia e possivelmente ao autismo.",
		tags: ["fator de transcrição", "transtornos psiquiátricos", "TEA"],
	},
	{
		nomeGene: "RBFOX1",
		descricao: "Envolvido na regulação do splicing de RNA em neurônios.",
		caracteristicas: "Mutações estão associadas a epilepsia e TEA.",
		tags: ["splicing de RNA", "neurônios", "TEA"],
	},
	{
		nomeGene: "TAOK2",
		descricao: "Quinase envolvida no desenvolvimento neuronal.",
		caracteristicas: "Alterações genéticas podem estar associadas ao autismo.",
		tags: ["desenvolvimento neuronal", "quinase", "TEA"],
	},
	{
		nomeGene: "C3orf58",
		descricao: "Agora conhecido como KIAA2022, ligado ao cromossomo X.",
		caracteristicas:
			"Mutações causam deficiência intelectual e estão associadas ao TEA.",
		tags: ["deficiência intelectual", "cromossomo X", "TEA"],
	},
	{
		nomeGene: "CUL3",
		descricao: "Parte de um complexo ubiquitina-ligase E3.",
		caracteristicas:
			"Alterações estão ligadas a transtornos do neurodesenvolvimento e autismo.",
		tags: ["ubiquitinação", "neurodesenvolvimento", "TEA"],
	},
	{
		nomeGene: "TCF20",
		descricao: "Fator de transcrição que regula a expressão gênica.",
		caracteristicas:
			"Mutações estão associadas ao atraso no desenvolvimento e TEA.",
		tags: ["fator de transcrição", "expressão gênica", "TEA"],
	},
	{
		nomeGene: "SNRPN",
		descricao: "Envolvido na regulação do splicing de RNA.",
		caracteristicas:
			"Parte da região deletada na síndrome de Prader-Willi, associada ao autismo.",
		tags: ["splicing de RNA", "síndrome de Prader-Willi", "TEA"],
	},
	{
		nomeGene: "MAGEL2",
		descricao:
			"Expressa no hipotálamo e relacionada à regulação do ritmo circadiano.",
		caracteristicas:
			"Mutações estão associadas à síndrome de Schaaf-Yang e TEA.",
		tags: ["ritmo circadiano", "síndrome de Schaaf-Yang", "TEA"],
	},
	{
		nomeGene: "CNTN6",
		descricao: "Envolvido na adesão celular e desenvolvimento neuronal.",
		caracteristicas: "Alterações genéticas estão associadas ao autismo.",
		tags: ["adesão celular", "desenvolvimento neuronal", "TEA"],
	},
	{
		nomeGene: "L1CAM",
		descricao: "Importante para a migração neuronal e crescimento axonal.",
		caracteristicas:
			"Mutações causam distúrbios neurológicos e podem estar associadas ao TEA.",
		tags: ["migração neuronal", "crescimento axonal", "TEA"],
	},
	{
		nomeGene: "PAK2",
		descricao: "Enzima que regula a morfologia e motilidade celular.",
		caracteristicas:
			"Alterações podem afetar o desenvolvimento cerebral e estão ligadas ao autismo.",
		tags: ["morfologia celular", "desenvolvimento cerebral", "TEA"],
	},
	{
		nomeGene: "MARK2",
		descricao: "Envolvido na estabilização de microtúbulos em neurônios.",
		caracteristicas: "Mutações podem contribuir para o TEA.",
		tags: ["microtúbulos", "estabilização celular", "TEA"],
	},
	{
		nomeGene: "DIP2A",
		descricao:
			"Participa no desenvolvimento neuronal e plasticidade sináptica.",
		caracteristicas: "Alterações estão associadas ao autismo.",
		tags: ["plasticidade sináptica", "desenvolvimento neuronal", "TEA"],
	},
	{
		nomeGene: "ANKRD11",
		descricao: "Regula a expressão gênica e está associado à síndrome KBG.",
		caracteristicas:
			"Mutações estão ligadas ao autismo e atraso no desenvolvimento.",
		tags: ["expressão gênica", "síndrome KBG", "TEA"],
	},
	{
		nomeGene: "FAN1",
		descricao: "Enzima envolvida na reparação do DNA.",
		caracteristicas:
			"Alterações podem estar associadas a distúrbios do neurodesenvolvimento e TEA.",
		tags: ["reparação do DNA", "neurodesenvolvimento", "TEA"],
	},
	{
		nomeGene: "PTPRD",
		descricao: "Receptor fosfatase envolvido na formação sináptica.",
		caracteristicas: "Mutações estão associadas ao autismo e TDAH.",
		tags: ["formação sináptica", "TDAH", "TEA"],
	},
	{
		nomeGene: "CACNA2D3",
		descricao: "Subunidade auxiliar dos canais de cálcio voltagem-dependentes.",
		caracteristicas: "Alterações estão associadas ao TEA.",
		tags: ["canal de cálcio", "sinalização neuronal", "TEA"],
	},
	{
		nomeGene: "SYT1",
		descricao: "Participa na exocitose de vesículas sinápticas.",
		caracteristicas:
			"Mutações podem afetar a neurotransmissão e estão ligadas ao autismo.",
		tags: ["exocitose", "vesículas sinápticas", "TEA"],
	},
	{
		nomeGene: "CELSR3",
		descricao:
			"Envolvido na orientação planar celular e desenvolvimento neuronal.",
		caracteristicas: "Alterações podem contribuir para o TEA.",
		tags: ["orientação celular", "desenvolvimento neuronal", "TEA"],
	},
	{
		nomeGene: "GRIA2",
		descricao: "Codifica uma subunidade do receptor AMPA de glutamato.",
		caracteristicas:
			"Alterações podem afetar a neurotransmissão excitadora e estão associadas ao autismo.",
		tags: ["receptor AMPA", "glutamato", "TEA"],
	},
	{
		nomeGene: "ELP4",
		descricao:
			"Parte do complexo de elongação transcricional RNA polimerase II.",
		caracteristicas: "Associado a epilepsia rolândica e possivelmente ao TEA.",
		tags: ["transcrição gênica", "epilepsia", "TEA"],
	},
	{
		nomeGene: "TRIO",
		descricao:
			"Atua na sinalização intracelular para regulação do citoesqueleto.",
		caracteristicas:
			"Mutações estão associadas ao atraso no desenvolvimento e autismo.",
		tags: ["sinalização intracelular", "citoesqueleto", "TEA"],
	},
	{
		nomeGene: "CACNA1E",
		descricao: "Codifica um canal de cálcio tipo R em neurônios.",
		caracteristicas: "Alterações podem estar associadas ao autismo.",
		tags: ["canal de cálcio", "neurônios", "TEA"],
	},
	{
		nomeGene: "TENM1",
		descricao: "Envolvido na formação de conexões neurais.",
		caracteristicas: "Alterações genéticas podem contribuir para o TEA.",
		tags: ["conexões neurais", "desenvolvimento cerebral", "TEA"],
	},
	{
		nomeGene: "ADGRL3",
		descricao: "Receptor acoplado à proteína G envolvido na adesão celular.",
		caracteristicas:
			"Variantes estão associadas ao TDAH e possivelmente ao autismo.",
		tags: ["adesão celular", "receptor GPCR", "TEA"],
	},
	{
		nomeGene: "PLCB1",
		descricao: "Enzima envolvida na transdução de sinal intracelular.",
		caracteristicas: "Mutações estão associadas à epilepsia e TEA.",
		tags: ["transdução de sinal", "epilepsia", "TEA"],
	},
	{
		nomeGene: "KCNQ3",
		descricao: "Canal de potássio importante para a excitabilidade neuronal.",
		caracteristicas:
			"Alterações estão ligadas a convulsões e possivelmente ao autismo.",
		tags: ["canal de potássio", "excitabilidade neuronal", "TEA"],
	},
	{
		nomeGene: "GRID2",
		descricao: "Receptor de glutamato do tipo delta.",
		caracteristicas:
			"Mutações podem afetar a função cerebelar e estão associadas ao TEA.",
		tags: ["receptor de glutamato", "cerebelo", "TEA"],
	},
	{
		nomeGene: "GRIN1",
		descricao: "Subunidade essencial do receptor NMDA.",
		caracteristicas: "Alterações podem levar a distúrbios neurológicos e TEA.",
		tags: ["receptor NMDA", "neurotransmissão", "TEA"],
	},
	{
		nomeGene: "TBR1",
		descricao: "Fator de transcrição crucial para o desenvolvimento cortical.",
		caracteristicas: "Mutações estão associadas ao autismo severo.",
		tags: ["desenvolvimento cortical", "fator de transcrição", "TEA"],
	},
	{
		nomeGene: "ADNP2",
		descricao:
			"Relacionado ao ADNP, possivelmente envolvido no desenvolvimento neuronal.",
		caracteristicas: "Alterações podem estar associadas ao autismo.",
		tags: ["desenvolvimento neuronal", "TEA"],
	},
	{
		nomeGene: "FOXP2",
		descricao:
			"Envolvido no desenvolvimento das habilidades de fala e linguagem.",
		caracteristicas:
			"Mutações no FOXP2 estão associadas a distúrbios de linguagem e possivelmente ao autismo (TEA).",
		tags: ["fala", "linguagem", "distúrbios de fala", "TEA"],
	},
	{
		nomeGene: "GABRB1",
		descricao: "Subunidade do receptor GABA-A.",
		caracteristicas:
			"Alterações podem afetar a neurotransmissão inibitória e estão ligadas ao autismo.",
		tags: ["neurotransmissão", "receptor GABA-A", "TEA"],
	},
	{
		nomeGene: "SEZ6L2",
		descricao: "Envolvido na sinaptogênese e função sináptica.",
		caracteristicas: "Mutações estão associadas ao autismo.",
		tags: ["sinaptogênese", "função sináptica", "TEA"],
	},
	{
		nomeGene: "CNTNAP4",
		descricao:
			"Membro da família neurexina, importante para a comunicação neuronal.",
		caracteristicas: "Alterações podem contribuir para o TEA.",
		tags: ["comunicação neuronal", "neurexina", "TEA"],
	},
	{
		nomeGene: "AVPR1A",
		descricao:
			"Receptor de vasopressina tipo 1A, envolvido na regulação do comportamento social e de empatia.",
		caracteristicas:
			"Associado a transtornos do espectro autista e a variabilidade em comportamentos sociais. Mutação nesse gene pode estar relacionada à uma maior sensibilidade sensorial, incluindo a sensibilidade auditiva.",
		tags: ["vasopressina", "comportamento social", "empatia", "TEA"],
	},
	{
		nomeGene: "DRD4",
		descricao:
			"Receptor de dopamina D4, que está envolvido na regulação do sistema de recompensa e comportamento impulsivo.",
		caracteristicas:
			"Associado a comportamentos de risco, transtornos de déficit de atenção e hiperatividade (TDAH), e a variações no comportamento social, gerando hiperfoco em atividades de interesse específico ou fixação em detalhes.",
		tags: ["dopamina", "comportamento impulsivo", "TDAH", "recompensa", "hiperfoco"],
	},
];
