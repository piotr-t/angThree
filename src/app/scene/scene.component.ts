import { Gcody } from './../gcody.enum';
import { AfterViewInit, Component, ElementRef, Input, ViewChild, HostListener, OnInit, OnChanges, Pipe, Injectable } from '@angular/core';
import * as THREE from 'three';
import './js/EnableThreeExamples';
import 'three/examples/js/controls/OrbitControls';
import 'three/examples/js/loaders/ColladaLoader';
import { Object3D, Box2, LineCurve } from 'three';
import { ScenService } from './../scen.service';
import { MoveCodeService } from '../move-code.service';
import {backwardForward} from './../forward-backward';
import { Shapes } from './shapes';



@Component({
    selector: 'app-scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.css']
})

@Injectable()
export class SceneComponent extends Shapes implements AfterViewInit, OnInit, OnChanges {

    public renderer: THREE.WebGLRenderer;
    public camera: THREE.PerspectiveCamera;
    private cameraTarget: THREE.Vector3;
    public scene: THREE.Scene;
    public dana: any = true;


    @ViewChild('canvas')
    public canvasRef: ElementRef;

    // getter canvas
    public get canvas(): HTMLCanvasElement {
        return  this.canvasRef.nativeElement;
    }

    @Input() r: any;


    constructor(public dataService: ScenService,
                 public  moveCodeService:  MoveCodeService,
                // public forwardBackward: ForwardBackward
                 ) {
            super(dataService, moveCodeService);
            this.render = this.render.bind(this);
            this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
            // const cc =  backwardForward ({a: false, b: false, c: true, d: false, e: false});
    }

// ======================= rendering ===================================================================
// =====================================================================================================

    public startRendering() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
       this.renderer.setPixelRatio(devicePixelRatio); // !!!!
       this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight );

       // this.renderer.shadowMap.enabled = true;
       // this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setClearColor(0xffffff, 1);
        // this.renderer.autoClear = true;

        const component: SceneComponent = this;

        (function render() {
           requestAnimationFrame(render);
            component.render();
        }());
    }

    // ========================================= window events =========================================
    // =================================================================================================
@HostListener('window:keydown', ['$event']) // event klawiatura
 public cos (event) {console.log(event.key); }

    public onMouseDown(event: MouseEvent) {
        // console.log('onMouseDown);
        // console.log(event);
       // event.preventDefault();
       // let raycaster = new THREE.Raycaster();
        // let mouse = new THREE.Vector2();
        // mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
        // mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
        // raycaster.setFromCamera(mouse, this.camera);
        /// let obj: THREE.Object3D[] = [];
        // this.findAllObjects(obj, this.scene);
       /// let intersects = raycaster.intersectObjects(obj);
        // console.log('Scene has ' + obj.length + ' objects');
       // console.log(intersects.length + ' intersected objects found');
       // intersects.forEach((i) => {
            // console.log(i.object); // do what you want to do with object
       // });

    }

/*     private findAllObjects(pred: THREE.Object3D[], parent: THREE.Object3D) {
        // NOTE: Better to keep separate array of selected objects
        if (parent.children.length > 0) {
            parent.children.forEach((i) => {
                pred.push(i);
                this.findAllObjects(pred, i);
            });
        }
    } */

    @HostListener('window:resize', ['$event'])
    public onResize(event: Event) {
      // this.canvas.style.width = '100%';
    // this.canvas.style.height = '100%';
        // console.log('onResize: ' + this.canvas.clientWidth + ', ' + this.canvas.clientHeight);

        // this.camera.aspect = this.getAspectRatio.call(this);
        // this.camera.updateProjectionMatrix();
       // this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
       // this.render();
    }


    // ======================== LIFECYCLE ======================================================
    // =========================================================================================
    ngAfterViewInit() {
        this.createScene();
        this.createLight();
        this.createCamera.call(this);
        this.startRendering();
        this.addControls();
        // this.conee();
        // this.nLine();
        this.drill();
        this.newPlane();
        this.board();
        this.toolStore();
        // this.mojaFigura();
      /*   this.drillElement.position.x = this.pozX;
        this.drillElement.position.y = this.pozY;
        this.boardElement.position.z = this.pozZ; */
    }

    ngOnInit(): void {
        this.canvas.style.height = '100%';
        this.canvas.style.width = '100%';
        this.canvas.style.border = '2px solid black';
        // setInterval((() => {
           // this.l2.rotation.z -= .07;
// tslint:d/isable-next-line: no-unused-expression
          //  this.render(); 100;
      //  }));
        this.dataService.getZML().subscribe(dana => {this.dana = dana;
            this.togRect(this.dana);
         } ); // obserwujemy getzml

         // zmiana kierunku narzedzia
         this.dataService.getDirectionPosition().subscribe(dana => { // dana: x , y , z
            this.drillPosition(dana);
         } );

        // jogComponent => sceneService => sceneComponent

            // this.moveCodeService.zmCode().subscribe(dana => {this.cylinder.position.set( dana, 10, 0); } );
            this.toggleSizeCanvas = false;
    }

    ngOnChanges() {}

}
