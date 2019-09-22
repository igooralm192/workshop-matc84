import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Challenge from '../Challenge';

const styles = theme => ({});

function Main(props) {
	const { classes } = props;
	
    return (
        <div style={{height: '100%'}}>
            <Challenge title={'Space Invaders'} subtitle={'Começando'}/>
        </div>
    )
}

export default withStyles(styles, {withTheme: true})(Main);