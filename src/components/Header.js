import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
    root: {
      	display: 'flex',
    },
    
    drawer: {
		width: drawerWidth,
		flexShrink: 0,
    },
    drawerPaper: {
      	width: drawerWidth,
    },
	toolbar: theme.mixins.toolbar,
	header: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: '#349ad8'
    },
	headerTitle: {width: '100%', fontFamily: 'Ubuntu'}
});

function Header(props) {
	const {classes} = props;
	
    return (
        <AppBar
            position="relative"
            className={classes.header}
        >
            <Toolbar>
				<IconButton
					color="inherit"
					onClick={() => props.menuClick()}
				>
					<MenuIcon/>
				</IconButton>
                <Typography className={classes.headerTitle} variant="h6" align="center">
                    Workshop <b>XML + JSON</b>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles, {withTheme: true})(Header);

