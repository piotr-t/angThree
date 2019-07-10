import { Component, OnInit } from '@angular/core';
import { ScenService } from '../scen.service';


enum enumPanelShow {
  enumPanelSho = 0,
  activeB,
  activeC,
  activeD
}

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  panTitle = 'Gcody';

  appT= true;

  constructor( public SceneS: ScenService) {}

  ngOnInit() {

    this.SceneS.getZML1().subscribe(dana => {this.panTitle = dana; }); // implements panelComponent button content

   // this.SceneS.getPanel().subscribe(dana => {this.switchPanelShow(dana); });
  }
}
