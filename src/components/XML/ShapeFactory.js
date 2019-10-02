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

    static addTriangle(attributes){
        let xPoint = this.getOptionalAttribute(attributes, 'x', 0);
        let yPoint = this.getOptionalAttribute(attributes, 'y', 0);
        let zPoint = this.getOptionalAttribute(attributes, 'z', 0);
        let materialColor = this.getOptionalAttribute(attributes, 'color', defaultForegroundColor);

        let vertA = new THREE.Vector3(xPoint - (attributes.w/2), yPoint - (attributes.h/2), zPoint);
        let vertB = new THREE.Vector3(xPoint + (attributes.w/2), yPoint - (attributes.h/2), zPoint);
        let vertC = new THREE.Vector3(xPoint, yPoint + (attributes.h/2), zPoint);

        let geometry = new THREE.Geometry();
        geometry.vertices.push(vertA);
        geometry.vertices.push(vertB);
        geometry.vertices.push(vertC);

        geometry.faces.push(new THREE.Face3(0, 1, 2));
        let material = new THREE.MeshBasicMaterial( { color: materialColor, side: THREE.DoubleSide} );

        let mesh = new THREE.Mesh(geometry, material);

        return mesh;
    }

	static getOptionalAttribute(attributes, attributeName, defaultValue) {
		return attributes.hasOwnProperty(attributeName) ? attributes[attributeName] : defaultValue;
	}
}

export default ShapeFactory;
