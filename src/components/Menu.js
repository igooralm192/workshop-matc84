import React, { useState } from 'react';
import clsx from 'clsx';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import XMLChallenges from './XML/Challenges' 
import { Link } from "react-router-dom";
import { Drawer, Typography, ListItem, List, ListItemText, ListItemIcon, Collapse } from '@material-ui/core';
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
	menuItemNested: {
		paddingLeft: '1em'
	}
});

const xmlItems = new Array();
XMLChallenges.forEach((challenge, i) => {
	xmlItems.push({ name: [`${i + 1}. `+ challenge.title], url: challenge.path });
});

function Menu(props) {
	const { classes } = props;

	const [openXML, setOpenXML] = useState(false);
	const [openJSON, setOpenJSON] = useState(false);

	const items = [
		{
			title: 'XML',
			icon: '</>',
			style: classes.menuItemIconXML,
			challenges: xmlItems 
		},
		{
			title: 'JSON',
			icon: '{ ; }',
			style: classes.menuItemIconJSON,
			challenges: [{name: 'Space Invaders', url: '/json/spaceinvaders',}]
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
					items.map((item, i) => [
						//<Link key={i} to={item.url} className={classes.menuItemLink}>
							<ListItem key={i} button onClick={() => i==0?setOpenXML(!openXML):setOpenJSON(!openJSON)}>
								<ListItemText>
									<Typography className={classes.menuItem}>
										<span className={clsx(item.style, classes.menuItemIcon)}>{item.icon}</span>
										<span>{item.title}</span>
									</Typography>
									
								</ListItemText>
								{
									i == 0 ?
									openXML ? <ExpandLess/> : <ExpandMore/> :
									openJSON ? <ExpandLess/> : <ExpandMore/>
								}
							</ListItem>,
							<Collapse in={i==0?openXML:openJSON} timeout="auto" unmountOnExit>
								<List disablePadding>
									{
										item.challenges.map((challenge, j) => (
											<Link key={i} to={challenge.url} className={classes.menuItemLink}>
												<ListItem key={i} button onClick={() => props.closeMenu()}>
													<ListItemText>
														<Typography className={clsx(classes.menuItem, classes.menuItemNested)}>
															{challenge.name}
														</Typography>
													</ListItemText>
												</ListItem>
											</Link>
										))
									}
								</List>
							</Collapse>
							
						//</Link>
					])
				}
			</List>
        </Drawer>
    )
}

export default withStyles(styles, {withTheme: true})(Menu);
