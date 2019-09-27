  
import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Editor from '../Editor'
import MainThree from './MyThree'
import Challenge from '../Challenge'
import '../../assets/css/three.css'


const styles = theme => ({});

let editorStatus = "<rect x=\"30\" y=\"25\" w=\"50\" h=\"50\"></rect>";
let onChange = (value) => { editorStatus = value; }

function Main(props) {
	const { classes } = props;
    return (
		<div style = { { height:"100%" } }>
			<Challenge editor = {
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