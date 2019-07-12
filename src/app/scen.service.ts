import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScenService implements OnInit {
  private dataSource = new Subject<string>(); // obiekt do obserwowania-wrapper
  private dataSource1 = new Subject<string>();
  private dataSource2 = new Subject<number>();
  private dataSource3 = new Subject<string>();
  private dataSource4 = new Subject<string>();
  private dataSource10 = new Subject<string>();

  constructor() {
   // this.showPanel();
  }


  private zmLevel: any;
  public teNapis: any;
  public JOG: any;
  public zmJ: any;
  public jPosition: any;
  public jPosition1: any;
  public dp;
  public showpan = 'activeT';
public panel;


// ------------------IMPORTS----------------------------
// from welcomeComponent
  showPanelJog(panel) {
    this.panel = panel;
  this.dataSource10.next(this.panel);
  }

  ngOnInit() {
    // this.showPanel();
  }


// buttonsComponent => scenService => sceneComponent
 zmianaL(zmLevel: number) {
  this.zmLevel = zmLevel;
    this.dataSource.next(this.zmLevel);
  }

   getDrillPosition(drillPosition) {

  this.dataSource2.next(drillPosition);

  }

// data from  panelComponent (button content)
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

  // export panelComponent button content
  getZML1(): Observable<string> { // trzeba zaimplementować
    return this.dataSource1.asObservable ( );
  }

  // appComponent  => scenService => jogComponent
 getJog(): Observable<number> { // trzeba zaimplementować
     return this.dataSource2.asObservable ( );
  }

  // scenService => jogComponent from toolComponent
  getPosition(): Observable<string> { // trzeba zaimplementować
    return this.dataSource3.asObservable ( );
  }

  getDirectionPosition(): Observable<string> { // trzeba zaimplementować
    return this.dataSource4.asObservable ( );
  }




  // to welcomeComponent
  getPanel(): Observable<string> {
    return this.dataSource10.asObservable ( );
  }

}
