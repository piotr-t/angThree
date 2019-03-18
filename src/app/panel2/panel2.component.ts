import { Component, OnInit } from '@angular/core';
import { ScenService } from '../scen.service';

@Component({
  selector: 'app-panel2',
  templateUrl: './panel2.component.html',
  styleUrls: ['./panel2.component.scss']
})
export class Panel2Component implements OnInit {

  public taContent: string;
  public dzia: any= true;
  public dana1: any = '';
  private d1: any;
  public show: number;
  public daneEdit= [
    {tool: 1, x: 0, y: 0, radius: 0, apon: 0, tmp: 0},
    {tool: 2, x: 0, y: 0, radius: 0,  apon: 0, tmp: 0},
    {tool: 3, x: 0, y: 0, radius: 0, apon: 0, tmp: 0},
    {tool: 4, x: 0, y: 0, radius: 0, apon: 0, tmp: 0},
    {tool: 5, x: 0, y: 0, radius: 0, apon: 0, tmp: 0},
    {tool: 6, x:  0, y: 0 , radius: 0, apon: 0, tmp: 0},
    {tool: 7, x:  0, y: 0, radius: 0, apon: 0, tmp: 0},
    {tool: 8, x:  0, y: 0, radius: 0, apon: 0, tmp: 0},
    {tool: 9, x:  0, y: 0, radius: 0, apon: 0, tmp: 0},
    {tool: 10, x:  0, y: 0, radius: 0, apon: 0, tmp: 0}
  ];

  public daneProgram= [
    ['g11'],  []
  ];

  constructor(private dataService: ScenService) { }

  ngOnInit() {

   this.dataService.getZML1().subscribe(dana1 => {
     this.d1 = dana1;
     this.dana1 += dana1;
switch (dana1) {
  case 'EDIT':
  this.show = 1;
    break;
    case 'PROGRAM':
    this.show = 2;
      break;
}
    });
  }
}
