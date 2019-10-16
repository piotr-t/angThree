import { Component, OnInit } from '@angular/core';
import { ScenService } from '../../../../../../../../scen.service';

@Component({
  selector: 'app-carussel',
  templateUrl: './carussel.component.html',
  styleUrls: ['./carussel.component.scss']
})
export class CarusselComponent implements OnInit {

  constructor(public CarusselService: ScenService) { }

moveCarussel() {


}


  ngOnInit() {
    // from sceneService, button content === 'next tool'
    this.CarusselService.getZML1().subscribe(button => {if (button === 'next tool') {
       alert(button); } });
  }

}
