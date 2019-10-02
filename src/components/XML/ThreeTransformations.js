import * as THREE from 'three'

const TransformationType = {
	TRANSLATE: "translate",
	ROTATE:    "rotate",
	ORBIT:     "orbit",
	TILT:      "tilt"
};

const translateTransformation = (shape, transformationData) => {
	if(!transformationData.done) {
		shape.mesh.translateX(transformationData.x);
		shape.mesh.translateY(transformationData.y);
		transformationData.done = true;
	}
}

const rotateTransformation = (shape, transformationData) => { 
	shape.mesh.rotateOnAxis(new THREE.Vector3(0, 0, 1), transformationData.speed * 0.001);
}

const orbitTransformation = (shape, transformationData) => {
	if(shape.parent != null) {
	if(!transformationData.done) {
		transformationData.originalX = shape.mesh.position.x; 
		transformationData.originalY = shape.mesh.position.y;
		transformationData.done = true;
	}

		let timestep = Date.now() * transformationData.speed * 0.0001;
		let xDistanceFromFather = shape.parent.mesh.position.x - transformationData.originalX;
		let yDistanceFromFather = shape.parent.mesh.position.y - transformationData.originalY;

		let cPos = new THREE.Vector2(transformationData.originalX, transformationData.originalY);
		let pPos = new THREE.Vector2(shape.parent.mesh.position.x, shape.parent.mesh.position.y);
		let distance = cPos.distanceTo(pPos);

		shape.mesh.position.x = 
			Math.cos(timestep) * distance + shape.parent.mesh.position.x;
		shape.mesh.position.y = 
			Math.sin(timestep) * distance + shape.parent.mesh.position.y;
	}
}

const tiltTransformation = (shape, transformationData) => {
	if(!transformationData.done) {
		shape.mesh.rotateOnAxis(
			new THREE.Vector3(0, 0, 1), 
			THREE.Math.degToRad(transformationData.angle)); 
		transformationData.done = true;
	}
}

let transforms = {};

transforms[TransformationType.TRANSLATE] = translateTransformation;
transforms[TransformationType.ROTATE   ] = rotateTransformation;
transforms[TransformationType.ORBIT    ] = orbitTransformation;
transforms[TransformationType.TILT     ] = tiltTransformation;

export { transforms, TransformationType }; 
