import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-program1',
  templateUrl: './active-program1.component.html',
  styleUrls: ['./active-program1.component.scss']
})
export class ActiveProgram1Component implements OnInit {

  activeProgramNumber = 'O001';
  list = [1, 2, 3, 45, 6, 7, 8];

  constructor() { }

  ngOnInit() {
  }

}
