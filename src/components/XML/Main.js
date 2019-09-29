import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { xmlparser, ParseErrorType } from './XMLParser'
import { MainThree, sceneManager } from './MainThree'
import Editor from '../Editor'
import xmlChallengeSteps from './ChallengeSteps'
import Challenge from '../Challenge'
import '../../assets/css/three.css'


const styles = theme => ({});

// Editor initial state
let editorStatus = "<data>\n\t<rect x=\"0\" y=\"0\" w=\"0.2\" h=\"0.2\"/>\n</data>";

let onChange = (value) => { 
	editorStatus = value; 
	const sceneDescription = xmlparser.parseXML(value); 

	if(sceneDescription.errorType === ParseErrorType.XML_ILL_FORMED)
	{
		// XML is ill formed
		console.log("Error");
	}
	else if(sceneDescription.errorType === ParseErrorType.INVALID_FORMAT)
	{
		// XML is in an invalid format 
		console.log("Invalid format");
		console.log(sceneDescription.data);
	}
	else if(sceneDescription.errorType === ParseErrorType.MISSING_ROOT_ELEMENT) 
	{
		// Root data element is missing
		console.log("Missing root element");
	}
	else
	{
		let shapes = xmlparser.getSceneElements(sceneDescription.data.data);
		sceneManager.BuildScene(shapes);
 	}
}

function Main(props) {
	const { classes } = props;
	const [ step, setStep ] = useState(0);

    return (
		<div style = { { height:"100%" } }>
			<Challenge editor = {
				<Editor 
					mode= "xml"
					value = {editorStatus}
					onChange = {onChange} />
				}
				title = { xmlChallengeSteps[step].title }
				subtitle = { xmlChallengeSteps[step].subtitle }
				description = { xmlChallengeSteps[step].description }
				result = { <MainThree/> }
				steps = { xmlChallengeSteps } 
				activeStep = { step }
				previousStep={ () => 
					setStep(Math.max(0, step - 1))}
				nextStep={ () => 
					setStep(Math.min(xmlChallengeSteps.length-1, step+1))}
			/>
					
		</div>	
    )
}

export default withStyles(styles, {withTheme: true})(Main, sceneManager);
