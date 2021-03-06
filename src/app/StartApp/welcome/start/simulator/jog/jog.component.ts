
import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Injectable} from '@angular/core';
import { elementClass } from '@angular/core/src/render3/instructions';
import * as THREE from 'three';
import { ScenService } from '../../../../../scen.service';

@Component({
  selector: 'app-jog',
  templateUrl: './jog.component.html',
  styleUrls: ['./jog.component.scss']
})


@Injectable()
export class JogComponent implements OnInit {


  constructor(private dataService: ScenService) {

  }

toogleEmmitPosition = false;
showPositonOnJog = 0;
count: any= 0;

  @ViewChild('okrRef') okrRef: ElementRef;
  @ViewChild('okr1Ref') okr1Ref: ElementRef;


  wyslijCos() {
    this.count++;
    this.wwyst.emit(this.count );
  }

// tslint:disable-next-line: member-ordering
public dana: any;
// tslint:disable-next-line: member-ordering
 pozX = 0;
 // tslint:disable-next-line:member-ordering
 offsX;
 // tslint:disable-next-line:member-ordering
 offsY;
 // tslint:disable-next-line:member-ordering
 pozY = 0;
 // tslint:disable-next-line:member-ordering
 pozX1 = 0;
 // tslint:disable-next-line:member-ordering
 pozY1 = 0;
 // tslint:disable-next-line:member-ordering
 mouMov = 0;
 // tslint:disable-next-line:member-ordering
 mouMov1 = 0;
 // tslint:disable-next-line:member-ordering
 isDivVisible= false;



// tslint:disable-next-line: member-ordering
 @Output() wwyst= new EventEmitter();

 zmmPoz(dana) {
  this.mouMov = dana ;
  }

  public pozycja1(event) {

    this.offsX = event.pageX - this.okrRef.nativeElement.offsetLeft;
    this.offsY = event.pageY - this.okrRef.nativeElement.offsetTop;
    const onc = this.okrRef.nativeElement.clientWidth / 2;


 setTimeout(() => {


  if (this.toogleEmmitPosition === true ) { // toggle emit position to sceneSevice
    if (this.offsY < onc && event.movementX > 0) {
      this.mouMov += (Math.abs(event.movementX) + Math.abs(event.movementY));
      }
    if (this.offsY >= onc  && event.movementX > 0) {
      this.mouMov -= (Math.abs(event.movementX) + Math.abs(event.movementY));
   }

     if (this.offsY < onc && event.movementX < 0) {
      this.mouMov -= (Math.abs(event.movementX) + Math.abs(event.movementY));
    }
    if (this.offsY >= onc && event.movementX < 0) {
      this.mouMov += (Math.abs(event.movementX) + Math.abs(event.movementY));
    }
  if (event.movementX === 0)  {
    if (event.movementY > 0) {
      if (this.offsX < onc) {this.mouMov -= Math.abs(event.movementY); }
      if (this.offsX >= onc) {this.mouMov +=  Math.abs(event.movementY); }
    }
    if (event.movementY < 0) {
      if (this.offsX < onc) {this.mouMov += (Math.abs(event.movementX) + Math.abs(event.movementY)); }
      if (this.offsX >= onc) {this.mouMov -= (Math.abs(event.movementX) + Math.abs(event.movementY)); }
    }
  }
       // emit position Jog to dataService
    // this.wwyst.emit(this.mouMov);
    this.dataService.zmJog(this.mouMov);
     this.okrRef.nativeElement.style.transform = `rotate(${this.mouMov * 2}deg)`;

  } else {

    if (this.offsY < onc && event.movementX > 0) {
      this.mouMov1 += (Math.abs(event.movementX) + Math.abs(event.movementY));
      }
    if (this.offsY >= onc  && event.movementX > 0) {
      this.mouMov1 -= (Math.abs(event.movementX) + Math.abs(event.movementY));
   }


     if (this.offsY < onc && event.movementX < 0) {
      this.mouMov1 -= (Math.abs(event.movementX) + Math.abs(event.movementY));
    }
    if (this.offsY >= onc && event.movementX < 0) {
      this.mouMov1 += (Math.abs(event.movementX) + Math.abs(event.movementY));
    }

  if (event.movementX === 0)  {
    if (event.movementY > 0) {
      if (this.offsX < onc) {this.mouMov1 -= Math.abs(event.movementY); }
      if (this.offsX >= onc) {this.mouMov1 +=  Math.abs(event.movementY); }
    }
    if (event.movementY < 0) {
      if (this.offsX < onc) {this.mouMov1 += (Math.abs(event.movementX) + Math.abs(event.movementY)); }
      if (this.offsX >= onc) {this.mouMov1 -= (Math.abs(event.movementX) + Math.abs(event.movementY)); }
    }
  }

 this.okrRef.nativeElement.style.transform = `rotate(${this.mouMov1 * 2}deg)`;

  }

 }, 50);

  }


  ngOnInit() {
    // subscribe button name from panelComponent
    this.dataService.getZML1().subscribe(data => {if (data === 'HANDLE' ) {
      if (this.toogleEmmitPosition === true) {
        this.toogleEmmitPosition = false;
        this.isDivVisible = false;
       } else {this.toogleEmmitPosition = true;
        this.isDivVisible = true;
       } } } );

    // subscribe zmiana pozycji w SceneComponent
    this.dataService.getPosition().subscribe(dana => {
      this.zmmPoz(dana);
       });

  }
}
