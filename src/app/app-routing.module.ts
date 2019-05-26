import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PanelComponent } from './panel/panel.component';



const routes: Routes = [
  {
      path: '',
      component: WelcomeComponent
  },
  {
    path: 'cos',
    component: PanelComponent
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
