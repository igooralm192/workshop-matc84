import React, {useState} from 'react';
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
    }
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
        const { step } = this.state;
        const { classes } = this.props;
      
        return (          
            <div style={{height: '100%'}}>
                <Challenge 
                    title={'Titulo do Desafio'} 
                    subtitle={'Titulo da etapa'} 
                    description={'Descrição da etapa'} 
                    editor={<Editor mode="json"/>}
                    steps={steps}
                    activeStep={step}
                    previousStep={ () => this.setState( { step: Math.max(0, step-1) } ) }
                    nextStep={ () => this.setState( { step: Math.min(steps.length-1, step+1) } ) }
                />
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Main);