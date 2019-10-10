const challengeTitle = 'Bandeira do Brasil';

const challenge2 = {
    title: challengeTitle,
    steps: [
        {
            title: challengeTitle,
            subtitle: "O Verde Louro Dessa Flãmula",
            description: `Está na hora de criar a sua primeira figura: a bandeira do Brasil.
                Para criar o fundo da bandeira, crie uma tag rect (dentro da tag raiz <data>),
                com os seguintes atributos: color="green", w="550" e h="370."`,
            expectedResult: `
                <data>
                    <rect w="550" h="370" color="green" />
                </data>
            `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Múltiplas formas",
            description: `É possível utilizar múltiplas formas para construir imagens mais
                interessantes. Adicione um retângulo com comprimento (w) 250 e altura(h) 270, 
                com cor amarela (yellow).`,
            expectedResult: `
                <data>
                    <rect w="550" h="370" color="green" />
                    <rect w="250" h="250" color="yellow"/>
                </data>
                `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Transformações",
            description: `Nesse etapa apresentaremos o conceito de "transformations". 
            Com ela é possível fazer manipulações especiais na forma. Para isso, é preciso criar
            uma tag transformations dentro da forma que se deseja manipular. Crie uma tag
            <transformations> sem atributos, filha do retângulo amarelo criado na etapa anterior.
            A estrutura deve ficar semelhante à \n<rect>\n\t<transformations>\n\t</transformations>\n</rect>`,
            expectedResult: `
                <data>
                    <rect w="550" h="370" color="green" />
                    <rect w="250" h="250" color="yellow">
                        <transformations>
                        </transformations>
                    </rect>
                </data>
            `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Rotação Estática",
            description: `Uma das transformações possíveis é a rotação estática. Para aplicá-la
                em uma forma, insira a tag <tilt> como filha da tag <transformations> que está
                dentro de uma forma. É preciso informar para tilt o ângulo da rotação (em graus).
                Para rotacionar estáticamente o retângulo amarelo, adicione uma tag tilt 
                como filha da tag transformations criada na etapa anterior. Dê a ela um atributo angle com valor
                45. Isso fará o retângulo amarelo rotacionar em 45 graus.`,
            expectedResult: `
                <data>
                    <rect w="550" h="370" color="green" />
                    <rect w="250" h="250" color="yellow">
                        <transformations>
                            <tilt angle="45" />
                        </transformations>
                    </rect>
                </data>
            `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "O Céu Da Pátria",
            description: `O ArtsyXML suporta outras formas além de retângulos, como círculos,
            elipses e triângulos. Crie um círculo no centro da tela, adicionando uma tag
            circle no editor. Diferente do retângulo, ela não recebe as comprimento (w) e 
            altura(h), mas um raio (r). Adicione um atributo r ao círculo, com valor 100.`,
            expectedResult: `
                <data>
                <rect w="550" h="370" color="green" />
                <rect w="250" h="250" color="yellow">
                    <transformations>
                        <tilt angle="45" />
                    </transformations>
                </rect>
                <circle r="100" color="blue" />
                </data>
            `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Ordem dos objetos",
            description: `Para finalizar, falta apenas um detalhe! A faixa branca no centro do círculo.
            Para isso adicione um retângulo com comprimento 200 e altura 30 com a cor branca. Oh-oh.
            O retângulo não está visível? Isso acontece porque o ArtsyXML precisa saber a ordem dos
            elementos na figura. Siga para a próxima etapa para resolver esse problema.`,
            expectedResult: `
                <data>
                    <rect w="550" h="370" color="green" />
                    <rect w="250" h="250" color="yellow">
                        <transformations>
                            <tilt angle="45" />
                        </transformations>
                    </rect>
                    <circle r="100" color="blue" />
                    <rect w="200" h="30" color="white" />
                </data>

            `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Ordem dos objetos",
            description: `Para definir a ordem dos objetos, pense que as figuras estão em um 
            espaço tridimensional. Objetos que estão a frente sobrepõem os objetos que estão atrás.
            Mas nem tudo está perdido! É possível definir a profundidade dos objetos através do
            do atributo z! Pense que quanto maior o z, mais próximo de você estão os objetos. O valor
            padrão é 0. Para trazer sua faixa branca para frente das outras formas, adicione um atributo
            z="1". Qualquer valor maior que o padrão funciona.`,
            expectedResult: `
                <data>
                    <rect w="550" h="370" color="green" />
                    <rect w="250" h="250" color="yellow">
                        <transformations>
                            <tilt angle="45" />
                        </transformations>
                    </rect>
                    <circle r="100" color="blue" />
                    <rect w="200" h="30" color="white" />
                </data>
            `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Finalizando",
            description: `Esse é o fim dessa etapa! Utilize a barra lateral para avançar para a próxima.`,
            expectedResult: `
                <data>
                    <rect w="550" h="370" color="green" />
                    <rect w="250" h="250" color="yellow">
                        <transformations>
                            <tilt angle="45" />
                        </transformations>
                    </rect>
                    <circle r="100" color="blue" />
                    <rect z="1" w="200" h="30" color="white" />
                </data>
            `,
            initProperties: {}
        }
    ],
    path: "/xml/brazilianflag"
}

export default challenge2