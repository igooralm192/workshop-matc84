import React from 'react';
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles';
import * as THREE from 'three'
import SceneManager from './SceneManager'
import { xmlparser, ParseErrorType } from './XMLParser'

const styles = theme => ({});
const BACKGROUND_COLOR = 'white'

let resultSceneManager;

class MainThreeResult extends React.Component{
    constructor(props){
        super(props);
        this.el = React.createRef();
		this.windowResizeHandler = () => { this.onWindowResize() }
    }

    init(){
        // this.camera = new THREE.PerspectiveCamera(70, this.el.current.offsetWidth / this.el.current.offsetHeight, 0.01, 1000);
		// this.camera.position.z = 1;
		
		this.camera = new THREE.OrthographicCamera(
			808  / -2, 
			808  /  2,
			448 /  2,
			448 / -2);

		// Moves the camera far away, so the most object with a 
		// positive z coordinate will be visible
		this.camera.position.z = 1000;

        this.scene = new THREE.Scene();
		let loader = new THREE.TextureLoader();
        this.scene.background = new THREE.Color(BACKGROUND_COLOR);
		
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.el.current.offsetWidth, this.el.current.offsetHeight);

		
        this.el.current.appendChild(this.renderer.domElement);
        this.renderer.render(this.scene, this.camera);
		resultSceneManager = new SceneManager(this.scene, this.renderer);

		window.addEventListener('resize', this.windowResizeHandler, false);
		
		this.animate();
	}
	
	componentDidUpdate(prevProps, prevState, snapshot) {
		//super(prevProps, prevState, snapshot);
		let {expectedResult} = this.props;
		let sceneDescription = xmlparser.parseXML(expectedResult);
		let shapes = xmlparser.getSceneElements(sceneDescription.data.data);
		resultSceneManager.BuildScene(shapes);
			
	}

    animate() {
		resultSceneManager.Update();
        requestAnimationFrame( () => this.animate() );
		this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
    }
	
	onWindowResize() {
		this.camera.aspect = this.el.current.offsetWidth / this.el.current.offsetHeight;
		//this.camera.updateProjectionMatrix();
		this.renderer.setSize(this.el.current.offsetWidth, this.el.current.offsetHeight);
	}

    componentDidMount(){
        this.init();
    }

	componentWillUnmount() {
		window.removeEventListener('resize', this.windowResizeHandler); 
	}
    render() { 
		return(
			<div /*className={clsx('split', 'right') }*/ ref={this.el}> </div>
		)
	} 
}

export { MainThreeResult, resultSceneManager, BACKGROUND_COLOR }
