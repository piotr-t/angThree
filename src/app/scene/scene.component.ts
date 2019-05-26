import { Gcody } from './../gcody.enum';
import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener, OnInit, OnChanges, Pipe, Injectable } from '@angular/core';
import * as THREE from 'three';
import './js/EnableThreeExamples';
import 'three/examples/js/controls/OrbitControls';
import 'three/examples/js/loaders/ColladaLoader';
import { Object3D, Box2, LineCurve } from 'three';
import { ScenService } from './../scen.service';
import { MoveCodeService } from '../move-code.service';
import { Cylinder1 } from '../cylinder1';



@Component({
    selector: 'app-scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.css']
})

@Injectable()
export class SceneComponent extends Cylinder1 implements AfterViewInit, OnInit, OnChanges {

    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private cameraTarget: THREE.Vector3;
    public scene: THREE.Scene;

    public fieldOfView = 60;
    public nearClippingPane = 1;
    public farClippingPane = 1100;
    public dana: any = true;
    public dana1: any;
    public controls: THREE.OrbitControls;
    contr = true;

    @ViewChild('canvas')
    private canvasRef: ElementRef;

    @Input() r: any;


    constructor(private dataService: ScenService,
                 public  moveCodeService:  MoveCodeService) {
            super();
            this.render = this.render.bind(this);
            this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
    }



     private get canvas(): HTMLCanvasElement {
        return  this.canvasRef.nativeElement;
    }

public l2;
public l4;
public l5;
    private createScene() {
        this.scene = new THREE.Scene();
        this.scene.add(new THREE.AxisHelper(200)); // linie pomocnicze długość 200px
        const loader = new THREE.ColladaLoader();
      const obj = 'assets/model/multimaterial.dae';
        const obj2 = 'assets/model/haas5.dae';
        const obj3 = 'assets/model/wiertło.dae';
        const obj4 = 'assets/model/wiertłodługie.dae';
        const obj5 = 'assets/model/DRUGI.dae';

      loader.load(obj, this.onModelLoadingCompleted);
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
        });

    }


// tslint:disable-next-line:member-ordering
public modelScene;
    private onModelLoadingCompleted(collada) {
        this.modelScene = collada.scene; // modelScene-uchwyt do obiektu collada
        this.modelScene.layers.set(0); // ustawiam warstwę dla obiektu
        this.scene.add(this.modelScene);
        this.modelScene.position.z = 85;
        this.modelScene.position.y = 5;
        this.modelScene.position.x = 7;
        this.render();
    }


// tslint:disable-next-line: member-ordering
  public a = false;
  // tslint:disable-next-line:member-ordering
  public b = false;
  // tslint:disable-next-line:member-ordering
  public c = 10;
  // tslint:disable-next-line:member-ordering
  public l1: any;
// tslint:disable-next-line: member-ordering
  public toggleSizeCanvas;

// ///////////////////////-------------obsługa przyciskw--------------------///////////////////////////////////
    public togRect(dana) {
        switch (dana) {
            case 1:
            this.modelScene.rotation.z += 100;
            this.render();
                break;
            case 2:
            this.modelScene.rotation.x += 100;
            this.render();
            break;
            case 3:
            this.modelScene.rotation.y += 100;
            this.render();
            break;
            case 4:
            this.modelScene.rotation.z -= 100;
            this.render();
            break;
            case 5:
            this.a = ! this.a;
            if (this.a === true) {
            this.l1 = setInterval(( () => {
            this.modelScene.rotation.z += .02;
            // tslint:disable-next-line:no-unused-expression
            this.render(); 1000; }) )  ; } else {
        clearInterval(this.l1);
        }
        break;
            case 6:
            // tslint:disable-next-line:no-unused-expression
            this.modelScene.position.z += .5;
            break;
            case 7:
            this.b = !this.b;
            if ( this.b === true) {
            this.cone.layers.set(1); } else { this.cone.layers.set(0); }
            break;
            case 8:
              this.c += .5;
            this.cylinder.position.set( 0, this.c, 0);
            break;
            case 9:
            this.c -= .5;
          this.cylinder.position.set( 0, this.c, 0);
          const pox = this.cylinder.position;
          break;
          case 14:
          this.toggleSizeCanvas = !this.toggleSizeCanvas;
          if (this.toggleSizeCanvas === true) {
            this.canvasRef.nativeElement.style.width = '50%';
            this.canvasRef.nativeElement.style.height = '50%';
          this.canvasRef.nativeElement.style.border = '2px solid black';
          this.render(); } else {
            this.canvas.style.height = '100%';
            this.canvas.style.width = '100%';
          this.canvas.style.border = '2px solid red';
          this.render();
          }

        break;
          case 11: // togle controls
          this.contr ? this.controls.dispose() : this.addControls();
          this.contr = !this.contr;
        break;
     }
    }
// -------------controls//////////////////////////////////////
  public addControls() {
    this.controls = new THREE.OrbitControls(this.camera);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
    this.controls.addEventListener('change', this.render); }

    //////////////////////////////// ---- lights -----------------------------////////////////////

    private createLight() {
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
// /////////////////--------------------------camera-------------------///////////////////////////////////
    private createCamera() {
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


    private getAspectRatio(): number {
        const height = this.canvas.clientHeight;
        if (height === 0) {
            return 0;
        }
        return this.canvas.clientWidth / this.canvas.clientHeight;
    }

    private startRendering() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setPixelRatio(devicePixelRatio); // !!!!
       this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight * 1.4);

        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;

        const component: SceneComponent = this;

        (function render() {
           requestAnimationFrame(render);
            component.render();
        }());
    }

    public render() {
        this.renderer.render(this.scene, this.camera);
    }

    /* EVENTS */

    public onMouseDown(event: MouseEvent) {
        console.log('onMouseDown');
       event.preventDefault();

        // Example of mesh selection/pick:
        // tslint:disable-next-line:prefer-const
        let raycaster = new THREE.Raycaster();
        // tslint:disable-next-line:prefer-const
        let mouse = new THREE.Vector2();
        mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, this.camera);

        // tslint:disable-next-line:prefer-const
        let obj: THREE.Object3D[] = [];
        this.findAllObjects(obj, this.scene);
        // tslint:disable-next-line:prefer-const
        let intersects = raycaster.intersectObjects(obj);
        console.log('Scene has ' + obj.length + ' objects');
        console.log(intersects.length + ' intersected objects found');
        intersects.forEach((i) => {
            console.log(i.object); // do what you want to do with object
        });

    }

    private findAllObjects(pred: THREE.Object3D[], parent: THREE.Object3D) {
        // NOTE: Better to keep separate array of selected objects
        if (parent.children.length > 0) {
            parent.children.forEach((i) => {
                pred.push(i);
                this.findAllObjects(pred, i);
            });
        }
    }

    @HostListener('window:resize', ['$event'])
    public onResize(event: Event) {
      // this.canvas.style.width = '100%';
    // this.canvas.style.height = '100%';
        console.log('onResize: ' + this.canvas.clientWidth + ', ' + this.canvas.clientHeight);

        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.render();
    }

   /*  @HostListener('document:keypress', ['$event'])
    public onKeyPress(event: KeyboardEvent) {
        console.log("onKeyPress: " + event.key);
    } */



    zmmm(dana) {
        console.log(dana);
        
        if (dana === 'x') {
            this.dataService.getJog().subscribe(dana1 => {this.dana1 = dana1;
                this.cone.position.x = dana1; });
         } else {
             if (dana === 'y') {
            this.dataService.getJog().subscribe(dana3 => {this.dana1 = dana3;
                this.cone.position.y = dana3; });
         } else { if (dana === 'z') {
            this.dataService.getJog().subscribe(dana4 => {this.dana1 = dana4;
                this.cone.position.z = dana4; });
         }}}}




    /* LIFECYCLE */
    ngAfterViewInit() {
        this.createScene();
        this.createLight();
        this.createCamera();
        this.startRendering();
        this.addControls();
        this.conee();
        this.nLine();
        this.cylinder1();
        // this.circle1 ();
        // this.mojaFigura();
    }

    ngOnInit(): void {
        this.canvas.style.height = '100%';
        this.canvas.style.width = '100%';
        this.canvas.style.border = '2px solid black';
        setInterval((() => {
            this.l2.rotation.z -= .07;
// tslint:disable-next-line: no-unused-expression

// tslint:disable-next-line: no-unused-expression
            this.render(); 100;
        }));

        this.dataService.getZML().subscribe(dana => {this.dana = dana;
            this.togRect(this.dana);
         } ); // obserwujemy getzml



         // zmiana kierunku narzedzia
         this.dataService.getDirectionPosition().subscribe(dana => {
            this.zmmm(dana);

         } );

        // jogComponent => sceneService => sceneComponent

            // this.moveCodeService.zmCode().subscribe(dana => {this.cylinder.position.set( dana, 10, 0); } );
            this.toggleSizeCanvas = false;
    }

    ngOnChanges() {}

}
