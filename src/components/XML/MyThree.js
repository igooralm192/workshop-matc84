import React from 'react';
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles';

import * as THREE from 'three'
import Geometries from './Geometries'

const styles = theme => ({});

class MainThree extends React.Component{
    constructor(){
        super();
        this.el = React.createRef();
    }

    init(){
        console.log(this.el);
        this.camera = new THREE.PerspectiveCamera(70, this.el.current.offsetWidth / this.el.current.offsetHeight, 0.01, 1000);
        this.camera.position.z = 1;
        this.camera.position.x = 0;
        this.camera.position.y = 0;

        this.scene = new THREE.Scene();
        //this.forms = new Geometries();
        this.meshes = new Array();
        let mesh = Geometries.addRect(this.scene, -0.5, 0, 0.3, 0.3, 0x42f5e3);
        this.meshes.push(mesh);
        mesh = Geometries.addCircle(this.scene, 0.5, 0, 0.3);
        this.meshes.push(mesh);
        mesh = Geometries.addElipse(this.scene, 0, 0.5, 0.5, 0.2);
        this.meshes.push(mesh);
        console.log(this.meshes.length);

        this.scene.background = new THREE.Color(0x999999);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.el.current.offsetWidth, this.el.current.offsetHeight);
        this.el.current.appendChild(this.renderer.domElement);

        this.animate();
    }

    animate(){
        requestAnimationFrame( () => this.animate() );
        for(let i in this.meshes){
            this.meshes[i].rotation.x += 0.01;
        }    
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

export default withStyles(styles, {withTheme: true})(MainThree);