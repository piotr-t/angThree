import { Component, OnInit } from '@angular/core';
import { ScenService } from '../scen.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  list = ['Program:'];

  constructor( private programService: ScenService) { }

  ngOnInit() {
    this.programService.inputContent().subscribe(
      dana => {this.list.push(dana + ';'); }
    );
  }

}
