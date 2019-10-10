import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { xmlparser, ParseErrorType } from './XMLParser'
import { MainThree, sceneManager } from './MainThree'
import {MainThreeResult, resultSceneManager } from './MainThreeResult'
import Editor from '../Editor'
import Challenge from '../Challenge'
import '../../assets/css/three.css'

const styles = theme => ({});
const VALIDATION_ERROR_STRING_TEXT_OFFSET = 54; 

class Main extends React.Component { 
	constructor(props) {
		super(props);
		this.state = { 
			currentChallenge: 0,
			step: 0,
			parsingErrors: [],
			editorStatus: ""
		}
	}

    onEditorChange = (value) => { 
		const { editorStatus, parsingErrors } = this.state;
		const { xmlChallengeSteps } = this.props;
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
			//resultSceneManager.BuildScene(shapes);
		}
	}

	render() { 
		const { step, editorStatus, parsingErrors, currentChallenge } = this.state;
		const { xmlChallengeSteps } = this.props;


		return ( 
			<div style = { { height:"100%" } }>
				<Challenge editor = {
					<Editor 
						mode= "xml"
						value = { editorStatus }
						onChange = { this.onEditorChange } 
						annotations = { parsingErrors }
					/>
					}

					title        = { xmlChallengeSteps[step].title       }
					subtitle     = { xmlChallengeSteps[step].subtitle    }
					description  = { xmlChallengeSteps[step].description }
					result       = { <MainThree />   }
					steps        = { xmlChallengeSteps } 
					activeStep   = { step }
					previousStep = { () => this.setState({ step: Math.max(0, step - 1) })} 
					nextStep     = { () => this.setState({ step: Math.min(step + 1, xmlChallengeSteps.length - 1) })} 
					expectedResult = { <MainThreeResult expectedResult = {xmlChallengeSteps[step].expectedResult }/> }
				/>
						
			</div>	
		)
	}
}

export default withStyles(styles, {withTheme: true})(Main, sceneManager, resultSceneManager);
