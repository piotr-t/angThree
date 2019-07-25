import { Component, OnInit } from '@angular/core';
const programJson = require('./program1.json');

@Component({
  selector: 'app-active-program',
  templateUrl: './active-program.component.html',
  styleUrls: ['./active-program.component.scss']
})
export class ActiveProgramComponent implements OnInit {

  constructor() { }
  programJson1 = programJson;

  ngOnInit() {
  }

}
