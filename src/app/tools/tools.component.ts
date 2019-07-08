import { Component, OnInit } from '@angular/core';


// component shows use tools list;
// add new tool to list or delete


interface Tool {
  name: string;
}

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})




export class ToolsComponent implements OnInit {

  constructor() { }




  public toolList: [{}] = [{}];

  public addTool(tool) {
    this.toolList.push(tool);
  }

  public delTool(tool) {

    this.toolList.splice(this.toolList.findIndex(el => el === tool), 1);
  }

  ngOnInit() {

  }

// ruch skrawający po łuku G02 (prawo) i G03 (lewo)

g02g03(X: number, Y: number, i: number, j: number, G02: boolean, G03: boolean, zeroRet?: {}) {

// tslint:disable-next-line: no-unused-expression
  G02 ? 1 : (G03 ? -1 : 0);
}

// zmiana punktu zerowego
g00(X: number, Y: number, zeroRet?: {}) {

}



}
