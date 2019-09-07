import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Ace from 'react-ace';
import "brace/mode/xml";
import 'brace/theme/monokai';

const styles = theme => ({});

function Three(props) {
    
    const {classes} = props;
    
    return (
        <div>
            <Ace
                mode="xml"
                theme="monokai"
            />
            <div className="split right">
                <div id="right" className="centered"></div>
            </div>
        </div>
    )
}

export default withStyles(styles, {withTheme: true})(Three);
