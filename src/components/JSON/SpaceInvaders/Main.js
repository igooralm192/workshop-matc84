import React, { useState, useEffect } from 'react';

import Challenge from '../../Challenge';
import Editor from '../../Editor';
import SpaceInvaders from './SpaceInvaders';

import Schema from 'validate'
import Validator from './Validator'

const challenge = 'Space Invaders'

const steps = [
    {
        title: challenge,
        subtitle: 'Introdução',
        description: 'Vamos iniciar ae krl',
        initProperties: {}
    },
    {
        title: challenge,
        subtitle: 'Background',
        description: 'Vamos iniciar ae krl',
        initProperties: {}
    },
    {
        title: challenge,
        subtitle: 'Invaders',
        description: 'Vamos iniciar ae krl',
        initProperties: {}
    }
]

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 0,
            editorValue: '',
            resultProperties: {},
            errors: []
        }

        this.schema = new Schema(Validator);
    }

    handleEditor(value, step) {          
        let properties = {};

        try { var editorProperties = JSON.parse(value); } catch(e) { 
            this.setState({editorValue: value})
            return;
        }

        if (step == 0) properties = {}
        if (step >= 1) properties = {...properties, background: {...editorProperties.background}}
        if (step >= 2) properties = {...properties, invader: {...editorProperties.invader}}
        if (step >= 3) properties = {...properties, ship: {...editorProperties.ship}}
        if (step >= 4) properties = {...properties, game: {...editorProperties.game}}
        if (step >= 5) properties = {...properties, start: editorProperties.start}

        let validation = this.schema.validate(properties);

        if (validation.length > 0) {
            this.setState({editorValue: value, errors: [{ row: 0, column: 0, type: 'error', text: validation[0].message}]});
            return;
        }

        this.setState({editorValue: value, resultProperties: properties, errors: []})
    }

    handleStep(step) {
        this.setState({step})
        this.handleEditor(this.state.editorValue, step)
    }

    render() {
        const { step, editorValue, resultProperties, errors } = this.state;

        return (
            <div style={{height: '100%'}}>
                <Challenge 
                    title={steps[step].title} 
                    subtitle={steps[step].subtitle} 
                    description={steps[step].description} 
                    editor={
                        <Editor 
                            mode="json" 
                            value={editorValue}
                            annotations={errors}
                            onChange={(value) => this.handleEditor(value, step)}
                        />
                    }
                    result={<SpaceInvaders properties={resultProperties}/>}
                    steps={steps}
                    activeStep={step}
                    previousStep={ () => this.handleStep(Math.max(0, step-1)) }
                    nextStep={ () => this.handleStep(Math.min(steps.length-1, step+1)) }
                />
            </div>
        )
    }
}

export default Main;