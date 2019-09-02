import React from 'react';
import brace from 'brace';
import Ace from 'react-ace';
import "brace/mode/json";
import 'brace/theme/github';

class App extends React.Component {
	componentDidMount(){
		console.log(Ace);
	}
	render() {
		return (
			<div className="App">
				<div id = "editor">
					<Ace mode = "json" theme = "github" editorProps = {{$blockScrolling:true}}></Ace>
				</div>
			</div>
		);
	}
}
export default App;
