import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

function Main(props) {
	const { classes } = props;
	
    return (
        <div>
            JSON
        </div>
    )
}

export default withStyles(styles, {withTheme: true})(Main);