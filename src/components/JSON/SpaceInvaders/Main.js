import React, { useState, useEffect } from 'react';

import Challenge from '../../Challenge';
import Editor from '../../Editor';
import SpaceInvaders from './SpaceInvaders';

const challenge = 'Space Invaders'

const steps = [
    {
        title: challenge,
        subtitle: 'Introdução',
        description: 'Vamos iniciar ae krl',
        initProperties: {}
    }
]

const properties = {
    background: {
        color: '#000000',
        starColor: 'yellow',
        starNumber: 1001
    },
    invader: {
        amount: 34,
        speed: 25,
        lives: 2,
        difficulty: 0.2
    },
    ship: {
        width: 20,
        height: 18,
        speed: 200,
        shotRate: 5,
        rocketWidth: 4,
        rocketHeight: 4,
    },
    game: {
        lives: 5,
    },
    end: false
}

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 0,
            editorValue: '',
            resultProperties: {}
        }

        this.handleEditor = this.handleEditor.bind(this)
    }

    handleEditor(value) {
        if (value == this.state.editorValue) return;
        
        let newProperties = this.state.resultProperties;
        try { newProperties = JSON.parse(value)} catch(e) {}

        this.setState((prevState) => ({editorValue: value, resultProperties: newProperties}))
    }

    render() {
        const { step, editorValue, resultProperties } = this.state;

        console.log(editorValue, resultProperties)
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
                            onChange={(value) => this.handleEditor(value)}
                        />
                    }
                    // result={<SpaceInvaders properties={resultProperties}/>}
                />
            </div>
        )
    }
}

export default Main;