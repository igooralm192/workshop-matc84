const challengeTitle = 'Óculos ★';

const challenge4 = {
    title: challengeTitle,
    steps: [
        {
            title: challengeTitle,
            subtitle: "Óculos",
            description: `O desafio é reproduzir a figura à direita utilizando os elementos vistos nas
                etapas anteriores. A referência dos comandos estão nos slides da apresentação. 
                Boa sorte!`,
            expectedResult: `
                <data>
                    <circle x="-80" y="0" r="50" color="blue" />
                    <circle x="80" y="0" r="50" color="blue" />
                    <circle x="-80" y="0" r="45" color="white" />
                    <circle x="80" y="0" r="45" color="white" />
                    <rect x="0" y="0" w="70" h="10" color="blue"  />
                    <rect x="-135" y="60" w="150" h="7" color="red" >
                        <transformations>
                            <tilt angle="100" />
                        </transformations>
                    </rect>
                    <rect x="135" y="60" w="150" h="7" color="red" >
                        <transformations>
                            <tilt angle="-100" />
                        </transformations>
                    </rect>
                </data>
            `,
            initProperties: {}
        },        
    ],
    path: "/xml/glasses"
}

export default challenge4