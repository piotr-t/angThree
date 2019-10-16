import { Component, OnInit } from '@angular/core';
import { ScenService } from '../../../../scen.service';




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

  panTitle = 'MDI';
  appJogVisibility = false;
  d2 = false;
  // dana: string ;
  titleSimulator = 'CNC Simulator';
  title2 = 'Simulator';
  unsubscribeDataFromComponent;
  dana;
  visibleMEM = true;
  d3 = false;

  constructor( public VisibilityService: ScenService) {}

visibilityPanel(dana) {
  if (dana === 'HANDLE' || dana === 'EDIT' || dana === 'MEM' || dana === 'MDI ' || dana === 'LIST PROGRAM') {  this.panTitle = dana; }
//   this.d2 = dana === 'HANDLE' ;
 // this.d2 ? this.panTitle = 'HANDLE' : this.panTitle = dana;
 // this.unsubscribeDataFromComponent.unsubscribe();

   // unsubscribe
  if (dana === 'MDI ' ) {
  if (this.d3 === true) {alert(dana); this.d3 = false; this.visibleMEM = false; } else {this.d3 = true; }

    // this.visibleMEM = false;
    // this.unsubscribeDataFromComponent.unsubscribe();

}
if (this.d3 === true && dana === '^') {alert(dana); }
if (this.d3 === true && dana === '> ') {alert(dana); }  }



// implements panelComponent button conten
getDataFromComponent() {
  this.unsubscribeDataFromComponent = this.VisibilityService.getZML1().subscribe(dana => {
    this.visibilityPanel(dana);
    return dana;
 });
}

  ngOnInit() {
    this.getDataFromComponent();
  }
}
