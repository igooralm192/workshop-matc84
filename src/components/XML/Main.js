import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import { ParseErrorType, parseXML } from './XMLParser'
import Editor from '../Editor'

const styles = theme => ({});

// Editor initial state
let editorStatus = "<data>\n\t<rect x=\"30\" y=\"25\" w=\"50\" h=\"50\"/>\n</data>";

let onChange = (value) => { 
	editorStatus = value; 
	const sceneDesciption = parseXML(value); 

	if(sceneDesciption.errorType == ParseErrorType.XML_ILL_FORMED)
	{
		// XML is ill formed
	}
	else if(sceneDesciption.errorType == ParseErrorType.INVALID_FORMAT)
	{
		// XML is in an invalid format 
	}
	else
	{
		// Successfull parse, update scene 
	}
}

function Main(props) {
	const { classes } = props;
    return (
		<div style={ { height:"100%" } }>
			<Editor 
				mode= "xml"
				value = {editorStatus}
				onChange = {onChange} />
		</div>
    )
}

export default withStyles(styles, {withTheme: true})(Main);
