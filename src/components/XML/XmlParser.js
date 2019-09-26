var xmltojson = require('xml-js');

class ParseError {
	constructor(errorMessage) {
		this.errorMessage = errorMessage; 
	}

	ErrorMessage() {
 		return "[Error] " + this.errorMessage;
	}
};

function parse(xml) { 
	let json;
	try {
		json = xmltojson.xml2json(xml, {compact: true, spaces: 4 });
	} catch(e) {
		return new ParseError(e.message);
	}
	
	const obj  = JSON.parse(json);
	return obj;
}

export default parse;
