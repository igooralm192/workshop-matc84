const challengeTitle = 'Sistema Solar';

const challenge7 = {
    title: challengeTitle,
    steps: [
        {
            title: challengeTitle,
            subtitle: "Animações",
            description: `Essa é o último desafio guiado, e por esse motivo
                separamos o recurso mais interessante pra ele: animações. Além
                das transformações estáticas que você conheceu (translate e tilt),
                elas também podem ser dinâmicas, e serão o foco desse desafio. 
                Vamos usá-las para criar a terra orbitando ao redor do sol.
                Avance para a próxima etapa para iniciar!`,
            initProperties: {}
        },  
        {
            title: challengeTitle,
            subtitle: "A Pale Blue Dot",
            description: `Inicie adicionando um fundo preto (black), que será o
                nosso espaço, e o sol, um círculo amarelo de raio 30. Adicione também 
                a terra, um círculo azul, com x = 200 e raio 10.
                `,
            initProperties: {}
        },       
        {
            title: challengeTitle,
            subtitle: "Lua",
            description: ``,
            initProperties: {}
        }, 
    ],
    path: "/xml/solarsystem"
}

export default challenge7