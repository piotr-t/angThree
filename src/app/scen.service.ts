import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { InpService } from './inp/inp.service';

@Injectable()
export class ScenService {
  private dataSource = new Subject<string>(); // obiekt do obserwowania-wrapper
  private dataSource1 = new Subject<string>();
  private dataSource2 = new Subject<string>();
  private dataSource3 = new Subject<string>();
  private dataSource4 = new Subject<string>();

  constructor() {
  }

  private zmLevel: any;
  public teNapis: any;
  public JOG: any;
  public zmJ: any;
  public jPosition: any;
  public jPosition1: any;

// ------------------IMPORTS----------------------------

// buttonsComponent => scenService => sceneComponent
 zmianaL(zmLevel: number) {
  this.zmLevel = zmLevel;
    this.dataSource.next(this.zmLevel);
  }

  zmianaL1(teNapis: string) {
    this.teNapis = teNapis;
      this.dataSource1.next(this.teNapis);
    }

    // jogComponent => scenService => appComponent
  zmJog(JOG: number) {
    this.JOG = JOG;
      this.dataSource2.next(this.JOG);
    }

 // toolComponent=> scenService => jogComponent
 zmPosition(JOG: any) {
  this.jPosition = JOG;
    this.dataSource3.next(this.jPosition);
  }

   // toolComponent=> scenService => jogComponent
 zmDirectionPosition(JOG: any) {
  this.jPosition1 = JOG;
    this.dataSource4.next(this.jPosition1);
  }

// ------------------EXPORTS----------------------------

  getZML(): Observable<string> { // trzeba zaimplementować
    return this.dataSource.asObservable ( );
  }
  getZML1(): Observable<string> { // trzeba zaimplementować
    return this.dataSource1.asObservable ( );
  }

  // appComponent  => scenService => jogComponent
  getJog(): Observable<string> { // trzeba zaimplementować
    return this.dataSource2.asObservable ( );
  }

  // scenService => jogComponent from toolComponent
  getPosition(): Observable<string> { // trzeba zaimplementować
    return this.dataSource3.asObservable ( );
  }

  getDirectionPosition(): Observable<string> { // trzeba zaimplementować
    return this.dataSource4.asObservable ( );
  }
}
