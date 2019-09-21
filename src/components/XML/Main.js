import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Editor from '../Editor'

const styles = theme => ({});

function Main(props) {
	const { classes } = props;
    return (
		<div style={ { height:"100%" } }>
			<Editor 
				mode="xml"
			/>
		</div>
    )
}

export default withStyles(styles, {withTheme: true})(Main);
