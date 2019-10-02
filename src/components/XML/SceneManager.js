import ShapeFactory from './ShapeFactory'
import { BACKGROUND_COLOR          } from './MainThree'
import { xmlparser                 } from './XMLParser' 
import { GeometricShape, ShapeType } from './GeometricShape'
import * as THREE from 'three'

class SceneManager {
	constructor(threeScene, renderer) { 
		this.scene = threeScene;
		this.rendererRef = renderer;
		this.shapes = new Array();
	} 
	
	BuildScene(sceneDescriptionObj) {
		this.ClearScene();
		
		sceneDescriptionObj.forEach( (element, index) => {
			this.CreateShape(element, null);
		});
	}

	ClearScene() { 
		this.shapes = [];
		this.scene.background = new THREE.Color(BACKGROUND_COLOR);

		while(this.scene.length > 0) {
			this.scene.children[0].geometry.dispose();
			this.scene.children[0].material.dispose();
		}
		this.scene.children = [];
		this.rendererRef.renderLists.dispose();
	}
	
	CreateShape(sceneElement, parent) {
		let attributes = xmlparser.getSceneElementAttributes(sceneElement);
		let mesh;
		
		if(sceneElement.type == ShapeType.RECT) {
			mesh = ShapeFactory.addRect( attributes );
		}
		else if(sceneElement.type == ShapeType.CIRCLE) {
			mesh = ShapeFactory.addCircle(attributes);
		}
		else {
			mesh = ShapeFactory.addEllipse(attributes);
		}
		
		let shape = new GeometricShape(ShapeType.RECT, mesh, parent);
		let transformations = xmlparser.getTransformations(sceneElement);

		transformations.forEach( (transformation, index) => {
			shape.addTransformation(transformation) 
		});

		this.shapes.push(shape);

		if(parent === null) this.scene.add(mesh);
		else parent.addChild(shape);

		let children = xmlparser.getSceneElementChildren(sceneElement);

		children.forEach((element, index) => this.CreateShape(element, shape));
	}

	Update() {
		this.shapes.forEach( (element, index) => {
			element.update(); 
		}); 
	}
};

export default SceneManager;
