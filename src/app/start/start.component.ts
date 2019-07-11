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
  appJogVisibility = false;
  d2 = false;

  constructor( public SceneS: ScenService) {}

visibilityPanel(dana) {
  this.d2 = dana === 'HANDLE' || dana === '100' || dana === '10' || dana === '1' || dana === '.1' || dana === 'V' || dana === '^';
  this.d2 ? this.panTitle = 'HANDLE' : this.panTitle = dana;
}

  ngOnInit() {

    this.SceneS.getZML1().subscribe(dana => {
       this.visibilityPanel(dana); }); // implements panelComponent button content
  }
}
