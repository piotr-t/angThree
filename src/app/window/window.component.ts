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
panTitle = 'Gcody';

activeTT = true;
appT = false; // HANDLE PANEL
handleT = false;
apl = false;
apl1 = false;
apl2 = false; // panel

constructor( public SceneS: ScenService) {}

// data from ScenService switch windowCompponent visibility
public switchPanelShow(dana) {

            this.PanelDana = dana;
            this.panTitle = this.PanelDana;

        switch (this.PanelDana) {

        case 'C': {
            this.apl = false;
            this.appT = false;
            this.handleT = false;
            this.activeTT = true;
            this.apl1 = false;
            this.apl2 = false;
            this.SceneS.showPanelJog(this.appT);
        }
          break;
          case 'ZERO RET': {
            this.apl = false;
            this.appT = false;
            this.activeTT = false;
            this.handleT = true;
            this.apl1 = false;
            this.apl2 = false;
            this.SceneS.showPanelJog(this.appT);
        }
          break;
          case 'HANDLE': {
            this.apl = false;
            this.appT = true;
            this.activeTT = false;
            this.handleT = false;
            this.apl1 = false;
            this.apl2 = false;
            this.SceneS.showPanelJog(this.appT);
        }
          break;
          case 'LIST PROGRAM': {
            this.apl = true;
            this.appT = false;
            this.activeTT = false;
            this.handleT = false;
            this.apl1 = false;
            this.apl2 = false;
            this.SceneS.showPanelJog(this.appT);
        }
          break;
          case 'EDIT': {
            this.apl = false;
            this.appT = false;
            this.activeTT = false;
            this.apl1 = true;
            this.handleT = false;
            this.apl2 = false;
            this.SceneS.showPanelJog(this.appT);
        }
          break;
          case 'INSERT': {
            this.apl = false;
            this.appT = false;
            this.activeTT = false;
            this.apl1 = false;
            this.handleT = false;
            this.apl2 = true;
            this.SceneS.showPanelJog(this.appT);
        }
          break;
          case '10': {
            console.log("1200");

        }
          break;
        }
}


 ngOnInit() {

// implements panelComponent button content
   this.SceneS.getZML1().subscribe(dana => {this.switchPanelShow(dana); });
 }



}
