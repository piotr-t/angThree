import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ScenService } from '../scen.service';

@Component({
  selector: 'app-inp',
  templateUrl: './inp.component.html',
  styleUrls: ['./inp.component.scss']
})
export class InpComponent implements OnInit {

  constructor(public inpService: ScenService) {

  }

  @ViewChild('refInp')
  refInp: any;

  codeItem = '';
  codeBlock = ['fgfgfgfgf'];
  codeProgram = [];



  addCode (ci) {
    this.codeItem += ci;
    this.refInp.nativeElement.innerHTML = this.codeItem;
    if (ci === ';') {
      this.codeProgram.push(this.codeItem);
      this.codeItem = '';
    }
  }

  ngOnInit() {
     this.inpService.getZML1().subscribe(dana => {this.addCode (dana); } );
  }

}
