import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './StartApp/welcome/WelcomeView/welcome.component';
import { StartComponent } from './StartApp/welcome/start/simulator/start.component';



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
