import * as THREE from 'three'
import ShapeFactory from './ShapeFactory'

const ShapeType = {
    RECT: 'rect',
    CIRCLE: 'circle',
    ELLIPSE: 'ellipse',
    TRIANGLE: 'triangle'
}

class GeometricShape{
    constructor(type, mesh, parent){
        this.type = type;
        this.mesh = mesh;
        this.parent = parent;
        this.children = new Array();
        this.transforms = new Array();
    }

    addChild(child){
        this.children.push(child);
        this.mesh.attach(child.mesh);
    }

    addTransformation(transformation){
        this.transforms.push(transformation);
    }

    update(){
        for(let i in this.transforms){
            this.transforms[i].call(this);
        }
        for(let i in this.children){
            this.children[i].update();
        }
    }
}

export { GeometricShape, ShapeType };
