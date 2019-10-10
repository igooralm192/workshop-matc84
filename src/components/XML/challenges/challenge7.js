const challengeTitle = 'Sistema Solar';

const challenge7 = {
    title: challengeTitle,
    steps: [
        {
            title: challengeTitle,
            subtitle: "Animações",
            description: `Esse é o último desafio guiado, e por esse motivo
                separamos o recurso mais interessante pra ele: animações. Além
                das transformações estáticas que você conheceu (translate e tilt),
                elas também podem ser dinâmicas, e serão o foco desse desafio. 
                Vamos usá-las para criar a terra orbitando ao redor do sol.
                Avance para a próxima etapa para iniciar!`,
            expectedResult: `
                <data>
                </data>
            `,
            initProperties: {}
        },  
        {
            title: challengeTitle,
            subtitle: "O Sol",
            description: `Inicie adicionando um fundo preto (black), que será o
                nosso espaço, e o sol, um círculo amarelo de raio 30. 
                `,
            expectedResult: `
                <data>
                    <!-- Sky -->
                    <background color="black" />
                    
                    <!-- Sun -->
                    <circle r="30" color="yellow" />
                </data>
            `,
            initProperties: {}
        },       
        {
            title: challengeTitle,
            subtitle: "A Pale Blue Dot",
            description: `Ao adicionar a terra, utilizaremos o recurso children;
                dessa forma, podemos aplicar transformações em relação ao sol que afetarão
                a terra. Portanto, dentro da tag representando o sol, adicione uma 
                tag children, e dentro dela um círculo representando a terra, da cor 
                azul, com x = 200 e raio 10.`,
            expectedResult: `
                <data>
                <!-- Sky -->
                <background color="black" />
                
                <!-- Sun -->
                <circle r="30" color="yellow">
                    <children>
                    <!--Earth-->
                        <circle x="200" r="10" color="blue">
                        </circle>
                    </children>
                </circle>
                </data>
            `,
            initProperties: {}
        },       
        {
            title: challengeTitle,
            subtitle: "A Lua",
            description: `De forma similar, adicione a lua como filha da terra.
            Ela tem raio 3, cor branca e tem x = 180`,
            expectedResult: `
                <data>
                <background color="black" />
                <circle r="30" color="yellow">
                    <children>
                    <circle x="200" r="10" color="blue">
                        <children>
                            <circle x="180" r="3" color="white" />
                        </children>
                    </circle>
                    </children>
                </circle>
                </data>
            `,
            initProperties: {}
        },      
        {
            title: challengeTitle,
            subtitle: "Orbitando o Sol",
            description: `Com todas as formas em seu lugar, podemos finalmente 
                implementar as animações! Primeiro vamos fazer terra e lua orbitarem ao
                redor do sol. Para isso vamos utilizar o transformation <orbit>.
                <orbit> faz com o que uma forma orbite ao redor do seu pai, e recebe
                o atributo speed, que determina a velocidade da órbita. Para fazer
                a terra orbitar ao redor do pai, adicione o transformation orbit na terra com
                velocidade 2.`,
            expectedResult: `
                <data>
                <background color="black" />
                <circle r="30" color="yellow">
                    <children>
                    <circle x="200" r="10" color="blue">
                        <children>
                            <circle x="180" r="3" color="white" />
                        </children>
                        <transformations>
                            <orbit speed="2" />
                        </transformations>
                    </circle>
                    </children>
                </circle>
                </data>
            `,
            initProperties: {}
        }, 
        {
            title: challengeTitle,
            subtitle: "Orbitando a Terra",
            description: `Bem melhor, né? Mas você deve ter percebido algo estranho.
                A lua está fixa em relação a terra, enquanto ela deveria estar orbitando-a.
                Para adicionar essa propriedade, iremos adicionar uma nova transformation:
                <rotate>. <rotate> faz com que uma forma rotacione ao redor do seu próprio
                eixo, e recebe speed como argumento, a velocidade de rotação. Se aplicarmos
                um <rotate> na terra, como a lua é sua filha, ela irá rotacionar ao redor
                da terra! Portanto, adicione um transformation <rotate> na terra, com velocidade 4.`,
            expectedResult: `
                <data>
                <background color="black" />
                <circle r="30" color="yellow">
                    <children>
                    <circle x="200" r="10" color="blue">
                        <children>
                            <circle x="180" r="3" color="white" />
                        </children>
                        <transformations>
                            <orbit speed="2" />
                            <rotate speed="4" />
                        </transformations>
                    </circle>
                    </children>
                </circle>
                </data>
            `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Recapitulando",
            description: `Perfeito! Nessa última etapa você aprendeu como criar animações nas
                formas utilizando os transformations <rotate> e <orbit>. No próximo desafio você
                irá fazer adicionar mais planetas do sistema solar. Até lá!`,
            expectedResult: `
                <data>
                <background color="black" />
                <circle r="30" color="yellow">
                    <children>
                    <circle x="200" r="10" color="blue">
                        <children>
                            <circle x="180" r="3" color="white" />
                        </children>
                        <transformations>
                            <orbit speed="2" />
                            <rotate speed="4" />
                        </transformations>
                    </circle>
                    </children>
                </circle>
                </data>
            `,
            initProperties: {}
        },
    ],
    path: "/xml/solarsystem"
}

export default challenge7