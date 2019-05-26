import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PanelComponent } from './panel/panel.component';
import { StartComponent } from './start/start.component';



const routes: Routes = [
  {
      path: '',
      component: WelcomeComponent
  },
  {
    path: 'start',
    component: StartComponent
}

];



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes/* , { useHash: true } */)
  ],
   exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
