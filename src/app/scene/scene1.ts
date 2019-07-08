import * as THREE from 'three';
import './js/EnableThreeExamples';
import { Init } from './init';

// extends classes:
// Init=>Scene1=>Camera1

export class Scene1 extends Init {
    public l2;
    public l4;
    public l5;

    scene: any;
    modelScene: any;
    camera: any;
    renderer: any;
    public render() {
        this.renderer.render(this.scene, this.camera);
    }


    public onModelLoadingCompleted(collada) {
        this.modelScene = collada.scene; // modelScene-uchwyt do obiektu collada
        this.modelScene.layers.set(0); // ustawiam warstwę dla obiektu
        this.scene.add(this.modelScene);
        this.modelScene.position.z = 85;
        this.modelScene.position.y = 5;
        this.modelScene.position.x = 7;
        this.render();
    }

        public createScene() {
            this.scene = new THREE.Scene();
            this.scene.add(new THREE.AxisHelper(100)); // linie pomocnicze długość 200px
            const loader = new THREE.ColladaLoader();
            this.scene.position.x = -100;
            this.scene.position.z = -50;
            this.scene.position.y = -50;
          const obj = 'assets/model/multimaterial.dae';
            const obj2 = 'assets/model/haas5.dae';
            const obj3 = 'assets/model/wiertło.dae';
            const obj4 = 'assets/model/wiertłodługie.dae';
            const obj5 = 'assets/model/DRUGI.dae';
        /*  loader.load(obj, this.onModelLoadingCompleted);
            loader.load(obj2, this.onModelLoadingCompleted);
    // tslint:disable-next-line: no-unused-expressio
             loader.load(obj3, (collada) => {
                this.l2 = collada.scene;
                this.scene.add(this.l2);
                this.l2.rotation.x = 1.6;
                this.l2.color = 'red';
                this.render();
            });
            loader.load(obj4, (collada) => {
                this.l4 = collada.scene;
                this.scene.add(this.l4);
                this.l4.position.x = 1.6;
                // this.l2.color = 'red';
                this.render();
            });
            loader.load(obj5, (collada) => {
                this.l5 = collada.scene;
                this.scene.add(this.l5);
                this.l5.position.x = 20;
                // this.l2.color = 'red';
                this.render();
            }); */

        }
}
