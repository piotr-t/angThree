import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { serializePath } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-panel-wrapper',
  templateUrl: './panel-wrapper.component.html',
  styleUrls: ['./panel-wrapper.component.scss']
})
export class PanelWrapperComponent implements OnInit {

  @Input()
  Title;


  constructor() { }


  ngOnInit() {
  }

}
