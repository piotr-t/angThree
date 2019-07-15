import { Component, OnInit, ViewChild } from '@angular/core';
import { ScenService } from '../scen.service';

@Component({
  selector: 'app-mem',
  templateUrl: './mem.component.html',
  styleUrls: ['./mem.component.scss']
})
export class MemComponent implements OnInit {

  @ViewChild('appProg')
  appProg;  // all programComponent

  mem = 'MEM';

  constructor(public progService: ScenService) { }


  ngOnInit() {
  }

}
