import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Editor from '../Editor'

const styles = theme => ({});

let editorStatus = "<rect x=\"30\" y=\"25\" w=\"50\" h=\"50\"></rect>";
let onChange = (value) => { editorStatus = value; }

function Main(props) {
	const { classes } = props;
    return (
		<div style={ { height:"100%" } }>
			<Editor 
				mode= "xml"
				value = {editorStatus}
				onChange = {onChange}
			/>
		</div>
    )
}

export default withStyles(styles, {withTheme: true})(Main);
