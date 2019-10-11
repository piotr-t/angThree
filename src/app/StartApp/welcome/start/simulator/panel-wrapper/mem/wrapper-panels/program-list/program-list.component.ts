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

public programs = [{no: 0, number: 'o001', filName: 'program one', size: '23,2kB', date: '01.07.2000'},
                  {no: 0, number: 'o001', filName: 'program one', size: '23,2kB', date: '01.07.2000'},
                  {no: 0, number: 'o001', filName: 'program one', size: '23,2kB', date: '01.07.2000'},
                  {no: 0, number: 'o001', filName: 'program one', size: '23,2kB', date: '01.07.2000'},
                  {no: 0, number: 'o001', filName: 'program one', size: '23,2kB', date: '01.07.2000'},
                  {no: 0, number: 'o001', filName: 'program one', size: '23,2kB', date: '01.07.2000'},
                  {no: 0, number: 'o001', filName: 'program one', size: '23,2kB', date: '01.07.2000'},
                  {no: 0, number: 'o001', filName: 'program one', size: '23,2kB', date: '01.07.2000'}];

  ngOnInit() {
  }

}
