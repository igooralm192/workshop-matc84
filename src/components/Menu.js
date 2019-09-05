import React from 'react';
import clsx from 'clsx';
import { Drawer, Button, Typography, ListItem, List, ListItemText } from '@material-ui/core';
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
	menuHeader: {
		padding: theme.spacing(2)
	},
	menuItem: {
		fontFamily: 'Ubuntu',
		fontSize: '1.15em'
	},
	menuItemIcon: {
		marginRight: '5px',
		fontWeight: 'bold',
		fontFamily: 'Varela Round, sans-serif'
	},
	menuItemIconXML: {
		color: '#ff9100',
	},
	menuItemIconJSON: {
		color: '#9f6bab',
	},
});



function Menu(props) {
	const {classes} = props;

	const items = [
		{
			title: 'XML',
			icon: '</>',
			style: classes.menuItemIconXML
		},
		{
			title: 'JSON',
			icon: '{ ; }',
			style: classes.menuItemIconJSON
		}
	]

	return (
        <Drawer
            className={classes.drawer}
            variant="temporary"
            classes={{paper: classes.drawerPaper}}
		    open={props.menuOpen}
			onClose={() => props.closeMenu()}
        >
			<div className={classes.menuHeader}>
				<Typography variant="h5" style={{fontFamily: 'Ubuntu'}}>Desafios</Typography>
			</div>
            <List>
				{
					items.map((item, i) => (
						<ListItem key={i} button>
							<ListItemText>
								<Typography className={classes.menuItem}>
									<span className={clsx(item.style, classes.menuItemIcon)}>{item.icon}</span>
									<span>{item.title}</span>
								</Typography>
							</ListItemText>
						</ListItem>
					))
				}
			</List>
        </Drawer>
    )
}

export default withStyles(styles, {withTheme: true})(Menu);
