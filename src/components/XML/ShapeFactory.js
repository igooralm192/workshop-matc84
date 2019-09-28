import * as THREE from 'three'

class ShapeFactory{
    static addRect(x, y, w, h, myColor =  0x00ff00){
        let geometry = new THREE.PlaneGeometry(w, h);
        let material = new THREE.MeshBasicMaterial({color: myColor, side: THREE.DoubleSide});

        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = x;
        mesh.position.y = y;

        return mesh;
    }

    static addCircle( x, y, r, myColor =  0x00ff00){
        let geometry = new THREE.CircleGeometry(r, 30);
        let material = new THREE.MeshBasicMaterial({color: myColor, side: THREE.DoubleSide});

        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = x;
        mesh.position.y = y;


        return mesh;
    }

    static addElipse(x, y, w, h, myColor = 0x00ff00){
        let path = new THREE.Shape();
        path.absellipse(x, y, w, h, 0, Math.PI*2, false,0);
        let geometry = new THREE.ShapeBufferGeometry( path );
        let material = new THREE.MeshBasicMaterial( { color: myColor, side: THREE.DoubleSide} );
        let ellipse = new THREE.Mesh( geometry, material );

        return ellipse;
    }
}

export default ShapeFactory;