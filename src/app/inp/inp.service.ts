import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ScenService } from '../scen.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InpService implements OnInit {

  buttonText: string;
  private inp1Source = new Subject<string>();
  constructor(public scenService: ScenService) {
    // pobranie buttona z panel2
    this.scenService.getZML1().subscribe(dana => {this.buttonText = dana; });

   }




ngOnInit() {

  this.scenService.getZML1().subscribe(dana => {this.buttonText = dana; });
}

  getKeyObs(): Observable<string> {
    this.inp1Source.next(this.buttonText);
      return this.inp1Source.asObservable ( );
  }

}
