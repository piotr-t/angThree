import { Gcody } from './../gcody.enum';
import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { ScenService } from '../scen.service';
import { MoveCodeService } from '../move-code.service';



@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  res= ['reset', 'power up', 'tool changed'];
  f= ['F1', 'F2', 'F3', 'F4' , 'tool', 'next tool', 'tool relise', 'part zero'];
  XYZ= ['CHIP FWD', 'A+/B+', '+Z', '-Y', 'CHIP STOP', '', '', '', '', '', '', '', '', '', '', ];
  alphabrt= [' ', 'A', 'B', 'C', 'D' , 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
           'W', 'X' , 'Y', 'Z', 'EOB', '(', ')', ];
  overiders= ['bhh ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ];
  ofset= ['PROGRAM', 'POSIT', 'OPSET', 'CURNT', 'ALARM', 'PARAM', 'SETING', '', 'HELP' ];
  dire= [' HOME', '^ ', 'PAGE UP ', '< ', 'CURSOR ', '> ', 'END ', 'V ', 'PAGE DOWN ' ];
  // tslint:disable-next-line:max-line-length
  edit= ['EDIT' , 'INSERT' , 'ALTER' , 'DELETE', 'UNDO', 'MEM', 'SINGLE BLOCK', 'DRY RUN', 'OPT STOP', ' BLOCK', 'MDI ', 'COOLNT ', 'ORIENT ', 'ATC ' , ' ATC  ' ,
  // tslint:disable-next-line:max-line-length
  'HANDLE ' , '.1 ', '1 ', '10 ', ' 100 ', ' ZERO RET', 'AUTO  ' , 'ORIGIN ' , 'ZERO ', 'HOME ', 'LIST PROGRAM ', 'SELECT ', 'SEND ', 'RECV ', 'ERASE '];
  liczby= ['7', ' 8', '9 ', ' 4', '5 ', ' 6', ' 1', '2 ', '3 ', '- ', ' 0', ' *', ' CANCEL', 'SPACE ', ' WRITE'];
 @Input()
  public zmienna1;
@Output() public cc= new EventEmitter();


 zmm: any= 0;
  constructor(private dataService: ScenService,
    public  moveCodeService: MoveCodeService) {}

 public ediT(a) {
 this.cc.emit(a);
  this.dataService.zmianaL1(a);
// tslint:disable-next-line: triple-equals

    this.moveCodeService.startCode();

 }

  ngOnInit() {
  }

}
