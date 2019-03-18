import { Component, OnInit, Input } from '@angular/core';
import { ScenService } from '../../scen.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  buttonName: any[]= [
    {name: 'obrót x', butt: 1}, {name: 'obrót z', butt: 2},
    {name: 'obrót x', butt: 3}, {name: 'obrót x', butt: 4},
    {name: 'obracaj', butt: 5}, {name: 'przybliz', butt: 6},
    {name: 'warstwa 1', butt: 7}, {name: 'podnieś', butt: 8},
    {name: 'opuść', butt: 9}, {name: 'pokaż panel', butt: 10},
    {name: 'controls', butt: 11}, {name: 'jog', butt: 12},
    {name: 'c2', butt: 13}, {name: 'podziel ekran', butt: 14},
    {name: 'c2', butt: 15}];

    constructor(public dataServive: ScenService) { }

  ngOnInit() {
  }

}
