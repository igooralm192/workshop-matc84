const challengeTitle = 'XML Challenge'

const challenge1 = {
    title: "Introdução",
    steps: [
        {
            title: challengeTitle, subtitle: "Apresentação",
            description: `Bem vindo ao desafio XML! Nele você ira utilizar o ArtsyXML, 
            uma ferramenta desenvolvida pela equipe capaz de criar figuras utilizando XML. Para começar, clique em próxima.`
        },
        {
            title: challengeTitle, subtitle: 'Tudo tem um início', 
            description: `O primeiro passo é criar tag raiz do editor, dentro dela estarão todas as tags que comporão
                as suas imagens. O ArsyXML requer uma tag raiz chamada data. Para começar, adicione a tag <data> 
                ao editor. Não esqueça de fechá-la com o seu par </data>! Clique em próxima quando estiver pronto para continuar.`,
            initProperties: {} 
        },
        {
            title: challengeTitle,
            subtitle: 'Sua primeira forma',
            description: `Ótimo! Podemos começar de verdade. Dentro da tag "data", crie uma tag rect, com os seguintes atributos:
                w: 100, h: 100. w e h representam o comprimento (width) e altura (height) do retângulo, respectivamente.`,
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
        {
            title: challengeTitle,
            subtitle: 'Próximas etapas',
            description: `Bom trabalho! Para seguir para a próxima etapa, abra a barra lateral, e no item XML
            selecione o desafio 2.`,
            initProperties: {} 
        }
    ],
    path: "/xml/introduction"
}

export default challenge1