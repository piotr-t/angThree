import { Component, OnInit } from '@angular/core';
const codes = require('./GCODS.json');

@Component({
  selector: 'app-gcods',
  templateUrl: './gcods.component.html',
  styleUrls: ['./gcods.component.scss']
})
export class GcodsComponent implements OnInit {
text = codes.G17;
  constructor() { }

  ngOnInit() {
  }

}
