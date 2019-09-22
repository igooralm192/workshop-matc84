import React from 'react';
import Stages from './Stages';
import { Typography, Grid } from '@material-ui/core';

class Challenge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const { title, subtitle } = this.props;

        return (
            <div className="main-challenge">
                <Stages/>

                <div className="pratice-challenge">
                    <Grid container spacing={16} className="container">
                        <Grid item>
                            <Typography className="title" variant="h3" align="center">{title}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography className="subtitle" variant="h6">{subtitle}</Typography>
                            <Typography className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Grid>
                        <Grid container className="pratice">
                            <Grid item xs={12} lg={6} className="editor">
                                Editor
                            </Grid>
                            <Grid item xs={12} lg={6} className="result">
                                Resultado
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Challenge;