  import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { xmlparser, ParseErrorType } from './XMLParser'
import Editor from '../Editor'
import MainThree from './MyThree'
import Challenge from '../Challenge'
import '../../assets/css/three.css'


const styles = theme => ({});

const challenge = 'XML'

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
        description: 'Vamos iniciar ae krl',
        initProperties: {}
    },
    {
        title: challenge,
        subtitle: 'Invaders',
        description: 'Vamos iniciar ae krl',
        initProperties: {}
    }
]

// Editor initial state
let editorStatus = "<data>\n\t<rect x=\"30\" y=\"25\" w=\"50\" h=\"50\"/>\n</data>";

let onChange = (value) => { 
	editorStatus = value; 
	const sceneDescription = xmlparser.parseXML(value); 

	if(sceneDescription.errorType === ParseErrorType.XML_ILL_FORMED)
	{
		console.log("Error");
		// XML is ill formed
	}
	else if(sceneDescription.errorType === ParseErrorType.INVALID_FORMAT)
	{
		console.log("Invalid format");
		// XML is in an invalid format 
	}
	else
	{
		let shapes = xmlparser.getSceneElements(sceneDescription.data.data);
 	}
}

function Main(props) {
	const { classes } = props;
    return (
		<div style = { { height:"100%" } }>
			<Challenge 
				steps = {steps}
				editor = {
					<Editor 
						mode= "xml"
						value = {editorStatus}
						onChange = {onChange}
					/>
				}
				result = {
					<MainThree/>
				}>

			</Challenge>
			
		</div>	
    )
}

export default withStyles(styles, {withTheme: true})(Main);