import React from 'react';

import AceEditor from 'react-ace'
import 'brace/mode/xml'
import 'brace/mode/json'
import 'brace/theme/chrome'
import 'brace/theme/monokai'

function Editor(props) {
	return( 
		<AceEditor 
			width    = "100%"
			height   = "100%"
			fontSize = { 16             }
			theme    = { props.theme    }
			onChange = { props.onChange }
			mode     = { props.mode     }
			value    = { props.value    }
			debounceChangePeriod={500}
			editorProps={{$blockScrolling: true}}
			{...props}
		/>
	)
}


Editor.defaultProps	= {
	theme: "chrome",
	onChange: (value) => { }
};

export default Editor;
