import React, { useState, useEffect } from 'react';

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
import { themeColors } from '../themeColors'

let challengesXML = XMLChallenges.map((challenge, i) => ({ 
	path: challenge.path , component: <MainXML xmlChallengeSteps={ challenge.steps } />
}))

const challengesJSON = [
	{path: '/json/spaceinvaders', component: MainSpaceInvaders}
]

XMLChallenges.forEach((challenge, i) => {
	themeColors[challenge.path] = themeColors["/xml"];
});



function App(props) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [pathTheme, setPathTheme] = useState(window.location.pathname)

	window.addEventListener('changeTheme', (e) => {
		setPathTheme(e.detail.pathTheme)
	})

	window.themeColor = themeColors[pathTheme]

	return (
		<Router>
			<div className="app">
				<Header menuClick={() => setMenuOpen(true)}/>
				<Menu menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)}/>
				<Content>
					<Switch>
						<Route path="/" exact render={() => <Introduction closeMenu={() => setMenuOpen(false)}/>}/>
						
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
