import { Component, OnInit } from '@angular/core';

// interface Progrm
interface Program {
  start: '%';
  name: number;
  nameStart: 'O';
}

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {

  constructor() { }

public programs: [{}];

  ngOnInit() {
  }

}
