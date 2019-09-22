import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Challenge from '../Challenge';
import Editor from '../Editor';

const styles = theme => ({});

function Main(props) {
	const { classes } = props;
	
    return (
        <div style={{height: '100%'}}>
            <Challenge 
                title={'Titulo do Desafio'} 
                subtitle={'Titulo da etapa'} 
                description={'Descrição da etapa'} 
                editor={<Editor mode="json"/>}
            />
        </div>
    )
}

export default withStyles(styles, {withTheme: true})(Main);