import React, { useState, useEffect } from 'react';

import Challenge from '../../Challenge';
import Editor from '../../Editor';
import SpaceInvaders from './SpaceInvaders';

import Schema from 'validate'
import Validator from './Validator'

import expectedBackground from '../../../assets/img/spaceinvaders/background.png'
import expectedInvader from '../../../assets/img/spaceinvaders/invader.png'
import expectedShip from '../../../assets/img/spaceinvaders/ship.png'

const challenge = 'Space Invaders'

const steps = [
    {
        title: challenge,
        subtitle: 'Introdução',
        description: (
            <div>
                Bem vindo(a) ao desafio JSON do workshop da disciplina MATC84! 
                Aqui, iremos aprender o básico da linguagem através da modificação de certas propriedades do jogo Space Invaders. 
                <p>Atente-se às instruções e apenas avance quando completá-las! Por hora, pode seguir adiante!</p> 
            </div>
        ),
        expectedResult: (<div></div>)
    },
    {
        title: challenge,
        subtitle: 'Background',
        description: (
            <div>
                Se queremos lutar no espaço sideral, é claro que devemos estar nele primeiro. 
                Para isso, insira na raiz do código JSON um objeto chamado <pre className="code-highlighter">background</pre> com os seguintes atributos:
                <ul>
                    <li><pre className="code-highlighter">color</pre> - (string) para a cor do fundo - default: <code>"#000"</code></li>
                    <li><pre className="code-highlighter">starsNumber</pre> - (int) para a quantidade de estrelas, no intervalo <code>[0,100]</code> - default: <code>100</code></li>
                    <li><pre className="code-highlighter">starsColor</pre> - (string) para a cor das estrelas - default: <code>"#FFF"</code></li>
                </ul>
                <p>Para isso, saiba que uma cor é uma string com o nome da cor (em inglês) ou um número em hexadecimal ou rgb(x, y, z) com x, y e z sendo os níveis de vermelho, verde e azul de 0 a 255.</p>
            </div>
        ),
        expectedResult: (
            <div>
                <div className="alt">Esperado</div>
                <img src={expectedBackground}/>
            </div>
        )
    },
    {
        title: challenge,
        subtitle: 'Invaders',
        description: (
            <div>
                Agora, preparemo-nos para encontrar nossos inimigos! 
                Assim, insira na raiz do código JSON um objeto chamado <pre className="code-highlighter">invader</pre> com os seguintes atributos:
                <ul>
                    <li><pre className="code-highlighter">amount</pre> - (int) para a quantidade dos invaders, no intervalo <code>[1,50]</code> - default: <code>20</code></li>
                    <li><pre className="code-highlighter">lives</pre> - (int) para definir a vida dos inimigos, no intervalo <code>[1,30]</code> - default: <code>1</code></li>
                    <li><pre className="code-highlighter">speed</pre> - (int) para configurar a velocidade, no intervalo <code>[20,200]</code> - default: <code>25</code></li>
                    <li><pre className="code-highlighter">acceleration</pre> - (float) para configurar a aceleração dos invaders, no intervalo <code>[0,5]</code> - default: <code>0</code></li>
                    <li><pre className="code-highlighter">bombColor</pre> - (string) para definir a cor da bomba - default: <code>"#FF3333"</code></li>
                    <li><pre className="code-highlighter">bombRate</pre> - (float) para a frequência de bombas jogadas pelos invaders, no intervalo <code>[0.01,1]</code> - default: <code>0.05</code></li>
                </ul>            
            </div>
        ),
        expectedResult: (
            <div>
                <div className="alt">Esperado</div>
                <img src={expectedInvader}/>
            </div>
        )
    },
    {
        title: challenge,
        subtitle: 'Nave',
        description: (
            <div>
                Enfim podemos construir nossa nave, capriche! 
                Insira na raiz do código JSON um objeto chamado <pre className="code-highlighter">ship</pre> com os seguintes atributos:
                <ul>
                    <li><pre className="code-highlighter">width</pre> - (int) para a largura da nave, no intervalo <code>[5,50]</code> - default: <code>20</code></li>
                    <li><pre className="code-highlighter">height</pre> - (int) para a altura da nave, no intervalo <code>[5,50]</code> - default: <code>20</code></li>
                    <li><pre className="code-highlighter">speed</pre> - (int) para configurar a velocidade da nave, no intervalo <code>[20,300]</code> - default: <code>120</code></li>
                    <li><pre className="code-highlighter">rocketVelocity</pre> - (int) para definir a velocidade do tiro, no intervalo <code>[10,300]</code> - default: <code>120</code></li>
                    <li><pre className="code-highlighter">shootRate</pre> - (float) para a taxa de tiros, no intervalo <code>[0.1,5]</code> - default: <code>2</code></li>
                </ul>
            </div>
        ),
        expectedResult: (
            <div>
                <div className="alt">Esperado</div>
                <img src={expectedShip}/>
            </div>
        )
    },
    {
        title: challenge,
        subtitle: 'Toques finais',
        description: (
            <div>
                Falta pouco para jogar, mas precisamos de algumas configurações para iniciar. 
                Insira na raiz do código JSON um objeto chamado <pre className="code-highlighter">game</pre> com os seguintes atributos:
                <ul>
                    <li><pre className="code-highlighter">lives</pre> - (int) para definir a quantidade de vida do jogador, no intervalo <code>[1,10]</code> - default: <code>3</code></li>
                    <li><pre className="code-highlighter">difficultyMultiplier</pre> - (float) para configurar o multiplicador de dificuldade por level, no intervalo <code>[0.01,1]</code> - default: <code>0.2</code></li>
                    <li><pre className="code-highlighter">pointsPerInvader</pre> - (float) para a quantidade de pontos por inimigo destruído, no intervalo <code>[1,10^9]</code> - default: <code>50</code></li>
                </ul>
            </div>
        )
    },
    {
        title: challenge,
        subtitle: 'Hora de jogar',
        description: (
            <div>
                Parabéns! Você fez um ótimo trabalho, mas agora é hora de testar, não é mesmo? <br/>
                Insira na raiz do código JSON um atributo chamado <pre className="code-highlighter">start</pre> com o valor <pre className="code-highlighter">true</pre>.
                <p>Após isso, basta clicar no espaço do jogo e apertar <b>espaço</b> (space) para jogar. <br/>
                As setas para a <b>esquerda</b> e <b>direita</b> movem a sua nave, a tecla <b>p</b> pausa o jogo e <b>espaço</b> (space) a nave atira. <br/>
                Seu objetivo claramente é destruir todos os Invaders e não morrer. Bom jogo e divirta-se!</p>
            </div>
        )
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
            let { errors } = this.state;

            if (errors.length && errors[0].text == validation[0].message) {
                errors = [{ row: 0, column: 0, type: 'error', text: validation[0].message}, ...this.state.errors]
            } else {
                errors = [{ row: 0, column: 0, type: 'error', text: validation[0].message}]
            }

            this.setState({editorValue: value, errors});
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
                    expectedResult={steps[step].expectedResult}
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