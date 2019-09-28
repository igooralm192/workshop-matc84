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

const challengesXML = [
	{path: '/xml/threejs', component: MainXML},
]

const challengesJSON = [
	{path: '/json/spaceinvaders', component: MainSpaceInvaders}
]

function App(props) {
	const [menuOpen, setMenuOpen] = useState(false);

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
								<Route key={i} path={challenge.path} component={challenge.component}/>
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
