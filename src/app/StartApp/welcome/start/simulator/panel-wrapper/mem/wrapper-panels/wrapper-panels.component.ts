import { Component, OnInit } from '@angular/core';
import { ScenService } from '../../../../../../../scen.service';

@Component({
  selector: 'app-wrapper-panels',
  templateUrl: './wrapper-panels.component.html',
  styleUrls: ['./wrapper-panels.component.scss']
})
export class WrapperPanelsComponent implements OnInit {

  listProgram = false;
  editProgram = true;
  zeroRet = false;
  offset = false;
  mdi = true;

  constructor(public progService: ScenService) { }

  ngOnInit() {

    this.progService.getZML1().subscribe(data => {

      data === 'LIST PROGRAM' ? this.listProgram = true : this.listProgram = false;
      data === 'EDIT' ? this.editProgram = true : this.editProgram = false;
      (data === 'ZERO RET' || data === 'V' || data === '^') ? this.zeroRet = true : this.zeroRet = false;
      (data === 'MDI ' || data === 'V' || data === '^') ? this.mdi = true : this.mdi = false;
      data === 'OFFSET' ? this.offset = true : this.offset = false;
      });
  }

}
