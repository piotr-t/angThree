import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  @Input()
title: string;
  @Input()
panel;
  @Input()
scene;
@Input()
tool;

  constructor() { }

  ngOnInit() {
  }

}
