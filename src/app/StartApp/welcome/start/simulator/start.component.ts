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
  unsub;
  dana;
  visibleMEM = true;

  constructor( public VisibilityService: ScenService) {}

visibilityPanel(dana) {
  this.d2 = dana === 'HANDLE' || dana === '100' || dana === '10' || dana === '1' || dana === '.1' || dana === 'V' || dana === '^';
  this.d2 ? this.panTitle = 'HANDLE' : this.panTitle = dana;
  // unsubscribe
  if (dana === 'MDI ' ) {
    this.visibleMEM = false;
    this.unsub.unsubscribe();
    this.VisibilityService.getZML1().subscribe(dana1 => {
      alert(dana1);
   });
  }
}



  ngOnInit() {

 this.unsub = this.VisibilityService.getZML1().subscribe(dana => {
    this.visibilityPanel(dana);
 }); // implements panelComponent button conten

  }




}
