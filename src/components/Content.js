import React from 'react';

function Content(props) {
	return (
        <div style={ { height: "100%" } }>
			{props.children}
        </div>
    )
}

export default Content;
