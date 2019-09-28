import React from 'react';
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles';

import * as THREE from 'three'


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
        

        this.scene = new THREE.Scene();
        //this.forms = new Geometries();
        
       
        //console.log(this.meshes.length);



        this.scene.background = new THREE.Color(0x000000);

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.el.current.offsetWidth, this.el.current.offsetHeight);
        this.el.current.appendChild(this.renderer.domElement);

        //this.animate();
        this.renderer.render(this.scene, this.camera);
    }

    animate(){
        requestAnimationFrame( () => this.animate() );
        for(let i in this.meshes){
            //let prevPos = {x: this.meshes[i].position.x, y: this.meshes[i].position.y};
            
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