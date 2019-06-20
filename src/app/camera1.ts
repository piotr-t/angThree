import * as THREE from 'three';
import { Scene1 } from './scene1';





export class Camera1 extends Scene1 {
    protected cylinder;
    protected cylinder2;
    public scene;
    protected cone;
    public controls: THREE.OrbitControls;
  modelScene: any;
  renderer: any;
  camera: any;



  farClippingPane: number;
  nearClippingPane: number;
  fieldOfView: number;
  canvas: any;

/*   public render() {
    this.renderer.render(this.scene, this.camera);
} */
     constructor() {
        super();
    }
    public cylinder1 = () => {
        const geometry5 = new THREE.CylinderGeometry( 5, 5, 20, 120, 80, false);
        const material = new THREE.MeshBasicMaterial( {color: 0xfaaf55} );
        this.cylinder = new THREE.Mesh( geometry5, material );
        this.scene.add( this.cylinder );
        this.cylinder.position.set( 0, 50, 0);

        const geometry8 = new THREE.CylinderGeometry( 2, 2, 10, 120, 80, false);
        const material1 = new THREE.MeshBasicMaterial( {color: 'blue'} );
        this.cylinder2 = new THREE.Mesh( geometry8, material1 );
        this.scene.add( this.cylinder2 );
        this.cylinder2.position.set( 0, -15, 0);
        this.cylinder.add(this.cylinder2); // add to object
      }
          //////////////////////////////////////////// ----------shapes------------///////////////////////////////////

    public conee() {
    const geometry = new THREE.ConeGeometry( 5, 20, 32 );
    const material = new THREE.MeshBasicMaterial( {color: 'red'} );
    this.cone = new THREE.Mesh( geometry, material );

    this.cone.position.z = 85; // pozycjonowanie elementu
    this.cone.position.x = 8;
    this.cone.layers.set(0);
    this.scene.add( this.cone );
        }
// -------------controls//////////////////////////////////////
        public addControls() {
          this.controls = new THREE.OrbitControls(this.camera);
          this.controls.rotateSpeed = 1.0;
          this.controls.zoomSpeed = 1.2;
          this.controls.addEventListener('change', this.render); }



            ////////////////////////// ----------------lines----------------------------///////////////////////////////
    public nLine= ()  => {
        const material1 = new THREE.LineBasicMaterial({
          color: 0xfff111,
          linewidth: 6});
        // tslint:disable-next-line:prefer-const
        let geometry1 = new THREE.Geometry();
        geometry1.vertices.push(
          new THREE.Vector3( 0, 0, 100 ),
          new THREE.Vector3( 50, 50, 100 ),
          new THREE.Vector3( 510, 110, 500 ),
          new THREE.Vector3( 50, 0, 100 ),
          new THREE.Vector3( 0, 50, 100 ),
          new THREE.Vector3( 50, 50, 0 )
        );
        const line1 = new THREE.Line( geometry1, material1 );
        this.scene.add( line1 );
      }

      mojaFigura = () => {
        const geometry9 = new THREE.ParametricGeometry( (u: number, v: number) => {

            u = u * Math.PI;
            v = v * Math.PI;

            const x = Math.cos(u * 20) + 5;
            const y =  20 * u ;
            const z =  20 * u;
            if (x ) {
                 return  new THREE.Vector3( x, z, y ); } }, 100, 20 );
        const material9 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const klein = new THREE.Mesh( geometry9, material9 );
        klein.position.set( 0, 0, 0);
        this.scene.add( klein );
      }

      public circle1 = () => {
    const geometry8 = new THREE.CircleGeometry( 1, 32 );
    const material8 = new THREE.MeshBasicMaterial( { color: 'gray' } );
    const circle1 = new THREE.Mesh( geometry8, material8 );
    this.scene.add( circle1 );
// tslint:disable-next-line: comment-format
    circle1.position.set( -30, 5, 50);
  }

// /////////////////--------------------------camera-------------------///////////////////////////////////
  public createCamera() {
    const aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
       this.fieldOfView,
        aspectRatio,
        this.nearClippingPane,
         this.farClippingPane
    );

    // add layers to camera
    this.camera.layers.enable( 0 ); // enabled by default

    // Set position and look at
    this.camera.position.x = 10;
    this.camera.position.y = 10;
    this.camera.position.z = 100;

}
public getAspectRatio(): number {
  const height = this.canvas.clientHeight;
  if (height === 0) {
      return 0;
  }
  return this.canvas.clientWidth / this.canvas.clientHeight;
}


    //////////////////////////////// ---- lights -----------------------------////////////////////

    public createLight() {
      // tslint:disable-next-line:prefer-const
      let light = new THREE.PointLight(0xffffff, 1, 1000);
      light.position.set(0, 0, 100);
      this.scene.add(light);

      // tslint:disable-next-line:prefer-const
    light = new THREE.PointLight(0xffffff, 1, 1000);
      light.position.set(0, 0, -100);

      // add layers to light
      light.layers.enable( 0 ); // moje
      light.layers.enable( 1 ); // moje
      light.layers.enable( 2 ); // moje
      this.scene.add(light);
  }


}
