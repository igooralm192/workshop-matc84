import * as THREE from 'three'

class Geometries{
    static addRect(scene, parent, x, y, w, h, myColor =  0x00ff00){
        let geometry = new THREE.PlaneGeometry(w, h);
        let material = new THREE.MeshBasicMaterial({color: myColor, side: THREE.DoubleSide});

        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = x;
        mesh.position.y = y;

        parent == null ? scene.add(mesh) : parent.attach(mesh);

        return mesh;
    }

    static addCircle(scene, parent, x, y, r, myColor =  0x00ff00){
        let geometry = new THREE.CircleGeometry(r, 30);
        let material = new THREE.MeshBasicMaterial({color: myColor, side: THREE.DoubleSide});

        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = x;
        mesh.position.y = y;

        parent == null ? scene.add(mesh) : parent.attach(mesh);

        return mesh;
    }

    static addElipse(scene, parent, x, y, xR, yR, myColor = 0x00ff00){
        let path = new THREE.Shape();
        path.absellipse(x, y, xR, yR, 0, Math.PI*2, false,0);
        let geometry = new THREE.ShapeBufferGeometry( path );
        let material = new THREE.MeshBasicMaterial( { color: myColor, side: THREE.DoubleSide} );
        let ellipse = new THREE.Mesh( geometry, material );
        parent == null ? scene.add(ellipse) : parent.attach(ellipse); 
        

        return ellipse;
    }
}

export default Geometries;