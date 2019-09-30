import React from 'react';
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles';
import * as THREE from 'three'
import SceneManager from './SceneManager'

const styles = theme => ({});

let sceneManager;

class MainThree extends React.Component{
    constructor(){
        super();
		this.backgroundColor = 'white';
        this.el = React.createRef();
    }

    init(){
        // this.camera = new THREE.PerspectiveCamera(70, this.el.current.offsetWidth / this.el.current.offsetHeight, 0.01, 1000);
        // this.camera.position.z = 1;

		this.camera = new THREE.OrthographicCamera(
			this.el.current.offsetWidth / -2, 
			this.el.current.offsetWidth /  2,
			this.el.current.offsetHeight / 2,
			this.el.current.offsetHeight /  -2);

		// Moves the camera far away, so the most object with a 
		// positive z coordinate will be visible
		this.camera.position.z = 1000;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.backgroundColor);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.el.current.offsetWidth, this.el.current.offsetHeight);
		
        this.el.current.appendChild(this.renderer.domElement);
        this.renderer.render(this.scene, this.camera);
		sceneManager = new SceneManager(this.scene, this.renderer);

		window.addEventListener('resize', () => { this.onWindowResize() }, false);
		this.animate();
    }

    animate() {
		sceneManager.Update();
        requestAnimationFrame( () => this.animate() );
		this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
    }
	
	onWindowResize() {
		this.camera.aspect = this.el.current.offsetWidth / this.el.current.offsetHeight;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.el.current.offsetWidth, this.el.current.offsetHeight);
	}

    componentDidMount(){
        this.init();
    }

    render() { 
		return(
			<div className={clsx('split', 'right') } ref={this.el}> </div>
		)
	} 
}

export { MainThree, sceneManager }
