import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScenService } from '../../scen.service';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.scss']
})
export class EditPanelComponent implements OnInit {

  @ViewChild('myProg')
  appProg: ElementRef;

  memTitle = 'MEM';
  panel2Visibility = true;
  programVisibility = true;
  buttonName = 'EDIT';



  ok() {
  }

  constructor(public progService: ScenService) { }

  ngOnInit() {
    this.progService.getZML1().subscribe(data => this.buttonName = data);

  }

}
