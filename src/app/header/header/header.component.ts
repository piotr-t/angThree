import { Component, OnInit, Input } from '@angular/core';
import { ScenService } from '../../scen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private dataService: ScenService) { }

  ngOnInit() {
  }

}
