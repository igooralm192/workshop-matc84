const challengeTitle = 'XML Challenge';

const XMLChallenges = [
{
	title: "Introdução",
	steps: [ 
		{ 
			title: challengeTitle, subtitle: 'Tudo tem um início', description: `Crie uma tag "data", sem nenhum atributo. Essa será a tag raiz.
				Quando terminar, clique em "Próxima" para avançar para próxima etapa.`,
			initProperties: {} 
		},
		{
			title: challengeTitle,
			subtitle: 'Sua primeira forma',
			description: `Ótimo! Agora, dentro da tag "data", crie uma tag rect, com os seguintes atributos:
				w: 100, h: 100. w e h representam o comprimento (width) e altura (height) do retângulo, respectivamente`,
			initProperties: {} 
		},
		{
			title: challengeTitle,
			subtitle: 'Um pouco de cor',
			description: `Um pouco sem graça, não? Para adicionar um pouco mais de cor, 
				adicione um atributo "color" dentro da tag rect, com o valor "red", "yellow", "blue", ou outra cor da sua preferência!`,
			initProperties: {} 
		},
		{
			title: challengeTitle,
			subtitle: 'Maior controle artístico',
			description: `É possível controlar a posição das formas dentro do quadro!
				Os atributos x e y definem a posição do centro da sua figura.\n Pense 
				no quadro como o plano cartesiano, com a origem (0, 0) posicionada no centro.
				Para posicionar o seu retângulo no canto direito, adicione os atributos x: 350, y: -170. A tag rect.`,
			initProperties: {} 
		},
	],
	path: "/xml/introduction"
},
{
	title: "Dia Ensolarado",	
	steps: [
		{
			title: "TESTE1", subtitle: "TESTE2",
			description: "TESTE3",
			initProperties: {} 
		},
		{
			title: "TESTE1",
			subtitle: "TESTE2",
			description: "TESTE3",
			initProperties: {} 
		}
		],
	path: "/xml/teste2"
	
}
];

export default XMLChallenges;
