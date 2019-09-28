import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Challenge from '../Challenge';
import Editor from '../Editor';

const challenge = 'Space Invaders'

const steps = [
    {
        title: challenge,
        subtitle: 'Começando pela cor do Universo',
        description: 'Bem vindo ao desafio JSON! Usaremos o clássico Space Invaders para aprender um pouco sobre JSON. Atente-se às instruções para avançar!',
        initProperties: {},
    },
    {
        title: challenge,
        subtitle: 'Quantas estrelas existem?',
        description: 'Bem vindo ao desafio JSON! Usaremos o clássico Space Invaders para aprender um pouco sobre JSON. Atente-se às instruções para avançar!',
        initProperties: {},
    },
    {
        title: challenge,
        subtitle: 'Mudando a cor das estrelas',
        description: 'Bem vindo ao desafio JSON! Usaremos o clássico Space Invaders para aprender um pouco sobre JSON. Atente-se às instruções para avançar!',
        initProperties: {},
    },
    {
        title: challenge,
        subtitle: 'Escolhendo inimigos', // Qnt, vida, velocidade e aceleração
        description: '',
        initProperties: {},
    },
    {
        title: challenge,
        subtitle: 'Bomba neles', //Taxa da bomba, cor da bomba
        description: '',
        initProperties: {},
    },
    {
        title: challenge,
        subtitle: 'Nave de guerra', // largura e altura e velocidade
        description: '',
        initProperties: {},
    },
    {
        title: challenge,
        subtitle: 'Que tiro foi esse', //taxa do disparo e velocidade do tiro
        description: '',
        initProperties: {},
    },
    {
        title: challenge,
        subtitle: 'Toques finais', // Quantas vidas, dificuldade, pontos por invader
        description: '',
        initProperties: {},
    },
]

const styles = theme => ({});

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        }
    }
    
    render() {
        const { classes } = this.props;
        return (          
            <div style={{height: '100%'}}>
                <Challenge 
                    title={steps[this.state.step].title} 
                    subtitle={steps[this.state.step].subtitle} 
                    description={steps[this.state.step].description} 
                    editor={<Editor mode="json"/>}
                    steps={steps}
                    actualStep={this.state.step}
                    changeStep={(step) => this.setState({step})}
                />
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Main);