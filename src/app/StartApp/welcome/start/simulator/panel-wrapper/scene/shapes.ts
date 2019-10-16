import { EventsButtons } from './events-buttons';
import * as THREE from 'three';
import { Output, EventEmitter } from '@angular/core';
import { ScenService } from './../../../../../../scen.service';
import { MoveCodeService } from '../../../../../../move-code.service';

export class Shapes extends EventsButtons {

    constructor(public shapesScenService: ScenService,
                 public  moveCodeService:  MoveCodeService) {
                super(shapesScenService, moveCodeService);


    }

    public one;
// public setShapesDrillPosition;
public two;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////// ----------shapes------------/////////////////////////////////////////////////////////

// ------------------------------- cone ------------------------------------------------------------------
          public conee() {
            const geometry = new THREE.ConeGeometry( 5, 20, 32 );
            const material = new THREE.MeshBasicMaterial( {color: 'red'} );
            this.cone = new THREE.Mesh( geometry, material );
            this.cone.position.z = 85; // pozycjonowanie elementu
            this.cone.position.x = 8;
            this.cone.layers.set(0);
            this.scene.add( this.cone ); }

// ----------------------------- board --------------------------------------------------------------------
        public board() {

            const {W, L, H} = this.boardMesure;
            const geometry10 = new THREE . BoxBufferGeometry (W, L, H  ); // lenght,height,width
            const material10 = new THREE.MeshBasicMaterial( {color: 'green'} );
            this.boardElement = new THREE.Mesh( geometry10, material10 );
            this.boardElement.position.z = 25;
            this.boardElement.position.y = 2.5;
            this.boardElement.position.x = 50;


            this.scene.add( this.boardElement );
        }

// ---------------------------- lines ------------------------------------------------------------------------

public nLine = ()  => {
    const material1 = new THREE.LineBasicMaterial({
      color: 'red',
      linewidth: 6});
    const geometry1 = new THREE.Geometry();
    geometry1.vertices.push(
      new THREE.Vector3( 10, 0, 10 ), // X,Z,Y
      new THREE.Vector3( 10, 0, 50 ),
      new THREE.Vector3( 100, 0, 50 ),
      new THREE.Vector3( 100, 0, 10 ),
      new THREE.Vector3( 10, 0, 10 ),
      new THREE.Vector3( 10, 30, 10 ),
      new THREE.Vector3( 10, 30, 50 ),
      new THREE.Vector3( 100, 30, 50 ),
      new THREE.Vector3( 100, 30, 10 ),
      new THREE.Vector3( 10, 30, 10 ),
      new THREE.Vector3( 100, 0, 10 ),
      new THREE.Vector3( 100, 30, 10 ),
      new THREE.Vector3( 100, 0, 50 ),
      new THREE.Vector3( 100, 30, 50 ),
      new THREE.Vector3( 10, 0, 50 ),
      new THREE.Vector3( 10, 30, 50 ),
      new THREE.Vector3( 10, 0, 10 ),
      );

      geometry1.computeBoundingBox();
     // geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
    const line1 = new THREE.Line( geometry1, material1 );
    this.scene.add( line1 );


    geometry1.colorsNeedUpdate = true;

    geometry1.elementsNeedUpdate = true;
    const color = new THREE.Color( 'red' );
    const face = new THREE.Face3( 2, 3, 4, new THREE.Vector3( 0, 1, 0 ), color, 0 );
    geometry1.faces.push( face );
    geometry1.faces.push( new THREE.Face3( 0, 1, 2 ) );
  }

  // ------------------------ plane ---------------------------------------------------------

public newPlane() {

// -----------------------------ścianka tylna
    const geometry8 = new THREE.PlaneGeometry( 500, 250, 32 );
    const material8 = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    const plane8 = new THREE.Mesh( geometry8, material8 );
    plane8.position.set( 200, 100, -50);
    this.scene.add( plane8 );

// ---------------------------ścianka boczna
    const m8 = new THREE.MeshBasicMaterial( {color: '#465956', side: THREE.DoubleSide} );
    const g12 =  new THREE.PlaneGeometry( 100, 100 );
    const p8 =  new THREE.Mesh( g12, m8 );
    p8.rotation.y = 1.570796326795; // 90st
    g12.vertices[0].x = 0;
    p8.position.set(100, 50, 10);
    this.scene.add( p8 );

// -------------------------clone ścianka boczna
    const p9 = p8.clone();
    p9.position.set(-20, 50, 10); // xyz
    this.scene.add( p9 );
   }

// ---------------------------- drill -------------------------------------------------------
public drill = () => {
    const geometry5 = new THREE.CylinderGeometry( 5, 5, 20, 120, 80, false);
    const material = new THREE.MeshBasicMaterial( {color: 0xfaaf55} );
    this.drillElement = new THREE.Mesh( geometry5, material );
    this.scene.add( this.drillElement );
    this.drillElement.position.set( 0, 0, 0);

    const geometry8 = new THREE.CylinderGeometry( 2, 2, 10, 120, 80, false);
    const material1 = new THREE.MeshBasicMaterial( {color: 'blue'} );
    this.cylinder2 = new THREE.Mesh( geometry8, material1 );
    this.scene.add( this.cylinder2 );
    this.cylinder2.position.set( 0, -15, 0);
    this.drillElement.add(this.cylinder2); // add to object

      }




// ----------------- tool Store (magazynek narzędziowy) ----------------------------------------------------------------
public toolStore() {
  const material13 = new THREE.MeshPhongMaterial( { color: '#424f46', shininess: 150 } );
  // const material13 = new THREE.MeshBasicMaterial( {color: '#424f46'} );
   const geometry13 = new THREE.CylinderBufferGeometry(20, 20, 20, 20);
   this.toolStoreElement = new THREE.Mesh( geometry13, material13 );
   this.toolStoreElement.position.set( this.shiftToolsPosition.x, this.shiftToolsPosition.y, this.shiftToolsPosition.z);
   this.scene.add( this.toolStoreElement );

   const g13 = new THREE.CylinderBufferGeometry(10, 10, 10, 20);
   const t13 = new THREE.Mesh( g13, material13 );
   t13.position.set( 0, 10, 0);
   this.toolStoreElement.add( t13 );


   // --------------tools------------------
   const geometry20 = new THREE.CylinderGeometry( 3, 3, 25, 120, 80, false);
   // const material20 = new THREE.MeshBasicMaterial( {color: 'red'} );
   const material20 = new THREE.MeshPhongMaterial( { color: 'red', shininess: 150 } );

   const cylinder20 = new THREE.Mesh( geometry20, material20 );
   const cylinder21 = cylinder20.clone();
   const cylinder22 = cylinder20.clone();
   const cylinder23 = cylinder20.clone();
   const cylinder24 = cylinder20.clone();
   const cylinder25 = cylinder20.clone();

   cylinder20.position.set( 15, 0, 0);
   cylinder21.position.set( 15, 0, 0);
   cylinder22.position.set( 15, 0, 0);
   cylinder23.position.set( 15, 0, 0);
   cylinder24.position.set( 15, 0, 0);
   cylinder25.position.set( 15, 0, 0);

// use pivot to rotation, priot - punkt do którego przypisana jest grupa
   const  pivot = new THREE.Group();
   const  pivot1 = new THREE.Group();
   const  pivot2 = new THREE.Group();
   const  pivot3 = new THREE.Group();
   const  pivot4 = new THREE.Group();
   const  pivot5 = new THREE.Group();

   pivot.position.set( 0.0, 0.0, 0 );
   pivot1.position.set( 0.0, 0.0, 0 );
   pivot2.position.set( 0.0, 0.0, 0 );
   pivot3.position.set( 0.0, 0.0, 0 );
   pivot4.position.set( 0.0, 0.0, 0 );
   pivot5.position.set( 0.0, 0.0, 0 );

   pivot.add(cylinder20);
   pivot1.add(cylinder21);
   pivot2.add(cylinder22);
   pivot3.add(cylinder23);
   pivot4.add(cylinder24);
   pivot5.add(cylinder25);

   this.toolStoreElement.add(pivot, pivot1, pivot2, pivot3, pivot4, pivot5, );

   const obwodNaSzesc = (2 * Math.PI) / 6;

   pivot1.rotation.y = obwodNaSzesc;
   pivot2.rotation.y = 2 * obwodNaSzesc;
   pivot3.rotation.y = 3 * obwodNaSzesc;
   pivot4.rotation.y = 4 * obwodNaSzesc;
   pivot5.rotation.y = 5 * obwodNaSzesc;

/*     setInterval(() => {
    this.toolStoreElement.rotation.y += .1;
   }, 50); */

const obj = 'assets/model/one.dae';
   const loader = new THREE.ColladaLoader();
   loader.load(obj, (collada) => {
    this.one = collada.scene;
this.one.children[2].visible = false; // set light dae visibiulity
this.one.children[0].material.color.setHex( 0x05D131 ); // set dae color

this.one.updateMatrix();
this.one.position.set(4, 0, 0);
// cylinder20.add(this.scene);
cylinder20.add(this.one);
// this.render();
});


const obj1 = 'assets/model/two.dae';
   const loader2 = new THREE.ColladaLoader();
   loader2.load(obj1, (collada) => {
    this.two = collada.scene;
this.two.children[2].visible = false; // set light dae visibiulity
this.two.children[0].material.color.setHex( 0x05D131 ); // set dae color

this.two.updateMatrix();
this.two.position.set(4, 0, 0);
// cylinder20.add(this.scene);
cylinder21.add(this.two);
// this.render();
});



}

public addText() {

}


}
