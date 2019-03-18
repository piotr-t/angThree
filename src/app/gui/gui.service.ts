import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GuiService {

  constructor() { }

  private guiSource = new Subject<string>();
dana: any;

  zmGui(ms: any) {
this.dana = ms;
    this.guiSource.next(this.dana);
  }
  getGui(): Observable<string> { // trzeba zaimplementować
    return this.guiSource.asObservable ( );
  }
}
