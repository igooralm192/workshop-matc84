import React, {Component} from 'react';
import {Starfield} from '../space-invaders/js/starfield.js';
import {Game} from '../space-invaders/js/spaceinvaders.js';

class SpaceInvaders extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        //  Create the starfield.
        var container = document.getElementById('starfield');
        var starfield = new Starfield();
        starfield.initialise(container);
        starfield.start();

        //  Setup the canvas.
        var canvas = document.getElementById("gameCanvas");
        canvas.width = 800;
        canvas.height = 600;

        //  Create the game.
        var game = new Game();
        game.setGame(game);
        //  Initialise it with the game canvas.
        game.initialise(canvas);

        //  Start the game.
        game.start();

        //  Listen for keyboard events.
        window.addEventListener("keydown", function keydown(e) {
            var keycode = e.which || window.event.keycode;
            //  Supress further processing of left/right/space (37/29/32)
            if(keycode == 37 || keycode == 39 || keycode == 32) {
                e.preventDefault();
            }
            game.keyDown(keycode);

        });
        window.addEventListener("keyup", function keydown(e) {
            var keycode = e.which || window.event.keycode;
            game.keyUp(keycode);
        });

        window.addEventListener("touchstart", function (e) {
            this.console.log('oi')
            game.touchstart(e);
        }, false);

        window.addEventListener('touchend', function(e){
            game.touchend(e);
        }, false);

        window.addEventListener('touchmove', function(e){
            game.touchmove(e);
        }, false);

        function toggleMute() {
            game.mute();
            document.getElementById("muteLink").innerText = game.sounds.mute ? "unmute" : "mute";
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