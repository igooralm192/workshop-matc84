import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { xmlparser, ParseErrorType } from './XMLParser'
import { MainThree, sceneManager } from './MainThree'
import Editor from '../Editor'
import xmlChallengeSteps from './ChallengeSteps'
import Challenge from '../Challenge'
import '../../assets/css/three.css'

const styles = theme => ({});
const VALIDATION_ERROR_STRING_TEXT_OFFSET = 54; 

class Main extends React.Component { 
	constructor(props) {
		super(props);
		this.state = { 
			step: 0,
			parsingErrors: [],
			editorStatus: ""
		}
	}

	setStep(newValue) { this.step = newValue; }

    onEditorChange = (value) => { 
		const { editorStatus, parsingErrors } = this.state;
		this.setState({ editorStatus: value } );
		const sceneDescription = xmlparser.parseXML(value); 

		if(sceneDescription.errorType === ParseErrorType.XML_ILL_FORMED)
		{
			// XML is ill formed
			this.setState( { parsingErrors: [] });
		} else if(sceneDescription.errorType === ParseErrorType.INVALID_FORMAT)
		{
			// XML is in an invalid format 
			let validationErrors = new Array();

			sceneDescription.data.forEach( (value, index) => {
				validationErrors.push(value.split(":"));
			});
			
			let annotations = new Array();

			validationErrors.forEach( (value, index) => {
					let errorText = sceneDescription.data[index].substring(
						VALIDATION_ERROR_STRING_TEXT_OFFSET, 
						sceneDescription.data[index].length);

					let parseError = { 
							row: parseInt(value[1]) - 1,
							column: 0,
							type: 'error',
							text: errorText
						};
						annotations.push(parseError);
					}
			);
			
			this.setState({ parsingErrors: annotations });
		}
		else if(sceneDescription.errorType === ParseErrorType.MISSING_ROOT_ELEMENT) 
		{
			this.setState( { parsingErrors : [
				{ 
					row: 0,
					column: 0,
					type: 'error',
					text: 'Missing root element. Did you forget do add the <data> tag?'
				}]});
		}
		else
		{
			let shapes = xmlparser.getSceneElements(sceneDescription.data.data);
			sceneManager.BuildScene(shapes);
		}
	}

	render() { 
		const { step, editorStatus, parsingErrors } = this.state;

		return ( 
			<div style = { { height:"100%" } }>
				<Challenge editor = {
					<Editor 
						mode= "xml"
						value = {editorStatus}
						onChange = {this.onEditorChange} 
						annotations = { parsingErrors }
					/>
					}

					title        = { xmlChallengeSteps[step].title }
					subtitle     = { xmlChallengeSteps[step].subtitle }
					description  = { xmlChallengeSteps[step].description }
					result       = { <MainThree/> }
					steps        = { xmlChallengeSteps } 
					activeStep   = { step }
					previousStep = { () => this.setStep(Math.max(0, step - 1))}
					nextStep     = { () => this.setStep(Math.min(xmlChallengeSteps.length-1, step+1))}
					expectedResult = { <MainThree /> }
				/>
						
			</div>	
		)
	}
}

export default withStyles(styles, {withTheme: true})(Main, sceneManager);
