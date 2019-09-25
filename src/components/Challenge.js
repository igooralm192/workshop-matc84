import React from 'react';
import PropTypes from 'prop-types';
import Stages from './Stages';
import { Typography, Grid, Button } from '@material-ui/core';
import Editor from './Editor';

class Challenge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const { title, subtitle, description, editor, result, expectedResult } = this.props;

        return (
            <div className="main-challenge">
                <Stages/>

                <div className="pratice-challenge">
                    <Grid container className="container">
                        <Grid item>
                            <Typography className="title" variant="h3" align="center">{title}</Typography>
                        </Grid>
                        <Grid container spacing={16}  style={{minHeight: '200px'}}>
                            <Grid item xs={true}>
                                <Typography className="subtitle" variant="h6">{subtitle}</Typography>
                                <Typography className="description">{description}</Typography>
                            </Grid>
                            <Grid item className="expected-result">
                                Esperado
                            </Grid>
                        </Grid>
                        <Grid container className="pratice">
                            <Grid item xs={12} lg={7} className="editor">
                                {editor}
                            </Grid>
                            <Grid item xs={12} lg={5} className="result">
                                {result}
                            </Grid>
                            <Grid item xs={12} className="controls">
                                <Button color="primary">Anterior</Button>
                                <Button color="primary">Próxima</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

Challenge.defaultProps = {
    title: '',
    subtitle: '',
    description: '',
    editor: <Editor/>,
    result: <div></div>,
    expectedResult: <div></div>
}

Challenge.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    editor: PropTypes.element,
    result: PropTypes.element,
    expectedResult: PropTypes.element
}

export default Challenge;