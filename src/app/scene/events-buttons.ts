import * as THREE from 'three';
import './js/EnableThreeExamples';

import { Camera1 } from '../camera1';
import { ScenService } from '../scen.service';
import { MoveCodeService } from '../move-code.service';



export class EventsButtons extends Camera1 {
    dana1: string;
    canvasRef: any;
    contr: any;


    constructor(public dataService: ScenService,
        public  moveCodeService:  MoveCodeService,
       // public forwardBackward: ForwardBackward
        ) {
   super();
   this.render = this.render.bind(this);
   this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
}

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



}
