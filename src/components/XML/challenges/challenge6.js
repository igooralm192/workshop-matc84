const challengeTitle = 'Noite Estrelada ★★';

const challenge6 = {
    title: challengeTitle,
    steps: [
        {
            title: challengeTitle,
            subtitle: "Noite Estrelada",
            description: `Nesse desafio você irá modificar o código da etapa anterior, transformando
            o dia ensolarado em uma noite estrelada. Se não tiver salvo, você pode usar o modelo disponível
            em http://dontpad.com/workshop-matc4-bluesky . Boa sorte!`,
            expectedResult: `
            <data>
                <background color="midnightblue" />
                <circle x="-80" y="-20" r="2" color="white" />
                <circle x="120" y="100" z="1" r="2" color="white" />
                <circle x="-200" y="80" z="1" r="2" color="white" />
                <circle x="120" y="-150" z="1" r="2" color="white" />
                <circle x="200" y="80" r="100" color="white" />
                <circle x="130" y="80" r="100" color="midnightblue" />
                <circle r="50" color="lightblue">
                    <children>
                        <circle y="-10" x="-45" r="35" color="lightblue" />
                        <circle y="-10" x="45" r="35" color="lightblue" />
                    </children>
                    
                    <transformations>
                        <translate x="-200" y="-150" />
                    </transformations>
                </circle>
                
                <circle r="50" color="lightblue">
                    <children>
                        <circle y="-10" x="-45" r="35" color="lightblue" />
                        <circle y="-10" x="45" r="35" color="lightblue" />
                    </children>
                    
                    <transformations>
                        <translate x="250" y="-45" />
                    </transformations>
                </circle>
                
                    
                <circle r="50" color="lightblue">
                    <children>
                        <circle y="-10" x="-45" r="35" color="lightblue" />
                        <circle y="-10" x="45" r="35" color="lightblue" />
                    </children>
                    <transformations>
                        <translate x="-380" y="125" />
                    </transformations>
                </circle>
            </data>
            `,
            initProperties: {}
        },        
    ],
    path: "/xml/starrynight"
}

export default challenge6