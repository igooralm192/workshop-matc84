import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
});

class Stages extends React.Component {
    render() {
        const {steps, activeStep, classes} = this.props;

        return (
            <div className="main-stages">
                <Typography className="steps-title" variant="h6">
                    Etapas
                </Typography>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel>{step.subtitle}</StepLabel>
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