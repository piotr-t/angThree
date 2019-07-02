import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MoveCodeService {

  private moveSource = new Subject<string>();

  code = [{x: '40', y: '40', z: '40'}, {x: '10', y: '40', z: '80'}];
a;
public  startCode() {
// tslint:disable-next-line: prefer-const
    let f = 20;
    for (let i = 0; i < this.code.length; i++) {
    setInterval(() => {
        if (this.code[i].x) {
          this.a = this.code[i].x;
          this.moveSource.next(this.a);
        }
    }, f);
  }}

  
  zmCode(): Observable<string> {
    return this.moveSource.asObservable ( );
  }

  constructor() { }

}
