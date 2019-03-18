import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonsComponent } from '../buttons/buttons.component';
import { ScenService } from '../../scen.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [HeaderComponent, ButtonsComponent],
 exports: [HeaderComponent]
})
export class HeaderModule { }
