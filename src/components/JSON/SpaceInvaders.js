import React, {Component, useEffect} from 'react';
import {Starfield} from './space-invaders/js/starfield.js';
import {Game, PlayState, InvaderDraw, ShipDraw} from './space-invaders/js/spaceinvaders.js';

function drawBackground(data) {
    if (data) {
        var container = document.getElementById('starfield');
        var starfield = new Starfield();
        starfield.initialise(container);
        starfield.start(data);
    }    
}

function drawInvaders(data, game) {
    if (data) {
        var play = new InvaderDraw(data)
        play.enter(game)
        play.draw(game, game.gameCanvas.getContext("2d"))
    }
}

function drawShip(data, game) {
    if (data) {
        var play = new ShipDraw(data)
        play.enter(game)
        play.draw(game, game.gameCanvas.getContext("2d"))
    }
}

function SpaceInvaders({properties}) {
    var game = null

    useEffect(
        () => {
            var container = document.getElementById('starfield');
            var starfield = new Starfield(properties);
            starfield.initialise(container);
            starfield.start();

            //  Setup the canvas.
            var canvas = document.getElementById("gameCanvas");
            canvas.width = 800;
            canvas.height = 600;
    
            //  Create the game.
            game = new Game(properties);
            game.setGame(game);
            //  Initialise it with the game canvas.
            game.initialise(canvas);

            //  Start the game.
            game.start();
        }, [properties]
    )

    // useEffect(
    //     () => drawBackground(properties.background), [properties.background]
    // )

    // useEffect(
    //     () => drawInvaders(properties.invader, game), [properties.invader]
    // )

    // useEffect(
    //     () => drawShip(properties.ship, game), [properties.ship]
    // )

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
