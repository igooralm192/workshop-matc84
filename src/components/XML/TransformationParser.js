import { transforms, TransformationType } from './ThreeTransformations'

let transformationObjects = {};

transformationObjects[TransformationType.TRANSLATE] = function(transformationData) {
	let t =  { 
			data: transformationData,
			proc: transforms[TransformationType.TRANSLATE],
			call: function(shape) { this.proc(shape, this.data.x, this.data.y ) }
	} 

	return t;
}

transformationObjects[TransformationType.ORBIT] = function(transformationData) {
	let t =  { 
			data: transformationData,
			proc: transforms[TransformationType.ORBIT],
			call: function(shape) { this.proc(shape, this.data.speed ) }
	} 

	return t;
}

transformationObjects[TransformationType.ROTATE] = function(transformationData) {
	let t =  { 
			data: transformationData,
			proc: transforms[TransformationType.ROTATE],
			call: function(shape) { this.proc(shape, this.data.speed ) }
	} 

	return t;
}

export default transformationObjects;
