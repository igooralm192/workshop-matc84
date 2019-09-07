import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

function Introduction(props) {
	const { classes } = props;
	
    return (
        <div>
			Bem vindo ao desafio
        </div>
    )
}

export default withStyles(styles, {withTheme: true})(Introduction);