import React from 'react';
import { Grid, Paper, ListItem } from '@material-ui/core' 
import { Link                  } from 'react-router-dom'
import { withStyles  		   } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({});

function Introduction(props) {
	const { classes } = props;
	
    return (
		<Grid container spacing={5} justify="space-evenly" alignItems="center" style={{height: '100vh'}}>
			<Grid item>
				<Link to = { "/json/spaceinvaders" }>
					<Typography variant="h1">
						<span style={{color: "#FF9100" }}> {"</>"} </span> XML 
					</Typography>
				</Link>
			</Grid>

			<Grid item>
				<Link to = { "/xml/introduction" }>
						<Typography variant="h1">
							<span style={{color: '#9F6BAB'}}> {"{;}"} </span> JSON 
						</Typography>
				</Link>
			</Grid>
		</Grid>
    )
}

export default withStyles(styles, {withTheme: true})(Introduction);
