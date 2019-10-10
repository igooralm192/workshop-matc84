const challengeTitle = 'Carregando ★★★★';

const challenge9 = {
    title: challengeTitle,
    steps: [
        {
            title: challengeTitle,
            subtitle: "Carregando...",
            description: `Nesse desafio você deve utilizar todos os conceitos que viu
                até aqui para criar uma animação de carregando, vista a direita. Esse é o último desafio.
                Esperamos que tenha gostado do ArtsyXML!`,
            expectedResult: `
            <data>
                <circle x="0" y="0" r="210" color="lightblue">
                <children>
                        <circle x="60" y="30" r="270" z="1" color="white">
                            <transformations>
                                <orbit speed="20" />
                            </transformations>
                        </circle>
                    </children>
                </circle>
                
                <rect x="0" y="0" w="60" h="60" z="2" color="lightblue">
                    <transformations>
                        <rotate speed="30" />
                    </transformations>
                </rect>

            </data>`,
            initProperties: {}
        } 
    ],
    path: "/xml/loading"
}

export default challenge9