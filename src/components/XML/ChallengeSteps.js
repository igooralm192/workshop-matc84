const challengeTitle = 'XML Challenge';

const xmlChallengeSteps = [
	{
		title: challengeTitle,
		subtitle: 'Tudo tem um início',
		description: `Crie uma tag "data", sem nenhum atributo. Essa será a tag raiz.
			Quando terminar, clique em "Próxima" para avançar para próxima etapa.`,
		initProperties: {} 
	},
	{
		title: challengeTitle,
		subtitle: 'Sua primeira forma',
		description: `Dentro da tag "data", crie uma tag rect, com os seguintes atributos:
			x: 0, y: 0, w: 300, h: 300`,
		initProperties: {} 
	},
	{
		title: challengeTitle,
		subtitle: 'Um pouco mais de cor',
		description: `Adicione um atributo "color" em rect, 
			com o valor "red", "yellow", "blue", ou outra cor da sua preferência!`,
		initProperties: {} 
	}
];

export default xmlChallengeSteps;
