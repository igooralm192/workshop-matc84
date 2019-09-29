import { transforms, TransformationType } from './ThreeTransformations'

let transformationObjects = {};

transformationObjects[TransformationType.TRANSLATE] = function(transformationData) {
	let t =  { 
			data: transformationData,
			proc: transforms[TransformationType.TRANSLATE],
			call: function(shape) { this.proc(shape, this.data) }
	} 

	return t;
}

transformationObjects[TransformationType.ORBIT] = function(transformationData) {
	let t =  { 
			data: transformationData,
			proc: transforms[TransformationType.ORBIT],
			call: function(shape) { this.proc(shape, this.data) }
	} 

	return t;
}

transformationObjects[TransformationType.ROTATE] = function(transformationData) {
	let t =  { 
			data: transformationData,
			proc: transforms[TransformationType.ROTATE],
			call: function(shape) { this.proc(shape, this.data) }
	} 

	return t;
}

export default transformationObjects;
