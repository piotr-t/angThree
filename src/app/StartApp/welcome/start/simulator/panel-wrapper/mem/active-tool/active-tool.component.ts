import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-tool',
  templateUrl: './active-tool.component.html',
  styleUrls: ['./active-tool.component.scss']
})
export class ActiveToolComponent implements OnInit {

  numberTool = 2;
  type = 'Drill';
  life = 100;
  numberActiveToolNext = 3;


  constructor() { }

  ngOnInit() {
  }

}
