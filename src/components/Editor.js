import React from 'react';

import AceEditor from 'react-ace'
import 'brace/mode/xml'
import 'brace/mode/json'
import 'brace/theme/chrome'
import 'brace/theme/monokai'

function Editor(props) {
	const { theme, onChange, mode, value } = props;
	return( 
		<AceEditor 
			width    = "100%"
			height   = "100%"
			fontSize = { 20             }
			theme    = { props.theme    }
			onChange = { props.onChange }
			mode     = { props.mode     }
			value    = { props.value    }
		/>
	)
}


Editor.defaultProps	= {
	theme: "chrome",
	onChange: (value) => { }
};

export default Editor;
