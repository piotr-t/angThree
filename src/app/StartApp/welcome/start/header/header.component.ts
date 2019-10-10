import { Component, OnInit, Input } from '@angular/core';
import { ScenService } from '../../../../scen.service';

const buttonName = require('./header.json');

// header component incudes
@Component({
  selector: 'app-header',
  template: `<header>
              <div class="btn-wrapper">
                <button class="btn" *ngFor="let itemButton of buttonName" (click)='dataService.headerButtons(itemButton.butt)' >
                {{itemButton.name}} </button>
              </div>
            </header>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: ScenService) { }

    buttonName = buttonName;

  ngOnInit() {
  }

}
