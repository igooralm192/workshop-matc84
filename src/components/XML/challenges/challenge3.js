const challengeTitle = 'Maçã';

const challenge3 = {
    title: challengeTitle,
    steps: [
        {
            title: challengeTitle,
            subtitle: "Cor de fundo",
            description: `Ótimo trabalho até aqui! Nesse desafio vamos criar a figura de uma maçã
            utilzando os conceitos vistos até agora. Mas antes disso, você acha que esse 
            fundo branco poderia ser mais interessante? Eu também! Adicione uma tag background 
            com um atributo color = lightblue para colorir um pouco as coisas.`,
            expectedResult: `
                <data>
                    <background color="lightblue" />
                </data>
            `,
            initProperties: {}
        },        
        {
            title: challengeTitle,
            subtitle: "Sobreposição",
            description: ` É possível sobrepor formas para criar efeitos interessantes. 
                Para experimentar, utilizando o que aprendeu na etapa anterior,
                crie dois círculos com os seguintes atributos: 
                Círculo1 = x: -40 r:150 color: red e
                Círculo2 = x: 40 r:150 color: red `,
            expectedResult: `
                <data>
                    <background color="lightblue" />
                    <circle x="-40" r="150" color="red" />
                    <circle x="40" r="150" color="red" />    
                </data>
            `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Tronco",
            description: `A forma da maçã está quase pronta, falta apenas o tronco.
            Adicione um retângulo marrom (brown) na posição y = 160 com comprimento 
            15 e altura 80. Como ele precisa estar sobre as outras figuras, dê a ele
            um atributo z maior do que 0 (1 é suficiente!)`,
            expectedResult: `
                <data>
                    <background color="lightblue" />
                    <circle x="-40" r="150" color="red" />
                    <circle x="40" r="150" color="red" />
                    <rect y="160" z="1" w="15" h="80" color="brown" />
                </data>
            `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Toques finais",
            description: `Agora está melhor! Mas como somos detalhistas, vamos adicionar
                um toque final pra adicionar sensação de profundidade e localização no espaço.
                Para esse propósito, vamos utilizar mais uma forma: elipse! Ela pode ser criada
                com a tag <ellipse>. <ellipse>, similar ao retângulo, recebe atributos comprimento (w)
                e altura (h), e pode, opcionalmente, receber atributos de posição x e y, assim como 
                transformations. Avance para próxima etapa para adicionar o seu primeiro elipse.`,
                expectedResult: `
                <data>
                    <background color="lightblue" />
                    <circle x="-40" r="150" color="red" />
                    <circle x="40" r="150" color="red" />
                    <rect y="160" z="1" w="15" h="80" color="brown" />
                </data>
            `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Sombra",
            description: `Para adicionar sombra a maçã, adicione uma tag <ellipse> com posição y = -150
                comprimento (w) = 200 e altura (h) = 20 e cor cinza. Como ela precisa estar atrás 
                de todas as outras formas, adicione um atributo z = -1`,
            expectedResult: `
                <data>
                    <background color="lightblue" />
                    <circle x="-40" r="150" color="red" />
                    <circle x="40" r="150" color="red" />
                    <rect y="160" z="1" w="15" h="80" color="brown" />
                    <ellipse z="-1" y="-150" w="200" h="20" color="gray" />
                </data>
            `,
            initProperties: {}
        },
        {
            title: challengeTitle,
            subtitle: "Finalizando",
            description: `Nada mal para quem está utilizando o ArtsyXML pela primeira vez! No
            próximo desafio você terá de solucionar um desafio utilizando os conceitos vistos 
            até aqui, mas terá a oportunidade de fazer de forma livre, sem instruções! Utilize
            a barra lateral para accessá-lo.`,
            expectedResult: `
                <data>
                    <background color="lightblue" />
                    <circle x="-40" r="150" color="red" />
                    <circle x="40" r="150" color="red" />
                    <rect y="160" z="1" w="15" h="80" color="brown" />
                    <ellipse z="-1" y="-150" w="200" h="20" color="gray" />
                </data>
            `,
            initProperties: {}
        }           
    ],
    path: "/xml/apple"
}

export default challenge3