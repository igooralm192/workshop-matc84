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

        return mesh;
    }

    static addCircle(attributes){
		let materialColor = this.getColorAttribute(attributes);

        let geometry = new THREE.CircleGeometry(attributes.r, 30);
        let material = new THREE.MeshBasicMaterial({color: materialColor, side: THREE.DoubleSide});

        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = attributes.x;
        mesh.position.y = attributes.y;
        return mesh;
    }

    static addEllipse(attributes){
		let materialColor = this.getColorAttribute(attributes);
        let path = new THREE.Shape();
        path.absellipse(
			attributes.x, 
			attributes.y, 
			attributes.w, 
			attributes.h, 0, Math.PI*2, false,0);

        let geometry = new THREE.ShapeBufferGeometry( path );
        let material = new THREE.MeshBasicMaterial( { color: materialColor, side: THREE.DoubleSide} );
        let ellipse = new THREE.Mesh( geometry, material );

        return ellipse;
    }

	static getColorAttribute(attributes) {
		return attributes.hasOwnProperty('color') ? attributes.color : 'white';
	}
}

export default ShapeFactory;
