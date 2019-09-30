import React from 'react';
import clsx from 'clsx';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';

const styles = theme => ({
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        paddingHorizontal: theme.spacing(3),
    },
    root: {
        marginBottom: 8
    },
    active: {}
});

const stylesIcon = () => ({
    root: {
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.38)',
        zIndex: 1,
        borderRadius: '50%',
        width: 25,
        height: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Ubuntu',
        fontSize: 14,
    },
    active: {
        backgroundColor: window.themeColor,
    },
    completed: {
        backgroundColor: window.themeColor,
    },
    check: {
        fontSize: 17
    }
})

function MyStepIcon(props) {
    const { classes, active, completed, icon } = props;

    return (
        <div className={clsx(classes.root,{
            [classes.active]: active,
            [classes.completed]: completed
        })}>
            {
                completed ? <Check className={classes.check}/> : icon
            }
        </div>
    )
}

class Stages extends React.Component {
    render() {
        const {steps, activeStep, classes} = this.props;

        return (
            <div className="main-stages">
                <Typography className="steps-title" variant="h6">
                    Etapas
                </Typography>
                <Stepper activeStep={activeStep} orientation="vertical" >
                    {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel
                            className={classes.root}
                            StepIconComponent={withStyles(stylesIcon)(MyStepIcon)}
                        >
                            {step.subtitle}
                        </StepLabel>
                    </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>Todas as etapas&apos;foram finalizadas!</Typography>
                    <Button 
                        // onClick={handleReset}
                        className={classes.button}>
                        Reiniciar
                    </Button>
                    </Paper>
                )}
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Stages);