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
        lives: 2,
        speed: 25,
        acceleration: 0,
        bombColor: '#ff5555',
        bombRate: 0.05
    },
    ship: {
        width: 20,
        height: 18,
        speed: 200,
        shootRate: 5,
        rocketVelocity: 2,
    },
    game: {
        lives: 5,
        difficultyMultiplier: 0.2,
        pointsPerInvader: 20
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

    validBackground(properties) {
        let { background } = properties;

        if (background && typeof background === 'object' && !Array.isArray(background)) {
            let { color, starColor, starNumber } = background;

            if (color && typeof color !== 'string') 
                delete properties.background.color;
            if (starColor && typeof starColor !== 'string') 
                delete properties.background.starColor;
            if (starNumber && typeof starNumber !== 'number') 
                delete properties.background.starNumber;

        } else delete properties.background;

        return properties;
    }

    validInvader(properties) {
        let { invader } = properties;

        if (invader && typeof invader === 'object' && !Array.isArray(invader)) {
            let { amount, speed, lives, difficulty } = invader;

            if (amount > 0 && !Number.isInteger(amount)) 
                delete properties.invader.amount;
            if (speed > 0 && !Number.isInteger(speed)) 
                delete properties.invader.speed;
            if (lives > 0 && !Number.isInteger(lives)) 
                delete properties.invader.lives;
            if (difficulty > 0 && !(Number(difficulty) === difficulty && difficulty%1 !== 0)) 
                delete properties.invader.difficulty;

        } else delete properties.invader;

        return properties
    }

    validShip(properties) {
        let { ship } = properties;

        if (ship && typeof ship === 'object' && !Array.isArray(ship)) {
            let { width, height, speed, shootRate } = ship;

            if (width > 0 && !Number.isInteger(width)) 
                delete properties.ship.width;
            if (height > 0 && !Number.isInteger(height)) 
                delete properties.ship.height;
            if (speed > 0 && !Number.isInteger(speed)) 
                delete properties.ship.speed;   
            if (shootRate > 0 && !Number.isInteger(shootRate)) 
                delete properties.ship.shootRate;

        } else delete properties.ship;

        return properties
    }

    // validGame(properties) {
    //     let { game } = properties;

    //     if (game && typeof game === 'object' && !Array.isArray(game)) {
    //         let { width, height, speed, shootRate } = ship;

    //         if (width > 0 && !Number.isInteger(width)) 
    //             delete properties.ship.width;
    //         if (height > 0 && !Number.isInteger(height)) 
    //             delete properties.ship.height;
    //         if (speed > 0 && !Number.isInteger(speed)) 
    //             delete properties.ship.speed;   
    //         if (shootRate > 0 && !(Number(shootRate) === shootRate && shootRate%1 !== 0)) 
    //             delete properties.ship.shootRate;

    //     } else delete properties.ship;

    //     return properties
    // }

    handleEditor(value) {        
        let properties = this.state.resultProperties;

        try { properties = JSON.parse(value)} catch(e) {}

        properties = this.validBackground(properties);
        properties = this.validInvader(properties);
        properties = this.validShip(properties);

        this.setState({editorValue: value, resultProperties: properties})
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
                    result={<SpaceInvaders properties={resultProperties}/>}
                    steps={steps}
                    activeStep={step}
                    previousStep={ () => this.setState( { step: Math.max(0, step-1) } ) }
                    nextStep={ () => this.setState( { step: Math.min(steps.length-1, step+1) } ) }
                />
            </div>
        )
    }
}

export default Main;