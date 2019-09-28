import * as THREE from 'three'

const TransformationType = {
	TRANSLATE: 0,
	ROTATE:    1,
	ORBIT:     2
};

const translateTransformation = (shape, transformationData) => {
	shape.mesh.translateX(transformationData.x);
	shape.mesh.translateY(transformationData.y);
	shape.mesh.translateZ(transformationData.z);
}

const rotateTransformation = (shape, transformationData) => { shape.mesh.rotateOnAxis(new THREE.Vector3(0, 0, 1), transformationData.speed);
}

const orbitTransformation = (shape, transformationData) => {
}

let transforms = {};
transforms[TransformationType.TRANSLATE] = translateTransformation;

export default transforms; 
