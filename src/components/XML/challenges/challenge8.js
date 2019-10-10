const challengeTitle = 'Júpiter ★★★';

const challenge8 = {
    title: challengeTitle,
    steps: [
        {
            title: challengeTitle,
            subtitle: "Júpiter e Marte",
            description: `Para completar o desafio, você precisa adicionar Marte, Júpiter
            e Europa (lua de Júpiter) ao sistema construído no desafio anterior, fazendo Marte
            e Júpiter orbitarem ao redor do Sol, e Europa orbitar ao redor de Júpiter. 
            Você pode adicionar os novos planetas utilizando o código da etapa anterior.
            Se você não salvou, pode copiar o código disponível em http://dontpad.com/workshop-matc4-solarsystem.
            Esse é o penúltimo desafio, quando finalizar, avance para o desafio final!
            `,
            expectedResult: `
            <data>
                <!-- Sky -->
                <background color="black" />
                
                <!-- Sun -->
                <circle r="30" color="yellow">
                    <children>
                    <!--Earth-->
                        <circle x="200" r="10" color="blue">
                            <children>
                                <!--Moon-->
                                <circle x="180" r="3" color="white" />
                            </children>
                            <transformations>
                                <orbit speed="2" />
                                <rotate speed="4" />
                            </transformations>
                        </circle>
                        
                        <!--Jupiter-->
                        <circle x="300" r="20" color="green">
                            <!--Europa-->
                            <children>
                                <circle x="270" r="2" color="lightgray">
                                </circle>
                            </children>
                            <transformations>
                                <orbit speed="5" />
                                <rotate speed="3" />
                            </transformations>
                        </circle>
                        <circle x="100" r="9" color="red">
                            <transformations>
                                <orbit speed="3" />
                            </transformations>
                        </circle>
                    </children>
                </circle>
            </data>`,
            initProperties: {}
        } 
    ],
    path: "/xml/jupiterandmars"
}

export default challenge8