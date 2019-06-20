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
import { EventsButtons } from './events-buttons';



@Component({
    selector: 'app-scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.css']
})

@Injectable()
export class SceneComponent extends EventsButtons implements AfterViewInit, OnInit, OnChanges {

    public renderer: THREE.WebGLRenderer;
    public camera: THREE.PerspectiveCamera;
    private cameraTarget: THREE.Vector3;
    public scene: THREE.Scene;

    public fieldOfView = 60;
    public nearClippingPane = 1;
    public farClippingPane = 1100;
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
            super(dataService,moveCodeService);
            this.render = this.render.bind(this);
            this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
            //const cc =  backwardForward ({a: false, b: false, c: true, d: false, e: false});
    }







    public startRendering() {
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



    //========================================= window events =========================================
    //=================================================================================================

    public onMouseDown(event: MouseEvent) {
        console.log('onMouseDown');
       event.preventDefault();
        let raycaster = new THREE.Raycaster();
        let mouse = new THREE.Vector2();
        mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
        mouse.y = - (event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, this.camera);
        let obj: THREE.Object3D[] = [];
        //this.findAllObjects(obj, this.scene);
        let intersects = raycaster.intersectObjects(obj);
        console.log('Scene has ' + obj.length + ' objects');
        console.log(intersects.length + ' intersected objects found');
        intersects.forEach((i) => {
            console.log(i.object); // do what you want to do with object
        });

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
        console.log('onResize: ' + this.canvas.clientWidth + ', ' + this.canvas.clientHeight);

        this.camera.aspect = this.getAspectRatio.call(this);
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.render();
    }

   /*  @HostListener('document:keypress', ['$event'])
    public onKeyPress(event: KeyboardEvent) {
        console.log("onKeyPress: " + event.key);
    } */






    //======================== LIFECYCLE ======================================================
    //=========================================================================================
    ngAfterViewInit() {
        this.createScene();
        this.createLight();
        this.createCamera.call(this);
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
