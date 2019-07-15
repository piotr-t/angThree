import { OnInit } from '@angular/core';
import * as THREE from 'three';
import './js/EnableThreeExamples';

import { Camera1 } from './camera1';
import { ScenService } from '../scen.service';
import { MoveCodeService } from '../move-code.service';




export class EventsButtons extends Camera1 {


    constructor(public dataService: ScenService,
        // public forwardBackward: ForwardBackward
        public  moveCodeService:  MoveCodeService) {
        super();
        this.render = this.render.bind(this);
        this.onModelLoadingCompleted = this.onModelLoadingCompleted.bind(this);
        }


unSub;




// from SceneService
    drillPosition(dana) {

                switch (dana) {
                    case 'x':
                    { this.unSub = this.dataService.getJog().subscribe(dana1 => {
                        if ( this.drillScopeX.min <= dana1 && dana1 <= this.drillScopeX.max) {
                                this.pozX =  dana1; } });
                            this.drillElement.position.x = this.pozX; }
                        break;
                    case 'z':
                    {
                        this.unSub = this.dataService.getJog().subscribe(dana3 => {
                                if ( this.drillScopeZ.min <= dana3 && dana3 <= this.drillScopeZ.max) {
                                this.pozY = dana3; } });
                            this.drillElement.position.y = this.pozY;
                    }
                        break;
                    case 'y':
                    {
                        this.unSub = this.dataService.getJog().subscribe(dana4 => {
                                if ( this.boardScopeY.min <= dana4 && dana4 <= this.boardScopeY.max) {
                                this.pozZ = dana4; }});
                            this.boardElement.position.z = this.pozZ; }
                        break;
                }

               // this.setShapesDrillPosition = this.drillElement.position;
        }


// ///////////////////////-------------obsługa przyciskw--------------------///////////////////////////////////
    public togRect(dana) {
        switch (dana) {
            case 1:
            this.moveTo(this.drillElement, this.toolStoreElement, .1);
           // this.modelScene.rotation.z += 100;
           // this.render();
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
              this.drillElement.position.set( 0, this.c, 0);
            break;
            case 9:
            this.c -= .5;
          this.drillElement.position.set( 0, this.c, 0);
          const pox = this.drillElement.position;
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

// tslint:disable-next-line: member-ordering
   // public emitWrapper;
// =========================== move to ===================================
    public moveTo(element, stop, steep) {

        const directory = stop.position.x > element.position.x ? 1 : -1;

        const difereceX = Math.abs(stop.position.x - element.position.x);
        const difereceY = Math.abs(stop.position.y - element.position.y);
        const minDiferenceY = 20;

        this.unSub.unsubscribe();
        console.log(this.unSub);


       const inter =  setInterval(() => {
        if ( difereceX <= difereceY - minDiferenceY) { } else {
    element.position.x -= steep;
        if ((element.position.x >= stop.position.x && directory === 1) ||
        (element.position.x < stop.position.x && directory === -1)) {
            element.position.x = stop.position.x;
             element.position.y += steep; }}

           if (element.position.x <= (stop.position.x + steep || stop.position.x - steep ) &&
             element.position.y >= (stop.position.y + steep || stop.position.y - steep)) {
               clearInterval(inter); return; }

               // dane do sceneService
               this.dataService.zmJog(element.position.x);

       }, steep);

    }

}
