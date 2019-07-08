import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import {GUI} from 'dat-gui'; // panel sterowania
import * as dat from 'dat.gui';
import { ScenService } from './scen.service';
import { GuiService } from './gui/gui.service';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit, AfterViewInit {

  public wrzucoce: any = 'lorem ipsum dolor edswsa';


 constructor(private dataService: ScenService, private guiService: GuiService) {// implement service

 }

d2 = false;
// tslint:disable-next-line: member-ordering
public dana: any;
  public odbiur(a) {
 }

 ngAfterViewInit() {
 this.dataService.getJog().subscribe(dana => {this.dana = dana;
  }
   ); // obserwujemy getJog


   this.guiService.getGui().subscribe(dana => {
    }
     ); // obserwujemy getJog

     this.dataService.getZML().subscribe(dana2 => {
       if (dana2 === '10') {
        if (this.d2) { this.d2 = false; } else {this.d2 = true; }
       }
     });
 }



 ngOnInit() {
}
}
