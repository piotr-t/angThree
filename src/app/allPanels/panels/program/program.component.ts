import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScenService } from '../../../scen.service';


@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit, OnDestroy {

  list = [];

  constructor( private programService: ScenService) { }

  ngOnInit() {
    // to scene component
    this.programService.inputContent().subscribe(
      dana => {this.list.push(dana);
      this.programService.listFromProgram(this.list);
     }
    );
  }

  ngOnDestroy() {
  }

}
