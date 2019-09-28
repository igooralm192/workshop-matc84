import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Challenge from '../Challenge';
import Editor from '../Editor';

const styles = theme => ({});

const challenge = "Space Invaders";

const steps = [
    {
        title: challenge,
        subtitle: 'Introdução',
        description: 'Vamos iniciar ae krl',
        initProperties: {}
    },
    {
        title: challenge,
        subtitle: 'Background',
        description: 'Faz o fundo ae poha',
        initProperties: {}
    }
]

function Main(props) {
    const [step, setStep] = useState(0);
	const { classes } = props;
	console.log(step)
    return (
        <div style={{height: '100%'}}>
            <Challenge 
                title={'Titulo do Desafio'} 
                subtitle={'Titulo da etapa'} 
                description={'Descrição da etapa'} 
                editor={<Editor mode="json"/>}
                steps={steps}
                activeStep={step}
                previousStep={() => setStep(Math.max(0, step-1))}
                nextStep={() => setStep(Math.min(steps.length-1, step+1))}
            />
        </div>
    )
}

export default withStyles(styles, {withTheme: true})(Main);