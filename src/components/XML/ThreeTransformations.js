import * as THREE from 'three'

const TransformationType = {
	TRANSLATE: "translate",
	ROTATE:    "rotate",
	ORBIT:     "orbit"
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
transforms[TransformationType.ROTATE   ] = rotateTransformation;
transforms[TransformationType.ORBIT    ] = orbitTransformation;

export { transforms, TransformationType }; 
