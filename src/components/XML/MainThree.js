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
        this.el = React.createRef();
    }

    init(){
        this.camera = new THREE.PerspectiveCamera(70, this.el.current.offsetWidth / this.el.current.offsetHeight, 0.01, 1000);
        this.camera.position.z = 1;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.el.current.offsetWidth, this.el.current.offsetHeight);
		
        this.el.current.appendChild(this.renderer.domElement);
        this.renderer.render(this.scene, this.camera);
		sceneManager = new SceneManager(this.scene, this.renderer);

		this.animate();
    }

    animate() {
		sceneManager.Update();
        requestAnimationFrame( () => this.animate() );
		this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
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

//export default withStyles(styles, {withTheme: true})(MainThree);
export { MainThree, sceneManager }
