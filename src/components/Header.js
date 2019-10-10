import React from 'react';
import { Link } from 'react-router-dom'
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
		backgroundColor: '#3f51b5'
    },
	headerTitle: {width: '100%', fontFamily: 'Ubuntu'}
});

function Header(props) {
	const { classes } = props;
    
    return (
        <AppBar
            position="relative"
            className={classes.header}
            style={{backgroundColor: window.themeColor}}
        >
            <Toolbar>
				<IconButton
                    style={{marginRight: '0.9em'}}
					color="inherit"
					onClick={() => props.menuClick()}
				>
					<MenuIcon/>
				</IconButton>
                <Link to="/" style={{width: '100%'}} onClick={() => dispatchEvent(new CustomEvent('changeTheme', {detail: {pathTheme: '/'}}))}>
                    <Typography className={classes.headerTitle} variant="h6">
                        Workshop <b>XML + JSON</b>
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles, {withTheme: true})(Header);

