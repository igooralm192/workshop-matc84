import React, {Component, useEffect} from 'react';
import {Starfield} from './space-invaders/js/starfield.js';
import {Game, InvaderDraw, ShipDraw} from './space-invaders/js/spaceinvaders.js';

class SpaceInvaders extends React.Component {
    constructor(props) {
        super(props);

        this.game = null;
        this.starfield = null;

        this.onResize = this.onResize.bind(this);
    }

    componentDidMount() {
        this.refResultContainer = document.getElementsByClassName("result")[0]
        
        //  Setup the canvas.
        var canvas = document.getElementById("gameCanvas");
        canvas.width = this.refResultContainer.clientWidth;
        canvas.height = this.refResultContainer.clientHeight;

        window.addEventListener('resize', this.onResize, false);

        var container = document.getElementById('starfield');
        this.starfield = new Starfield();
        this.starfield.initialise(container, this.refResultContainer);
        //this.starfield.enter({color: 'black'})
        //this.starfield.start();

        //  Create the game.
        this.game = new Game(this.props.resultProperties);
        this.game.setGame(this.game);
        
        //  Initialise it with the game canvas.
        this.game.initialise(canvas);
        //this.game.start();

        //  Listen for keyboard events.
        this.refResultContainer.addEventListener("keydown", (e) => {
            var keycode = e.which || window.event.keycode;
            //  Supress further processing of left/right/space (37/29/32)
            if(keycode == 37 || keycode == 39 || keycode == 32) {
                e.preventDefault();
            }
            //console.log('down',keycode)
            this.game.keyDown(keycode);

        });
        this.refResultContainer.addEventListener("keyup", (e) => {
            var keycode = e.which || window.event.keycode;
            //console.log('up',keycode)
            this.game.keyUp(keycode);
        });

        this.refResultContainer.addEventListener("touchstart", (e) => {
            this.game.touchstart(e);
        }, false);

        this.refResultContainer.addEventListener('touchend', (e) => {
            this.game.touchend(e);
        }, false);

        this.refResultContainer.addEventListener('touchmove', (e) => {
            this.game.touchmove(e);
        }, false);

        function toggleMute() {
            this.game.mute();
            document.getElementById("muteLink").innerText = this.game.sounds.mute ? "unmute" : "mute";
        }

        
    }

    componentWillReceiveProps(props, state) {
        this.createGame(props.properties);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize, false);
    }

    onResize() {
        var canvas = document.getElementById("gameCanvas");
        canvas.width = this.refResultContainer.clientWidth;
        canvas.height = this.refResultContainer.clientHeight;
        this.clearContainer();
        this.game.initialise(canvas);

        if (this.props.properties.start) {
            this.game.initialise(canvas);
            this.game.stop();
            this.game.start();
        } else {
            this.createGame(this.props.properties);
        }
    }

    createGame(properties) {
        console.log(properties)
        let { background, invader, ship, game, start } = properties
        this.clearContainer();
        this.drawBackground(background, this.starfield);
        this.drawInvaders(invader, this.game);
        this.drawShip(ship, this.game)
        this.configGame(game, this.game)
        this.startGame(start, this.game, this.starfield, properties)
        //console.log(this.game)
    }

    clearContainer() {
        let ctxGame = this.game.gameCanvas.getContext('2d');
        ctxGame.clearRect(0, 0, this.game.width, this.game.height);

        let ctxStarfield = this.starfield.canvas.getContext('2d');
        ctxStarfield.clearRect(0, 0, this.starfield.width, this.starfield.height)

        this.starfield.stop();
        this.game.stop();
    }

    drawBackground(data, starfield) {
        if (data && starfield) {
            starfield.enter(data);
            starfield.draw();
        }
    }
    
    drawInvaders(data, game) {
        if (data && game) {
            console.log('eae')
            var invader = new InvaderDraw(data, game)
            invader.enter(game)
            invader.draw(game, game.gameCanvas.getContext("2d"))
        }
    }
    
    drawShip(data, game) {
        if (data && game) {
            var ship = new ShipDraw(data)
            ship.enter(game)
            ship.draw(game, game.gameCanvas.getContext("2d"))
        }
    }

    configGame(data, game) {
        if (data && game) {
            game.setConfig({
                gameLives: data.lives,
                levelDifficultyMultiplier: data.difficultyMultiplier,
                pointsPerInvader: data.pointsPerInvader
            })
        }
    }
    
    startGame(data, game, starfield, properties) {
        //console.log(game, starfield)
        //  Start the game.
        if (data && game && starfield) {
            let { background, invader, ship, game: gameConfig } = properties;
            starfield.enter({
                color: background.color?background.color:'#000',
                starsColor: background.starsColor?background.starsColor:'#fff',
                starsNumber: background.starsNumber?background.starsNumber:100,
            })
            starfield.start();
            game.setConfig({
                invadersAmount: invader.amount?invader.amount:20,
                invaderInitialVelocity: invader.speed?invader.speed:25,
                invadersLives: invader.lives?invader.lives:1,
                invaderAcceleration: invader.acceleration?invader.acceleration:0,
                bombColor: invader.bombColor?invader.bombColor:'#ff3333',
                bombRate: invader.bombRate?invader.bombRate:0.05,

                shipWidth: ship.width?ship.width:20,
                shipHeight: ship.height?ship.height:20,
                shipSpeed: ship.speed?ship.speed:120,
                rocketVelocity: ship.rocketVelocity?ship.rocketVelocity:120,
                rocketMaxFireRate: ship.shootRate?ship.shootRate:2,

                gameLives: gameConfig.lives?gameConfig.lives:3,
                levelDifficultyMultiplier: gameConfig.difficultyMultiplier?gameConfig.difficultyMultiplier:0.2,
                pointsPerInvader: gameConfig.pointsPerInvader?gameConfig.pointsPerInvader:50
            })
            game.start();
            
        }
    }

    render() {
        return (
            <div id="main-box" >
                <div id="starfield"></div>
                <div id="gamecontainer">
                    <canvas id="gameCanvas"></canvas>
                </div>
            </div>
        );
    }
}

export default SpaceInvaders;
