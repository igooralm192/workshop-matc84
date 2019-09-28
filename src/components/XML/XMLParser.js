import validator from './SceneDescription'
import transformationObjects from './TransformationParser'

let xmltojson = require('xml-js');

let xmlparser = {};

let ParseErrorType = {
	NO_ERROR: 0,
	XML_ILL_FORMED: 1,
	INVALID_FORMAT: 2
};

let availableShapes = [
	"rect", 
	"circle",
	"ellipse"
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

	return obj;
}

xmlparser.getSceneElementAttributes = (shapeObject) => {
	return shapeObject._attributes; 
}

xmlparser.getSceneElements = (dataRoot) => {
	let shapes = [];

	for(let availableShape of availableShapes) {
		if(dataRoot.hasOwnProperty(availableShape)) 
		{
			let shapeDescription = dataRoot[availableShape];
			if(Array.isArray(shapeDescription)) {
				shapeDescription.forEach((shape, index) => {
					shape.type = availableShape;
					shapes.push(shape);
				})
			}
			else { 
				shapeDescription.type = availableShape;
				shapes.push(shapeDescription);
			}
		}
	}

	return shapes;
}

xmlparser.getChildren = (shapeObject) => {

	if(shapeObject.hasOwnProperty('children'))	
	{
		return xmlparser.getSceneElements(shapeObject.children);
	}
	
	return [];
}

export { xmlparser, ParseErrorType };
