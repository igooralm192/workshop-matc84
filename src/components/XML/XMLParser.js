import validator from './SceneDescription'
import { transforms, TransformationType } from './ThreeTransformations'

let xmltojson = require('xml-js');

let xmlparser = {};

let ParseErrorType = {
	NO_ERROR: 0,
	XML_ILL_FORMED: 1,
	INVALID_FORMAT: 2,
	MISSING_ROOT_ELEMENT: 3
};

let sceneElements = [
	"rect", 
	"circle",
	"ellipse",
	"triangle",
	"background"
];

xmlparser.parseXML = (xmlString) => { 
	let json;
	try {
		json = xmltojson.xml2json(xmlString, {compact: true, spaces: 4 });
	} catch(e) {
		return { 
			errorType: ParseErrorType.XML_ILL_FORMED, 
			data: e.message 
		};
	}
	
	const validationStatus = window.xsdvalidator.validateXML(
		{ xml: xmlString, schema: validator }
	);
	
	if(validationStatus.errors != null) {
		return { 
			errorType: ParseErrorType.INVALID_FORMAT, 
			data: validationStatus.errors	
		};
	}

	
	const obj = {
		errorType: ParseErrorType.NO_ERROR,
		data: JSON.parse(json)
	};
	
	if(!obj.data.hasOwnProperty('data')) {
		return {
			errorType: ParseErrorType.MISSING_ROOT_ELEMENT,
			data: "Missing root element."
		};
	}

	return obj;
}

xmlparser.getSceneElementAttributes = (sceneElement) => {
	return sceneElement._attributes; 
}

xmlparser.getSceneElements = (dataRoot) => {
	let shapes = [];
	
	for(let sceneElement of sceneElements) {
		if(dataRoot.hasOwnProperty(sceneElement)) 
		{
			let shapeDescription = dataRoot[sceneElement];
			if(Array.isArray(shapeDescription)) {
				shapeDescription.forEach((shape, index) => {
					shape.type = sceneElement;
					shapes.push(shape);
				})
			}
			else { 
				shapeDescription.type = sceneElement;
				shapes.push(shapeDescription);
			}
		}
	}

	return shapes;
}

xmlparser.getSceneElementChildren = (sceneElement) => {

	if(sceneElement.hasOwnProperty('children'))	
	{
		return xmlparser.getSceneElements(sceneElement.children);
	}
	
	return [];
}

xmlparser.getTransformations = (sceneElement) => {
	let transformations = [];
	if(sceneElement.hasOwnProperty('transformations')) {
		let transformationsRoot = sceneElement.transformations;

		for(let ttype in TransformationType) {
			if(transformationsRoot.hasOwnProperty(TransformationType[ttype]))
			{ 
				let tobject = transformationsRoot[TransformationType[ttype]];
			
				let transformation = {
					data: tobject._attributes, 
					proc: transforms[TransformationType[ttype]],
					call: function(shape) { this.proc(shape, this.data) }
				};
				transformations.push(transformation);
			}
		}
	}

	return transformations;
}

export { xmlparser, ParseErrorType };
