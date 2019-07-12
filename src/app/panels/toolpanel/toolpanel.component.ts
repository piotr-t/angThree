import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ScenService } from '../../scen.service';

@Component({
  selector: 'app-toolpanel',
  templateUrl: './toolpanel.component.html',
  styleUrls: ['./toolpanel.component.scss']
})
export class ToolpanelComponent implements OnInit {

  // emit position to Jog
  @Output() wwyst= new EventEmitter();

  positionY: number = 0;
  positionZ: number= 0;
  positionX: number = 0 ;


  tooglePosition: {x: boolean , y: boolean , z: boolean} = {x: true, y: false, z: false };

  poz1;

  constructor(
    private dataService: ScenService,
    ) {



    }

       togglePoz1(direction: boolean): void {


          if ((this.tooglePosition.x === true && direction) ||
            (this.tooglePosition.z === true && !direction)) {
            this.tooglePosition.x = false;
            this.tooglePosition.y = true;
            this.tooglePosition.z = false;

             // emit position to Jog
            this.wwyst.emit(this.positionY);
            this.dataService.zmPosition(this.positionY);

           } else {
            if ((this.tooglePosition.y === true && direction) ||
              (this.tooglePosition.x === true && !direction)) {
              this.tooglePosition.x = false;
              this.tooglePosition.y = false;
              this.tooglePosition.z = true;

            // emit position to Jog
            this.wwyst.emit(this.positionZ);
            this.dataService.zmPosition(this.positionZ);
               } else {
                this.tooglePosition.x = true;
                this.tooglePosition.y = false;
                this.tooglePosition.z = false;

             // emit position to Jog
            this.wwyst.emit(this.positionX);
            this.dataService.zmPosition(this.positionX);
          }
          }
       }

 // toggle direction drill
fromJog(dana) {
this.tooglePosition.x === true ?
 this.positionX = dana : this.tooglePosition.y === true ? this.positionY = dana : this.positionZ = dana;

 this.tooglePosition.x === true ?
 this.dataService.zmDirectionPosition('x') :
 this.tooglePosition.y === true ? this.dataService.zmDirectionPosition('y') : this.dataService.zmDirectionPosition('z');
}



// ----------------IMPORTS------------------------------------------
    // subscribe data from sceneService and jogService
     pobierz1() { this.dataService.getZML1().subscribe(dana => {

       switch (dana) {
       case 'V': this.togglePoz1(true);
       break;
       case '^': this.togglePoz1(false);
       break;
       case 'HANDLE':
       {};
       break;
       }
      }); }

    pobierz2() {this.dataService.getJog().subscribe(dana => {this.fromJog(dana); }); }

  ngOnInit() {
    this.pobierz1();
    this.pobierz2();
}
}
