import { Gcody } from './../../gcody.enum';
import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { ScenService } from './../../scen.service';
import { MoveCodeService } from './../../move-code.service';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
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
  overiders= ['bhh ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ];
  ofset= ['PROGRAM', 'POSIT', 'OPSET', 'CURNT', 'ALARM', 'PARAM', 'SETING', '', 'HELP' ];
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
