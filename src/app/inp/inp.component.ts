import { Component, OnInit, ViewChild, AfterViewInit, HostListener  } from '@angular/core';
import { ScenService } from '../scen.service';


@Component({
  selector: 'app-inp',
  template: `<div class="labelWrapper">
              <label>Input: <input type = "text" [(ngModel)]="val" ></label>
            </div>`,
  styleUrls: ['./inp.component.scss']
})
export class InpComponent {
val: string;

constructor(public inputService: ScenService) {}

// export data from inputComponent to sceneService
@HostListener('window:keyup', ['$event'])
  enterEvent(event: KeyboardEvent) {
    if (event.keyCode === 13 && this.val !== undefined && this.val.length > 0) {
      this.inputService.inputContent(this.val);
      this.val = ''; }
  }

}
