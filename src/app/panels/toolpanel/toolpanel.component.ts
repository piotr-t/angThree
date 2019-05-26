import { Component, OnInit } from '@angular/core';
import { ScenService } from '../../scen.service';

@Component({
  selector: 'app-toolpanel',
  templateUrl: './toolpanel.component.html',
  styleUrls: ['./toolpanel.component.scss']
})
export class ToolpanelComponent implements OnInit {

  positionY = 0;
  positionZ= 0;
  position;
  positionX ;
  tooglePosition= {x: true, y: false, z: false };

  poz1;

  constructor(
    private dataService: ScenService,
    ) { }

       togglePoz1() {
          if (this.tooglePosition.x === true) {
            this.tooglePosition.x = false; this.tooglePosition.y = true; this.tooglePosition.z = false; } else {
            if (this.tooglePosition.y === true) {
              this.tooglePosition.x = false; this.tooglePosition.y = false; this.tooglePosition.z = true; } else {
                this.tooglePosition.x = true; this.tooglePosition.y = false; this.tooglePosition.z = false; }
          }
       }
fromJog(dana) {
// tslint:disable-next-line: no-bitwise
this.tooglePosition.x === true ?
 this.positionX = dana : this.tooglePosition.y === true ? this.positionY = dana : this.positionZ = dana;
}

    // subscribe data from sceneService and jogService
     pobierz1() { this.dataService.getZML1().subscribe(dana => { if (dana === 'V ') {this.togglePoz1(); } }); }
     pobierz2() {this.dataService.getJog().subscribe(dana => {this.fromJog(dana); }); }

  ngOnInit() {
    this.pobierz1();
    this.pobierz2();
}
}
