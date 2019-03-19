import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';
import { HeaderModule } from './header/header/header.module';
import { HeaderComponent } from './header/header/header.component';
import { ScenService } from './scen.service';
import { PanelComponent } from './panel/panel.component';
import { Panel2Component } from './panel2/panel2.component';
import { JogComponent } from './jog/jog.component';
import { GuiComponent } from './gui/gui.component';
import { GuiService } from './gui/gui.service';
import { InpComponent } from './inp/inp.component';
import { InpService } from './inp/inp.service';
import { MoveCodeService } from './move-code.service';
import { ApptextareaComponent } from './apptextarea/apptextarea.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    PanelComponent,
    Panel2Component,
    JogComponent,
    GuiComponent,
    InpComponent,
    ApptextareaComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  providers: [HeaderComponent, ScenService, GuiService, InpService, MoveCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
