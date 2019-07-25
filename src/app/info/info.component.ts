import { Component, OnInit } from '@angular/core';
import { ScenService } from '../scen.service';
import {Observable} from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

info = 'program';
// fill = 'red'

  constructor(public infoService: ScenService) { }

  ngOnInit() {
    this.infoService.getZML1().subscribe(dana => this.info = dana);

    // const a = new IntervalObservable(50);
    // const subscribe = a.subscribe(val => console.log(val));
  }

}
