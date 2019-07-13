import { AfterViewInit, Component, ElementRef, Input, ViewChild, OnInit, OnChanges, Injectable } from '@angular/core';
import * as THREE from 'three';
import './js/EnableThreeExamples';
import 'three/examples/js/controls/OrbitControls';
import 'three/examples/js/loaders/ColladaLoader';
import { Object3D, Box2, LineCurve } from 'three';
import { ScenService } from './../scen.service';
import { MoveCodeService } from '../move-code.service';
import { Shapes } from './shapes';

import {GUI} from 'dat-gui'; // panel sterowania
import * as dat from 'dat.gui';



@Component({
    selector: 'app-scene',
    template: `<div class="GuiDiv" #guiDiv></div><canvas class="cvs" #canvas></canvas>`,
    styleUrls: ['./scene.component.scss']
})

@Injectable()
export class SceneComponent extends Shapes implements AfterViewInit, OnInit, OnChanges {

    public renderer: THREE.WebGLRenderer;
    public camera: THREE.PerspectiveCamera;
    public scene: THREE.Scene;
    public dana: any = true;

    // GUI component
    gui: GUI = new dat.default.GUI({autoPlace: false , width: 300}); // autoplace zmiana pozycji gui
    maxSize: any;

    // Canvas Element
    @ViewChild('canvas')
    public canvasRef: ElementRef;

    // gui Wrapper
    @ViewChild('guiDiv')
    public divRef: ElementRef;

    // getter canvas
    public get canvas(): HTMLCanvasElement {
        return  this.canvasRef.nativeElement;
    }

    @Input() r: any;


    constructor(public dataService: ScenService,
                 public  moveCodeService:  MoveCodeService) {

            super(dataService, moveCodeService);
            this.render = this.render.bind(this);
            this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
    }

// ======================= rendering ===================================================================
// =====================================================================================================

    public startRendering() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
       this.renderer.setPixelRatio(devicePixelRatio ); // !!!!
       this.renderer.setSize( this.canvas.clientWidth ,  this.canvas.clientHeight ); // set size animation
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.autoClear = true;

        const component: SceneComponent = this;

        (function render() {
           requestAnimationFrame(render); // requestAnimationFrame
           // https://developer.mozilla.org/pl/docs/Web/API/Window/requestAnimationFrame
            component.render();
        }());
    }


    // ======================== LIFECYCLE ======================================================
    // =========================================================================================
    ngAfterViewInit() {
        this.createScene();
        this.createLight();
        this.createCamera.call(this);
        this.startRendering();
        this.addControls();
        this.drill();
        this.newPlane();
        this.board();
        this.toolStore();

        // gui component
        const obj = {
          message: 'control panel',
          mouseMovement: false,
          maxxxSize: 6.0,
          speed: 5
        };

      this.gui.remember(obj);
      const cam = this.gui.addFolder('Camera');
      cam.add(obj, 'message').listen();
      cam.add(obj, 'mouseMovement').listen();
      cam.add(obj, 'maxxxSize', 0 , 10).name('wskaźnik czegoś').listen();

    }

    ngOnInit(): void {
        this.canvas.style.height = '100%';
        this.canvas.style.width = '100%';
        this.canvas.style.border = '2px solid black';

        this.dataService.getZML().subscribe(dana => {this.dana = dana;
            this.togRect(this.dana);
         } ); // obserwujemy getzml

         // zmiana kierunku narzedzia
         this.dataService.getDirectionPosition().subscribe(dana => { // dana: x , y , z
            this.drillPosition(dana);
         } );

        // jogComponent => sceneService => sceneComponent

            this.toggleSizeCanvas = false;

// gui element
            this.divRef.nativeElement.appendChild(this.gui.domElement);
           this.divRef.nativeElement.classList.add("guiCanvas");
           this.divRef.nativeElement.style.position = 'absolute';
    }

    ngOnChanges() {}

}
