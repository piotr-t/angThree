import { Component, OnInit, AfterViewInit, Input, OnChanges } from '@angular/core';
import {GUI} from 'dat-gui'; // panel sterowania
import * as dat from 'dat.gui';
import { GuiService } from './gui.service';
// import { ScenService } from './scen.service';

// guiComponent implement panel control scene animation

@Component({
  selector: 'app-gui',
  templateUrl: './gui.component.html',
  styleUrls: ['./gui.component.scss']
})

export class GuiComponent implements OnInit  {

  constructor(private guiservice: GuiService) {
  }



// tslint:disable-next-line: member-ordering
  gui: GUI = new dat.default.GUI({width: 300});
maxSize: any;

// tslint:disable-next-line: use-life-cycle-interface
 ngAfterViewInit() {
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
cam.open();
cam.domElement.parentElement.style.position = 'fixed';
cam.domElement.parentElement.style.zIndex = '2000';
this.maxSize = obj.maxxxSize;
this.guiservice.zmGui(this.gui);
console.log(this.gui);


}

// tslint:disable-next-line: member-ordering
ngOnInit() {


  }

// tslint:disable-next-line: use-life-cycle-interface
ngOnChanges () {


}

}
