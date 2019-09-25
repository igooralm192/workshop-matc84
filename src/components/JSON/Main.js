import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Challenge from '../Challenge';
<<<<<<< HEAD
import Editor from '../Editor';
=======
import SpaceInvaders from './SpaceInvaders';

>>>>>>> d2d380828ec8f9127e32dfc75726fe5beef9517e

const styles = theme => ({});

const properties = {
    background: {
        color: '#000000',
        starColor: 'yellow',
        starNumber: 1001
    },
    invader: {
        amount: 40,
        shots: 10,
        speed: 1,
        lives: 10,
        difficulty: 1
    },
    ship: {
        width: 20,
        height: 20,
        speed: 200,
        shots: 5
    }
}

function Main(props) {
	const { classes } = props;
	
    return (
        <div style={{height: '100%'}}>
<<<<<<< HEAD
            <Challenge 
                title={'Titulo do Desafio'} 
                subtitle={'Titulo da etapa'} 
                description={'Descrição da etapa'} 
                editor={<Editor mode="json"/>}
            />
=======
            {/* <Challenge title={'Space Invaders'} subtitle={'Começando'}/> */}
            <SpaceInvaders properties={properties} />
>>>>>>> d2d380828ec8f9127e32dfc75726fe5beef9517e
        </div>
    )
}

export default withStyles(styles, {withTheme: true})(Main);