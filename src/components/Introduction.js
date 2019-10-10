import React from 'react';
import { Grid, Paper, ListItem } from '@material-ui/core' 
import { Link                  } from 'react-router-dom'
import { withStyles  		   } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const styles = theme => ({});

function Introduction(props) {
	const { classes } = props;

	const handleItem = (path) => {
		dispatchEvent(new CustomEvent('changeTheme', {detail: {pathTheme: path}}))
	}
	
    return (
		<Grid container spacing={16} justify="space-evenly" alignItems="center" style={{height: 'calc(100vh - 64px)'}}>
			<Grid item xs="auto">
				<Link to={"/xml/introduction"} onClick={() => handleItem("/xml/introduction")}>
					<Typography variant="h1" style={{fontFamily: 'Ubuntu'}}>
						<span style={{color: "#FF9100", fontFamily: 'Varela Round'}}> {"</>"} </span> XML 
					</Typography>
				</Link>
			</Grid>

			<Grid item xs="auto">
				<Link to={"/json/spaceinvaders"} onClick={() => handleItem("/json/spaceinvaders")}>
					<Typography variant="h1" style={{fontFamily: 'Ubuntu'}}>
						<span style={{color: '#9F6BAB', fontFamily: 'Varela Round'}}> {"{ ; }"} </span> JSON 
					</Typography>
				</Link>
			</Grid>
		</Grid>
    )
}

export default withStyles(styles, {withTheme: true})(Introduction);
