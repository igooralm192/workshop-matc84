import React from 'react';
import clsx from 'clsx';

import { Link } from "react-router-dom";
import { Drawer, Typography, ListItem, List, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = () => ({
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
	menuHeader: {
		padding: '16px 16px 0 16px'
	},
	menuHeaderTitle: {
		fontFamily: 'Ubuntu', 
		fontWeight: 'bold', 
		color: '#333'
	},
	menuHeaderSubtitle: {
		fontFamily: 'Ubuntu', 
		color: '#333'
	},
	menuHeaderDivider: {
		width: '100%',
		border: '1px solid #eee',
		margin: '15px 0'
	},
	menuItem: {
		fontFamily: 'Ubuntu',
		fontSize: '1.15em',
		color: '#333',
	},
	menuItemLink: {
		textDecoration: 'none', 
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
	const { classes } = props;

	const items = [
		{
			title: 'XML',
			url: '/xml',
			icon: '</>',
			style: classes.menuItemIconXML
		},
		{
			title: 'JSON',
			url: '/json',
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
				<Typography variant="h5" className={classes.menuHeaderTitle}>Desafios</Typography>
				<Typography variant="subtitle2" className={classes.menuHeaderSubtitle}>Workshop -  MATC84</Typography>
				<div className={classes.menuHeaderDivider}></div>
			</div>
			
            <List disablePadding>
				{
					items.map((item, i) => (
						<Link key={i} to={item.url} className={classes.menuItemLink}>
							<ListItem button onClick={() => props.closeMenu()}>
								<ListItemText>
									<Typography className={classes.menuItem}>
										<span className={clsx(item.style, classes.menuItemIcon)}>{item.icon}</span>
										<span>{item.title}</span>
									</Typography>
								</ListItemText>
							</ListItem>
						</Link>
					))
				}
			</List>
        </Drawer>
    )
}

export default withStyles(styles, {withTheme: true})(Menu);
