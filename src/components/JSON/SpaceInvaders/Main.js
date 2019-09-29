import React, { useState, useEffect } from 'react';

import Challenge from '../../Challenge';
import Editor from '../../Editor';
import SpaceInvaders from './SpaceInvaders';

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
            <p>Após isso, basta clicar no espaço do jogo e apertar espaço (space) para jogar. As setas para a esquerda e direita movem a sua nave e espaço (space) atira. Seu objetivo, claramente é destruir todos os Invaders e não morrer</p>
        </p>,
        initProperties: {}
    }
]

const properties = {
    background: {
        color: '#000000',
        starColor: 'yellow',
        starNumber: 1001
    },
    invader: {
        amount: 34,
        lives: 2,
        speed: 25,
        acceleration: 0,
        bombColor: '#ff5555',
        bombRate: 0.05
    },
    ship: {
        width: 20,
        height: 18,
        speed: 200,
        shootRate: 5,
        rocketVelocity: 2,
    },
    game: {
        lives: 5,
        difficultyMultiplier: 0.2,
        pointsPerInvader: 20
    },
    end: false
}

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 0,
            editorValue: '',
            resultProperties: {}
        }

        this.handleEditor = this.handleEditor.bind(this)
    }

    validBackground(properties) {
        let { background } = properties;

        if (background && typeof background === 'object' && !Array.isArray(background)) {
            let { color, starColor, starNumber } = background;

            if (color && typeof color !== 'string') 
                delete properties.background.color;
            if (starColor && typeof starColor !== 'string') 
                delete properties.background.starColor;
            if (starNumber && typeof starNumber !== 'number') 
                delete properties.background.starNumber;

        } else delete properties.background;

        return properties;
    }

    validInvader(properties) {
        let { invader } = properties;

        if (invader && typeof invader === 'object' && !Array.isArray(invader)) {
            let { amount, speed, lives, difficulty } = invader;

            if (amount > 0 && !Number.isInteger(amount)) 
                delete properties.invader.amount;
            if (speed > 0 && !Number.isInteger(speed)) 
                delete properties.invader.speed;
            if (lives > 0 && !Number.isInteger(lives)) 
                delete properties.invader.lives;
            if (difficulty > 0 && !(Number(difficulty) === difficulty && difficulty%1 !== 0)) 
                delete properties.invader.difficulty;

        } else delete properties.invader;

        return properties
    }

    validShip(properties) {
        let { ship } = properties;

        if (ship && typeof ship === 'object' && !Array.isArray(ship)) {
            let { width, height, speed, shootRate } = ship;

            if (width > 0 && !Number.isInteger(width)) 
                delete properties.ship.width;
            if (height > 0 && !Number.isInteger(height)) 
                delete properties.ship.height;
            if (speed > 0 && !Number.isInteger(speed)) 
                delete properties.ship.speed;   
            if (shootRate > 0 && !Number.isInteger(shootRate)) 
                delete properties.ship.shootRate;

        } else delete properties.ship;

        return properties
    }

    // validGame(properties) {
    //     let { game } = properties;

    //     if (game && typeof game === 'object' && !Array.isArray(game)) {
    //         let { width, height, speed, shootRate } = ship;

    //         if (width > 0 && !Number.isInteger(width)) 
    //             delete properties.ship.width;
    //         if (height > 0 && !Number.isInteger(height)) 
    //             delete properties.ship.height;
    //         if (speed > 0 && !Number.isInteger(speed)) 
    //             delete properties.ship.speed;   
    //         if (shootRate > 0 && !(Number(shootRate) === shootRate && shootRate%1 !== 0)) 
    //             delete properties.ship.shootRate;

    //     } else delete properties.ship;

    //     return properties
    // }

    handleEditor(value) {        
        let properties = this.state.resultProperties;

        try { properties = JSON.parse(value)} catch(e) {}

        properties = this.validBackground(properties);
        properties = this.validInvader(properties);
        properties = this.validShip(properties);

        this.setState({editorValue: value, resultProperties: properties})
    }

    render() {
        const { step, editorValue, resultProperties } = this.state;

        console.log(editorValue, resultProperties)
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
                            onChange={(value) => this.handleEditor(value)}
                        />
                    }
                    result={<SpaceInvaders properties={resultProperties}/>}
                    steps={steps}
                    activeStep={step}
                    previousStep={ () => this.setState( { step: Math.max(0, step-1) } ) }
                    nextStep={ () => this.setState( { step: Math.min(steps.length-1, step+1) } ) }
                />
            </div>
        )
    }
}

export default Main;