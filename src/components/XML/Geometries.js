import * as THREE from 'three'

class Geometries{
    static addRect(scene, x, y, w, h, myColor =  0x00ff00){
        let geometry = new THREE.PlaneGeometry(w, h);
        let material = new THREE.MeshBasicMaterial({color: myColor, side: THREE.DoubleSide});

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.x = x;
        this.mesh.position.y = y;

        scene.add(this.mesh);

        return this.mesh;
    }

    static addCircle(scene, x, y, r, myColor =  0x00ff00){
        let geometry = new THREE.CircleGeometry(r, 30);
        let material = new THREE.MeshBasicMaterial({color: myColor, side: THREE.DoubleSide});

        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.x = x;
        this.mesh.position.y = y;

        scene.add(this.mesh);

        return this.mesh;
    }

    static addElipse(scene, x, y, xR, yR, myColor = 0x00ff00){
        let path = new THREE.Shape();
        path.absellipse(x, y, xR, yR, 0, Math.PI*2, false,0);
        let geometry = new THREE.ShapeBufferGeometry( path );
        let material = new THREE.MeshBasicMaterial( { color: myColor, side: THREE.DoubleSide} );
        let ellipse = new THREE.Mesh( geometry, material );
        scene.add(ellipse);

        return ellipse;
    }
}

export default Geometries;