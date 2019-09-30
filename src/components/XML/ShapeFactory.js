import * as THREE from 'three'

const defaultForegroundColor = "black";

class ShapeFactory{
    static addRect(attributes){
		let materialColor = this.getOptionalAttribute(attributes, 'color', defaultForegroundColor);
        let geometry = new THREE.PlaneGeometry(attributes.w, attributes.h);
        let material = new THREE.MeshBasicMaterial(
			{color: materialColor, side: THREE.DoubleSide});

        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = this.getOptionalAttribute(attributes, 'x', 0);
        mesh.position.y = this.getOptionalAttribute(attributes, 'y', 0);
		mesh.position.z = this.getOptionalAttribute(attributes, 'z', 0);

        return mesh;
    }

    static addCircle(attributes){
		let materialColor = this.getOptionalAttribute(attributes, 'color', defaultForegroundColor);

        let geometry = new THREE.CircleGeometry(attributes.r, 50);
        let material = new THREE.MeshBasicMaterial({color: materialColor, side: THREE.DoubleSide});

        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = this.getOptionalAttribute(attributes, 'x', 0);
        mesh.position.y = this.getOptionalAttribute(attributes, 'y', 0);
		mesh.position.z = this.getOptionalAttribute(attributes, 'z', 0);
        return mesh;
    }

    static addEllipse(attributes){
		let materialColor = this.getOptionalAttribute(attributes, 'color', defaultForegroundColor);
        let path = new THREE.Shape();

        path.absellipse(
			0,
			0,
			attributes.w, 
			attributes.h, 
			0, Math.PI * 2, false,0);

        let geometry = new THREE.ShapeBufferGeometry( path );

        let material = new THREE.MeshBasicMaterial( { color: materialColor, side: THREE.DoubleSide} );
        let ellipse = new THREE.Mesh( geometry, material );

        ellipse.position.x = this.getOptionalAttribute(attributes, 'x', 0);
        ellipse.position.y = this.getOptionalAttribute(attributes, 'y', 0);
		ellipse.position.z = this.getOptionalAttribute(attributes, 'z', 0);

        return ellipse;
    }

	static getOptionalAttribute(attributes, attributeName, defaultValue) {
		return attributes.hasOwnProperty(attributeName) ? attributes[attributeName] : defaultValue;
	}
}

export default ShapeFactory;
