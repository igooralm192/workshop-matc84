import ShapeFactory from './ShapeFactory'
import { BACKGROUND_COLOR          } from './MainThree'
import { xmlparser                 } from './XMLParser' 
import { GeometricShape, ShapeType } from './GeometricShape'
import * as THREE from 'three'

const SceneElement = {
	BACKGROUND: "background" 
}

class SceneManager {
	constructor(threeScene, renderer) { 
		this.scene = threeScene;
		this.rendererRef = renderer;
		this.shapes = new Array();
	} 
	
	BuildScene(sceneDescriptionObj) {
		this.ClearScene();

		sceneDescriptionObj.forEach( (element, index) => {
			this.CreateSceneElement(element, null);
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
	
	CreateSceneElement(sceneElement, parent) {
		let attributes = xmlparser.getSceneElementAttributes(sceneElement);
		let shapeType;
		let mesh;
		
		if(sceneElement.type == SceneElement.BACKGROUND) {
			this.SetBackground(attributes) ;
			return;
		}
		else if(sceneElement.type == ShapeType.RECT) {
			mesh = ShapeFactory.addRect( attributes );
		}
		else if(sceneElement.type == ShapeType.CIRCLE) {
			mesh = ShapeFactory.addCircle(attributes);
		}
		else if(sceneElement.type == ShapeType.TRIANGLE) {
			mesh = ShapeFactory.addTriangle(attributes);
		}
		else if(sceneElement.type == ShapeType.ELLIPSE) { 
			mesh = ShapeFactory.addEllipse(attributes);
		}
		
		let shape = new GeometricShape(mesh, parent);
		let transformations = xmlparser.getTransformations(sceneElement);

		transformations.forEach( (transformation, index) => {
			shape.addTransformation(transformation) 
		});

		this.shapes.push(shape);

		if(parent === null) this.scene.add(mesh);
		else parent.addChild(shape);

		let children = xmlparser.getSceneElementChildren(sceneElement);

		children.forEach((element, index) => this.CreateSceneElement(element, shape));
	}

	SetBackground(attributes) {
		this.scene.background = new THREE.Color(attributes.color);
	}
	Update() {
		this.shapes.forEach( (element, index) => {
			element.update(); 
		}); 
	}
};

export default SceneManager;
