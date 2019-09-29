import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Grid, Button, MobileStepper } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Stages from './Stages';
import Editor from './Editor';

class Challenge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const { 
            title, subtitle, description, editor, 
            result, expectedResult, steps, activeStep 
        } = this.props;


        return (
            <div className="main-challenge">
                <Grid container>
                    <Grid item xs={12} sm="auto">
                        <Stages steps={steps} activeStep={activeStep}/>
                    </Grid>
                    <Grid item xs={12} sm={true}>
                        <div className="pratice-challenge">
                            <Grid container className="container">
                                <Grid item>
                                    <Typography className="title" variant="h3">{title}</Typography>
                                </Grid>
                                <Grid container style={{minHeight: '200px'}}>
                                    <Grid item xs={12} sm={true}>
                                        <Typography className="subtitle" variant="h6">{subtitle}</Typography>
                                        <Typography className="description">{description}
                                            <span className="code-highlighter">{'starsColor'}</span>
                                            vamo simbora
                                       </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={"auto"} className="expected-result">
                                        {expectedResult}
                                    </Grid>
                                </Grid>
                                <Grid container className="pratice">
                                    <Grid item xs={12} lg={6} className="editor">
                                        {editor}
                                    </Grid>
                                    <Grid item xs={12} lg={6} className="result" tabindex="0">
                                        {result}
                                    </Grid>
                                    <Grid item xs={12} className="controls">
                                        <MobileStepper
                                            className="dots"
                                            variant="dots"
                                            position="static"
                                            steps={steps.length}
                                            activeStep={activeStep}
                                            backButton={
                                                <Button 
                                                    size="small"
                                                    onClick={() => this.props.previousStep()} 
                                                    disabled={activeStep === 0}
                                                >
                                                    <KeyboardArrowLeft/>
                                                    Anterior
                                                </Button>
                                            }
                                            nextButton={
                                                <Button 
                                                    size="small" 
                                                    onClick={() => this.props.nextStep()}
                                                    disabled={activeStep === steps.length-1}
                                                >
                                                    Próxima
                                                    <KeyboardArrowRight/>
                                                </Button>
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                

                
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