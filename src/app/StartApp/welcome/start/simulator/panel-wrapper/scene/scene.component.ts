import { AfterViewInit, Component, ElementRef, Input, ViewChild, OnInit, OnChanges, Injectable } from '@angular/core';
import * as THREE from 'three';
import './js/EnableThreeExamples';
import 'three/examples/js/controls/OrbitControls';
import 'three/examples/js/loaders/ColladaLoader';
import { Object3D, Box2, LineCurve } from 'three';


import { Shapes } from './shapes';

import {GUI} from 'dat-gui'; // panel sterowania
import * as dat from 'dat.gui';
import { ScenService } from '../../../../../../scen.service';
import { MoveCodeService } from '../../../../../../move-code.service';



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
    public listt= [];

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
// tslint:disable-next-line:member-ordering

// tslint:disable-next-line:member-ordering
public in1: any;





moveDrill(drillArray, i) {
  let i1 = i;
      const dp = this.drillElement.position.x;
      const in1 = setInterval(() => {
        if (drillArray[i1] > dp) {this.drillElement.position.x += 1; }
        if (drillArray[i1] < dp) {this.drillElement.position.x -= 1; }
        if (drillArray[i1] === this.drillElement.position.x) {
          clearInterval(in1); i1++; if (i1 < drillArray.length) {this.moveDrill(drillArray, i1); }
        }
      }, 100);
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
           this.divRef.nativeElement.classList.add('guiCanvas');
           this.divRef.nativeElement.style.position = 'absolute';

const i = 0;
           this.dataService.startToggle1().subscribe(d => {
             if (d === true && this.dataService.list) {

              this.dataService.list.forEach(elem => {
                let el;
                if ( typeof elem === 'string') {


                 if (elem[0] !== 'x' && elem[0] !==  'y' && elem[0] !== 'z') {alert(elem[0]); }

                  const pattern = /[x|y|z|m][0-9]*[^xyz]*/gi; // dzieli na części wg x|y|z
                   // ciąg zaczynający sie od x|y|z następnie cokolwiek (-)?[0-9]*(.)?[0-9]{1,}
                  const ellem1 = elem.match(pattern);
                  console.log(ellem1);
                  if ( (ellem1 !== null) && (elem !== undefined)) {
                    el = Number(ellem1.join(''));
                  this.listt.push(el); }
                  }
              });

             if (this.listt.length > 0) {
             this.moveDrill(this.listt, i); }
             }

              this.listt = [];
           });
    }



    ngOnChanges() {}

}
