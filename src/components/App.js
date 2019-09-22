import React, { useState } from 'react';

import { 
	BrowserRouter as Router, 
	Route, 
	Switch 
} from "react-router-dom";

import Header from './Header';
import Menu from './Menu';
import Content from './Content';

import Introduction from './Introduction';
import MainXML from './XML/Main';
import MainJSON from './JSON/Main';

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
						<Route path="/xml" component={MainXML}/>
						<Route path="/json" component={MainJSON}/>
					</Switch>
				</Content>
			</div>
		</Router>
	);
}

export default App;
