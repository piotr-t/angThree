import { Component, OnInit, Input } from '@angular/core';
import {ScenService} from '../scen.service';





@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {



  @Input()
title: string;
  @Input()
panel: boolean;
  @Input()
scene: boolean;
@Input()
tool: boolean;
@Input()
showPanel: boolean;

PanelDana: string;
d = false;
d1 = false;
data: string;

constructor( public SceneS: ScenService) {}

  // data from ScenService switch windowCompponent visibility
    public switchPanelShow(dana) {
     if (dana === 'HANDLE') {this.d = true; }
     if (dana === 'EDIT') {this.d = false; }
    this.d1 = dana === 'HANDLE' || dana === '100' || dana === '10' || dana === '1' || dana === '.1' || dana === 'V' || dana === '^';
}


 ngOnInit() {

  // implements panelComponent button content
    this.SceneS.getZML1().subscribe(dana => { this.switchPanelShow(dana);  this.data =  dana; });

 }



}
