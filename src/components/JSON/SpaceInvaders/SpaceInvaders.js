import React, {Component, useEffect} from 'react';
import {Starfield} from './space-invaders/js/starfield.js';
import {Game, InvaderDraw, ShipDraw} from './space-invaders/js/spaceinvaders.js';

var game = null
var starfield = null

function drawBackground(data, starfield) {
    if (data && starfield) {
        starfield.start(data);
    }    
}

function drawInvaders(data, game) {
    if (data && game) {
        var play = new InvaderDraw(data)
        play.enter(game)
        play.draw(game, game.gameCanvas.getContext("2d"))
    }
}

function drawShip(data, game) {
    if (data && game) {
        var play = new ShipDraw(data)
        play.enter(game)
        play.draw(game, game.gameCanvas.getContext("2d"))
    }
}

function startGame(game, end) {
    //  Start the game.
    if (end && game)
        game.start();
}

function SpaceInvaders({properties}) {

    useEffect(
        () => {
            var container = document.getElementById('starfield');
            starfield = new Starfield();
            starfield.initialise(container);

            //  Setup the canvas.
            var canvas = document.getElementById("gameCanvas");
            canvas.width = 800;
            canvas.height = 600;

            //  Create the game.
            game = new Game(properties);
            game.setGame(game);
            //  Initialise it with the game canvas.
            game.initialise(canvas);

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
        }, []
    )

    useEffect(
        () => drawBackground(properties.background, starfield), [properties.background]
    )

    useEffect(
        () => drawInvaders(properties.invader, game), [properties.invader]
    )

    useEffect(
        () => drawShip(properties.ship, game), [properties.ship]
    )

    useEffect(
        () => startGame(game, properties.end), [properties.end]
    )


    

    return (
        <div id="main-box" >
            <div id="starfield"></div>
            <div id="gamecontainer">
                <canvas id="gameCanvas"></canvas>
            </div>
        </div>
    );
}

export default SpaceInvaders;
