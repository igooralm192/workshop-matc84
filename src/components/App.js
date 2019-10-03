import React, { useState } from 'react';

import { 
	BrowserRouter as Router, 
	Route, 
	Switch,
	Redirect 
} from "react-router-dom";

import Header from './Header';
import Menu from './Menu';
import Content from './Content';

import Introduction from './Introduction';
import MainXML from './XML/Main';
import MainSpaceInvaders from './JSON/SpaceInvaders/Main';
import XMLChallenges from './XML/Challenges'

let challengesXML = new Array();
XMLChallenges.forEach( (challenge, i) => {
	challengesXML.push( { path: challenge.path , component: <MainXML xmlChallengeSteps={ challenge.steps } />}) 
});

const challengesJSON = [
	{path: '/json/spaceinvaders', component: MainSpaceInvaders}
]

const themeColors = {
	"/": "#3f51b5",
	"/xml": "#F29B20",
	"/json/spaceinvaders": "#a573bd"
}

XMLChallenges.forEach((challenge, i) => {
	themeColors[challenge.path] = themeColors["/xml"];
});

class Gamer {
	constructor() { } 
}

function App(props) {
	const [menuOpen, setMenuOpen] = useState(false);

	window.themeColor = themeColors[window.location.pathname]

	return (
		<Router>
			<div className="app">
				<Header menuClick={() => setMenuOpen(true)}/>
				<Menu menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)}/>
				<Content>
					<Switch>
						<Route path="/" exact component={Introduction}/>
						
						{
							challengesXML.map((challenge,i) => (
								<Route key={i} path={challenge.path} render={ () => challenge.component } />
							))
						}

						{
							challengesJSON.map((challenge,i) => (
								<Route key={i} path={challenge.path} component={challenge.component}/>
							))
						}
					</Switch>
				</Content>
			</div>
		</Router>
	);
}

export default App;
