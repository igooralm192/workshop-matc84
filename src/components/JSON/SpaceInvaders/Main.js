import React, { useState, useEffect } from 'react';

import Challenge from '../../Challenge';
import Editor from '../../Editor';
import SpaceInvaders from './SpaceInvaders';

import Schema from 'validate'
import Validator from './Validator'

const challenge = 'Space Invaders'

const steps = [
    {
        title: challenge,
        subtitle: 'Introdução',
        description: <p>Bem vindo(a) ao desafio JSON do workshop da disciplina MATC84! Aqui, iremos aprender o básico da linguagem através da modificação de certas propriedades do jogo Space Invaders. <p>Atente-se às instruções e apenas avance quando completa-las! Por hora, pode seguir adiante!</p> </p>,
        initProperties: {}
    },
    {
        title: challenge,
        subtitle: 'Background',
        description: <p>Se queremos lutar no espaço sideral, é claro que devemos estar nele primeiro. Para isso, insira na raiz do código JSON um objeto chamado background com os seguintes atributos:
        <ul>
            <li>color - (recebendo uma cor) para a cor do fundo</li>
            <li>starsNumber - (inteiro) para a quantidade de estrelas</li>
            <li>starsColor - (cor) para a cor das estrelas</li>
        </ul>
        <p>Para isso, saiba que uma cor é uma string com o nome da cor ou um número em hexadecimal ou rgb(x, y, z) com x, y e z sendo os niveis de vermelho, verde e azul de 0 a 255.</p>
        </p>,
        initProperties: {}
    },
    {
        title: challenge,
        subtitle: 'Invaders',
        description: <p>Agora, preparemo-nos para encontrar nossos inimigos! Assim, insira na raiz do código JSON um objeto chamado invader com os seguintes atributos:
        <ul>
            <li>amount - (inteiro) para a quantidade dos Invaders</li>
            <li>lives - (inteiro) para definir a vida dos inimigos</li>
            <li>speed - (inteiro) para configurar a velocidade</li>
            <li>acceleration - (inteiro) para configurar a aceleração</li>
            <li>bombColor - (cor) para definir a cor da bomba</li>
            <li>bombRate - (float) para a taxa de bombas jogadas pelos Invaders</li>
        </ul>            
        </p>,
        initProperties: {}
    },
    {
        title: challenge,
        subtitle: 'Nave',
        description: <p>Enfim podemos construir nossa nave, capriche! Insira na raiz do código JSON um objeto chamado ship com os seguintes atributos:
        <ul>
            <li>width - (inteiro) para a largura da nave</li>
            <li>height - (inteiro) para a altura da nave</li>
            <li>speed - (inteiro) para configurar a velocidade</li>
            <li>rocketVelocity - (inteiro) para definir a velocidade do tiro</li>
            <li>shootRate - (float) para a taxa de tiros </li>
        </ul>
        </p>,
        initProperties: {}
    },
    {
        title: challenge,
        subtitle: 'Toques finais',
        description: <p>Falta pouco para jogar, mas precisamos de algumas configurações para iniciar. Insira na raiz do código JSON um objeto chamado game com os seguintes atributos:
        <ul>
            <li>lives - (inteiro) para definir a quantidade de vida do jogador</li>
            <li>difficultyMultiplier - (float) para configurar a dificuldade do jogo</li>
            <li>pointsPerInvader - (float) para a quantidade de pontos por inimigo destruído</li>
        </ul>
        </p>,
        initProperties: {}
    },
    {
        title: challenge,
        subtitle: 'Hora de jogar',
        description: <p>Parabéns! Você fez um ótimo trabalho, mas agora é hora de testar, não é mesmo? Insira na raiz do código JSON um atributo chamado end com o valor verdadeiro.
            <p>Após isso, basta clicar no espaço do jogo e apertar espaço (space) para jogar. As setas para a esquerda e direita movem a sua nave e espaço (space) atira. Seu objetivo claramente é destruir todos os Invaders e não morrer.</p>
        </p>,
        initProperties: {}
    }
]

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 0,
            editorValue: '',
            resultProperties: {},
            errors: []
        }

        this.schema = new Schema(Validator);
    }

    handleEditor(value, step) {          
        let properties = {};

        try { var editorProperties = JSON.parse(value); } catch(e) { 
            this.setState({editorValue: value})
            return;
        }

        if (step == 0) properties = {}
        if (step >= 1) properties = {...properties, background: {...editorProperties.background}}
        if (step >= 2) properties = {...properties, invader: {...editorProperties.invader}}
        if (step >= 3) properties = {...properties, ship: {...editorProperties.ship}}
        if (step >= 4) properties = {...properties, game: {...editorProperties.game}}
        if (step >= 5) properties = {...properties, start: editorProperties.start}

        let validation = this.schema.validate(properties);

        if (validation.length > 0) {
            this.setState({editorValue: value, errors: [{ row: 0, column: 0, type: 'error', text: validation[0].message}]});
            return;
        }

        this.setState({editorValue: value, resultProperties: properties, errors: []})
    }

    handleStep(step) {
        this.setState({step})
        this.handleEditor(this.state.editorValue, step)
    }

    render() {
        const { step, editorValue, resultProperties, errors } = this.state;

        return (
            <div style={{height: '100%'}}>
                <Challenge 
                    title={steps[step].title} 
                    subtitle={steps[step].subtitle} 
                    description={steps[step].description} 
                    editor={
                        <Editor 
                            mode="json" 
                            value={editorValue}
                            annotations={errors}
                            onChange={(value) => this.handleEditor(value, step)}
                        />
                    }
                    result={<SpaceInvaders properties={resultProperties}/>}
                    steps={steps}
                    activeStep={step}
                    previousStep={ () => this.handleStep(Math.max(0, step-1)) }
                    nextStep={ () => this.handleStep(Math.min(steps.length-1, step+1)) }
                />
            </div>
        )
    }
}

export default Main;