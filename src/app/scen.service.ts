import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { InpService } from './inp/inp.service';

@Injectable()
export class ScenService {
  private dataSource = new Subject<string>(); // obiekt do obserwowania-wrapper
  private dataSource1 = new Subject<string>();
  private dataSource2 = new Subject<string>();
  // data$ = this.dataSource.asObservable();

  constructor() {
  }

  private zmLevel: any;
  public teNapis: any;
  public JOG: any;
  public zmJ: any;



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
}
