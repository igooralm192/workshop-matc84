const challengeTitle = 'Dia Ensolarado';

const challenge5 = {
    title: challengeTitle,
    steps: [
        {
            title: challengeTitle,
            subtitle: "Céu",
            description: `Como agora você é um profissional certificado do ArtsyXML, 
                as instruções não precisarão ser tão extensas! Nesse desafio, iremos criar
                um dia ensolarado. Para criar o ceú, adicione um fundo azul claro (lightblue)`,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Sol",
            description: `Pra criar o sol, adicione um círculo amarelo na posição (200, 50) 
                com raio 100.`,
            initProperties: {}
        },   
        {
            title: challengeTitle,
            subtitle: "Nuvem",
            description: `O que poderia adicionar um pouco mais de vida a esse céu? Nuvens!
            Para isso, você utilizará um novo de recurso: children (filhos/as). Com a tag
            children é possível fazer com que formas sejam filhas de outras. Dessa maneira,
            todos os transforms feitos na forma pai afetarão também os filhos. Para começar 
            a usar <children> crie um círculo branco com raio 50, ela será a base da nuvem.
            Após isso, adicione uma tag children como filha desse círculo. A estrutura deve
            ser <circle> <children> </children> <circle>
            Avançe para a próxima etapa para os próximos passos.`,
            initProperties: {}
        }, 
        {
            title: challengeTitle,
            subtitle: "Filhos",
            description: `Pra adicionar uma forma como filha de outra é simples: basta criá-las
            dentro da tag children. Adicione dois filhos ao círculo branco, ambos círculos brancos
            com raio 40, um na posição (-40, -5) e o outro na posição (40, -5).`,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Movendo em Grupo",
            description: `Como mencionado anteriormente, a maior vantagem da tag children é
                que transformations aplicados a forma pai afetam também todos os seus filhos.
                Portanto, não existe melhor momento pra apresentar um novo transformation:
                traslate! Essa transformação translada uma forma nas coordenadas x e y, e portanto
                recebe esses dois atributos. Como os três círculos pertencem a mesma nuvem, nada mais
                apropriado que as transformações afetem os 3 ao mesmo tempo! Avance para a próxima etapa
                para aplicar sua primeira translação.`,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Translação",
            description: `Vamos posicionar a nuvem em uma posição mais harmoniosa. Para transladar
                a nuvem, primeiro adicione uma tag transformations dentro do círculo pai. Dentro da
                tag transformations, adicione uma tag <translate> com os atributos x="-300" e y="50".`,
            initProperties: {}
        },
        ,
        {
            title: challengeTitle,
            subtitle: "Mais nuvens",
            description: `O que achou? É mais simples do que ter que posicionar cada círculo isoladamente.
                Além disso, se torna mais fácil criar uma outra nuvem em outro lugar do céu! Para criar
                outra nuvem, copie o código da primera (a tag circle incluindo todas as tags filhas) e cole
                no editor. Altere as propriedades x e y translate, e você terá uma nova nuvem no céu! Se quiser,
                cria mais nuvens para preencher o céu.`,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Recapitulando",
            description: `Nesse desafio você conheceu a tag <children> (usada para adicionar filhos
                a formas, fazendo com que recebam as mesmas transformações do pai) e a transformação 
                translate, que move formas na tela. A tag children é útil para agrupar formas. No
                próximo desafio você vai fazer refinamentos no código dessa etapa. Até lá!`,
            initProperties: {}
        }                
    ],
    path: "/xml/sunnyday"
}

export default challenge5