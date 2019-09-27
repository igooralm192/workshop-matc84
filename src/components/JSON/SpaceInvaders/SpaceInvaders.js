import React, {Component, useEffect} from 'react';
import {Starfield} from './space-invaders/js/starfield.js';
import {Game, InvaderDraw, ShipDraw} from './space-invaders/js/spaceinvaders.js';

class SpaceInvaders extends React.Component {
    constructor(props) {
        super(props);

        this.game = null;
        this.starfield = null;
    }

    componentDidMount() {
        this.refResultContainer = document.getElementsByClassName("result")[0]
        
        //  Setup the canvas.
        var canvas = document.getElementById("gameCanvas");
        canvas.width = this.refResultContainer.clientWidth;
        canvas.height = this.refResultContainer.clientHeight;

        window.onresize = () => {
            var canvas = document.getElementById("gameCanvas");
            canvas.width = this.refResultContainer.clientWidth;
            canvas.height = this.refResultContainer.clientHeight;
            //this.clearContainer();
            //this.game.initialise(canvas);
            //this.game.stop();
            //this.game.start();
            //this.drawInvaders(this.props.properties.invader, this.game)
        }

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
            console.log('down',keycode)
            this.game.keyDown(keycode);

        });
        this.refResultContainer.addEventListener("keyup", (e) => {
            var keycode = e.which || window.event.keycode;
            console.log('up',keycode)
            this.game.keyUp(keycode);
        });

        this.refResultContainer.addEventListener("touchstart", (e) => {
            this.console.log('touchstart')
            this.game.touchstart(e);
        }, false);

        this.refResultContainer.addEventListener('touchend', (e) => {
            this.console.log('touchend')
            this.game.touchend(e);
        }, false);

        this.refResultContainer.addEventListener('touchmove', (e) => {
            this.console.log('touchmove')
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

    createGame({ background, invader, ship, game, end }) {
        this.clearContainer();
        this.drawBackground(background, this.starfield);
        this.drawInvaders(invader, this.game);
        this.drawShip(ship, this.game)
        this.configGame(game, this.game)
        this.startGame(end, this.game, this.starfield)
        console.log(this.game)
    }

    clearContainer() {
        let ctxGame = this.game.gameCanvas.getContext('2d');
        ctxGame.clearRect(0, 0, this.game.width, this.game.height);

        let ctxStarfield = this.starfield.canvas.getContext('2d');
        ctxStarfield.clearRect(0, 0, this.starfield.width, this.starfield.height)
    }

    drawBackground(data, starfield) {
        if (data && starfield) {
            starfield.enter(data);
            starfield.draw();
        }
    }
    
    drawInvaders(data, game) {
        if (data && game) {
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
    
    startGame(end, game, starfield) {
        console.log(game, starfield)
        //  Start the game.
        if (end && game) {
            game.start();
            starfield.start();
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
