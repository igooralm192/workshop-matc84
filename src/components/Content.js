import React from 'react';
import { Drawer, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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

function Content(props) {
    const { classes } = props;
    return (
        <div className={classes.content}>

        </div>
    )
}

export default withStyles(styles, {withTheme: true})(Content);