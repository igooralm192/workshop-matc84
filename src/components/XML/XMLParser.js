import validator from './SceneDescription'
let xmltojson = require('xml-js');

let ParseErrorType = {
	NO_ERROR: 0,
	XML_ILL_FORMED: 1,
	INVALID_FORMAT: 2
};

function parseXML(xmlString) { 
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

export { ParseErrorType, parseXML };
