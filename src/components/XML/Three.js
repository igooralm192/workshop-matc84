import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

import Ace from 'react-ace';
import "brace/mode/json";
import 'brace/theme/github';

const drawerWidth = 240;

const styles = theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
});


function Three(props) {
    const {classes} = props;

    return (
        <div>
            <Ace/>
            <div className="split right">
                <div id="right" className="centered">	</div>
            </div>
        </div>
    )
}

export default withStyles(styles, {withTheme: true})(Three);
