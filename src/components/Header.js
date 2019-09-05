import React from 'react';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
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

function Header(props) {
    const {classes} = props;
    return (
        <AppBar
            position="fixed"
            style={{backgroundColor: '#349ad8'}}
            className={classes.appBar}
        >
            <Toolbar>
				<IconButton
					color="inherit"
					onClick={() => props.menuClick()}
				>
					<MenuIcon/>
				</IconButton>
                <Typography style={{width: '100%', fontFamily: 'Ubuntu'}} variant="h6" align="center">
                    Workshop <b>XML + JSON</b>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles, {withTheme: true})(Header);

