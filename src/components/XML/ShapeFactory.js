import * as THREE from 'three'

class ShapeFactory{
    static addRect(attributes){
		let materialColor = this.getColorAttribute(attributes);
        let geometry = new THREE.PlaneGeometry(attributes.w, attributes.h);
        let material = new THREE.MeshBasicMaterial(
			{color: materialColor, side: THREE.DoubleSide});

        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = attributes.x;
        mesh.position.y = attributes.y;
		mesh.position.z = this.getZCoordinateAttribute(attributes);

        return mesh;
    }

    static addCircle(attributes){
		let materialColor = this.getColorAttribute(attributes);

        let geometry = new THREE.CircleGeometry(attributes.r, 50);
        let material = new THREE.MeshBasicMaterial({color: materialColor, side: THREE.DoubleSide});

        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = attributes.x;
        mesh.position.y = attributes.y;
		mesh.position.z = this.getZCoordinateAttribute(attributes);
        return mesh;
    }

    static addEllipse(attributes){
		let materialColor = this.getColorAttribute(attributes);
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

		ellipse.position.x = attributes.x;
		ellipse.position.y = attributes.y;
		ellipse.position.z = this.getZCoordinateAttribute(attributes);

        return ellipse;
    }

	static getColorAttribute(attributes) {
		return attributes.hasOwnProperty('color') ? attributes.color : 'black';
	}
	
	static getZCoordinateAttribute(attributes) {
		return attributes.hasOwnProperty('z')  ? attributes.z : 0;
	}
}

export default ShapeFactory;
