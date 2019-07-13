import { Component, OnInit, Input } from '@angular/core';
import { ScenService } from '../../scen.service';

@Component({
  selector: 'app-header',
  template: `<header>
                <app-buttons ></app-buttons>
            </header>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: ScenService) { }

  ngOnInit() {
  }

}
