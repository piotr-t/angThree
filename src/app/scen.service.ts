import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ScenService implements OnInit {

  // obiekt do obserwowania-wrapper
  private dataSource = new Subject<string>(); // buttons names from header/buttonComponent
  private dataSource1 = new Subject<string>();
  private dataSource2 = new Subject<number>();
  private dataSource3 = new Subject<string>();
  private dataSource4 = new Subject<string>();
  private dataSource7 = new Subject<string>();
  private dataSource8 = new Subject<boolean>(); // input startToogle from memComponent
  private dataSource9 = new Subject<string>(); // input content from inputComponent
  private dataSource10 = new Subject<string>();
  private dataSource11 = new Subject<number>();
  private dataSource12 = new Subject<object>();

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
  public start = false;
  list;



ngOnInit() {

}

// --------------------------------------------------------------------------------------------
// --------------------------------------IMPORTS-----------------------------------------------
// --------------------------------------------------------------------------------------------

// ------------from welcomeComponent-----------------------------------------------------------
  showPanelJog(panel) {
    this.panel = panel;
  this.dataSource10.next(this.panel);
  }

// ------------------FROM HEADER---------------------------------------------------------------


// HEADER(buttonsComponent) => scenService => sceneComponent
 zmianaL(zmLevel: number) {
  this.zmLevel = zmLevel;
    this.dataSource.next(this.zmLevel);
  }

  // from memComponent
  getRet(ret?: number) {
  this.dataSource11.next(ret);
  return this.dataSource11.asObservable();
  }



   getDrillPosition(drillPosition?) {

  this.dataSource2.next(drillPosition);
  return this.dataSource2.asObservable();
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
// ----------------------------------------------memComponent/start|reset----------------------------------
startToggle(startToggle: boolean) {
  this.start = startToggle;
  this.dataSource8.next(startToggle);
}
// --------------------------------------------programComponent--------------------------------------------
listFromProgram(list: any) {
  this.list = list;
  this.dataSource7.next(list);
}

// --------------------------------------------memComponent----------------------------------------------
inputContent(iContent?: any) {
  this.dataSource9.next(iContent);
  return this.dataSource9.asObservable();
}

// --------------------------------------------------------------------------------------------------------
// ------------------------------------------------EXPORTS-------------------------------------------------
// --------------------------------------------------------------------------------------------------------

startToggle1(): Observable<boolean> {
  return this.dataSource8.asObservable();
}




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
