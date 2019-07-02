import * as THREE from 'three';
import { Scene1 } from './scene1';





export class Camera1 extends Scene1 {

    protected cylinder2;
    public scene;
    protected cone;
    public controls: THREE.OrbitControls;
  modelScene: any;
  renderer: any;
  camera: any;

  public farClippingPane = 1100;
  public fieldOfView = 60;
  public nearClippingPane = 1;
  canvas: any;

/*   public render() {
    this.renderer.render(this.scene, this.camera);
} */
     constructor() {
        super();
    }


// -------------controls//////////////////////////////////////
        public addControls() {
          this.controls = new THREE.OrbitControls(this.camera);
          this.controls.rotateSpeed = 1.0;
          this.controls.zoomSpeed = 1.2;
          this.controls.addEventListener('change', this.render); }




// ========================================================================================================
// ------------------------------------------camera--------------------------------------------------------
// ========================================================================================================

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
    this.camera.position.x = 1;
    this.camera.position.y = 1;
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
