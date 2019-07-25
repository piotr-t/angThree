import { Component, OnInit, Input, Output,  EventEmitter, OnDestroy } from '@angular/core';
import { ScenService } from '../../../scen.service';
import { MoveCodeService } from '../../../move-code.service';
import 'rxjs/add/operator/map';


const dataPanel = require('./panelData.json');


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  res= dataPanel.res;
  f= dataPanel.f;
  XYZ= dataPanel.XYZ;
  alphabrt= dataPanel.alphabrt;
  overiders= ['-10%', '100%', '+10%', 'HANDLE FEED', '-10%', '100%', '+10%', 'HANDLE SPINDLE', 'FWD',
   'STOP', 'REV', 'SPINDLE', '5%', '25%', '50%', '100%' ];
  ofset= ['PROGRAM', 'POSITION', 'OFFSET', 'CURENT COMMANDS', 'ALARMS', 'DIAGNOSTIC', 'SETING', 'HELP' ];
  dire= dataPanel.dire;
  edit= dataPanel.edit;
  liczby= dataPanel.liczby;

 @Input()
  public zmienna1;
@Output() public cc= new EventEmitter();


 zmm: any= 0;

  constructor(private dataService: ScenService,
    public  moveCodeService: MoveCodeService,
    ) {

    }

 public ediT(a: string) {
 this.cc.emit(a);

 // send content button to dataService as string
  this.dataService.zmianaL1(a);
    this.moveCodeService.startCode();
 }

  ngOnInit() {
  }


}
