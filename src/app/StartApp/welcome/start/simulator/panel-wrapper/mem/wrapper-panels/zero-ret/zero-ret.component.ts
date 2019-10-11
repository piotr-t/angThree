import { ScenService } from '../../../../../../../../scen.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-zero-ret',
  templateUrl: './zero-ret.component.html',
  styleUrls: ['./zero-ret.component.scss']
})
export class ZeroRetComponent implements OnInit {

  headList = ['G-CODE', 'X-AXIS', 'Y-AXIS', 'Z-AXIS', '  ', '  '];

  List = [
    ['G52', '0.', '0.', '0.', ' ', ' '],
    ['G54', '0.', '0.', '0.', ' ', ' '],
    ['G55', '0.', '0.', '0.', ' ', ' '],
    ['G56', '0.', '0.', '0.', ' ', ' '],
    ['G57', '0.', '0.', '0.', ' ', ' '],
    ['G58', '0.', '0.', '0.', ' ', ' '],
    ['G59', '0.', '0.', '0.', ' ', ' '],
    ['G154 P1', '0.', '0.', '0.', ' ', ' '],
    ['G154 P2', '0.', '0.', '0.', ' ', ' '],
    ['G154 P3', '0.', '0.', '0.', ' ', ' ']

  ];

  List2 = [
    ['0.', '0.', '0.', '0.', '0.', '0.'],
    ['0.', '0.', '0.', '0.', '0.', '0.'],
    ['0.', '0.', '0.', '0.', '0.', '0.'],
    ['0.', '0.', '0.', '0.', '0.', '0.'],
    ['0.', '0.', '0.', '0.', '0.', '0.'],
    ['0.', '0.', '0.', '0.', '0.', '0.'],
    ['0.', '0.', '0.', '0.', '0.', '0.'],
    ['0.', '0.', '0.', '0.', '0.', '0.'],
    ['0.', '0.', '0.', '0.', '0.', '0.']

  ];
activeRow = 0;
  constructor(private zeroService: ScenService) {

   }

  ngOnInit() {
    this.zeroService.getZML1().subscribe(
      data => {
        if (data === 'V' && this.activeRow < this.List.length - 1) {this.activeRow++; }
        if (data === '^' && this.activeRow > 0) {this.activeRow--; }
      }
    );

  }

}
