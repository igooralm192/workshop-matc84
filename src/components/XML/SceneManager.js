
class SceneManager {
	constructor(threeScene) { 
		this.scene = threeScene;
	} 
	
	BuildScene(sceneDescriptionObj) {
	}

	ClearScene() { 
		while(this.shapes.length > 0) {
			this.shapes = [];
		}
		while(this.scene.length > 0) {
			scene.remove(scene.children[0]);
		}
	}
	
	CreateShape(shapeDescription) {
	}
};
