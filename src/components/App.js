import React from 'react';
import lodash from 'lodash';

import Ace from 'react-ace';
import "brace/mode/json";
import 'brace/theme/github';

import SpaceInvaders from './SpaceInvaders';
import Header from './Header';
import Menu from './Menu';
import Content from './Content';

class App extends React.Component {
	constructor(props) {
		super(props);

		
		this.state = {
			menuOpen: false
		}

		this.debounceChange = lodash.debounce(this.handleChange, 200);
	}

	handleChange(value) {	
		console.log(value);
	}

	openMenu() {
		this.setState({menuOpen: true});
	}

	closeMenu() {
		this.setState({menuOpen: false});
	}

	render() {
		return (
			<div className="app">
				
				<Header menuClick={() => this.openMenu()}/>
				<Menu menuOpen={this.state.menuOpen} closeMenu={() => this.closeMenu()}/>
				<Content/>
				
			</div>
		);
	}
}
export default App;
