import { Component, OnInit, ViewChild } from '@angular/core';
import { ScenService } from '../../../../../../scen.service';




@Component({
  selector: 'app-mem',
  templateUrl: './mem.component.html',
  styleUrls: ['./mem.component.scss']
})
export class MemComponent implements OnInit {

  @ViewChild('appProg')
  appProg;  // all programComponent

  memTitle = 'MEM';

  buttonName = 'EDIT';



  jogRET = 0.1;

  constructor(public progService: ScenService) { }

  ngOnInit() {
    this.progService.getZML1().subscribe(data => {

       this.buttonName = data;

       switch (data) {
          case '1':
          case '.1':
          case '10':
          case '100': {
            this.jogRET = Number( data);
            this.progService.getRet(this.jogRET); }
            break;
       }
       });
  }

}
