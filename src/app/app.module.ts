import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';
import { HeaderModule } from './header/header/header.module';
import { HeaderComponent } from './header/header/header.component';
import { ScenService } from './scen.service';
import { PanelComponent } from './panels/panel/panel.component';
import { Panel2Component } from './panels/panel2/panel2.component';
import { JogComponent } from './jog/jog.component';
import { InpComponent } from './inp/inp.component';
import { MoveCodeService } from './move-code.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartComponent } from './start/start.component';
import { ToolpanelComponent } from './panels/toolpanel/toolpanel.component';
import { GcodsComponent } from './gcods/gcods.component';
import { ActiveToolComponent } from './active-tool/active-tool.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { ToolsComponent } from './tools/tools.component';
import { MemComponent } from './mem/mem.component';
import { ProgramComponent } from './program/program.component';
import { PanelWrapperComponent } from './panel-wrapper/panel-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    PanelComponent,
    Panel2Component,
    JogComponent,
    InpComponent,
    WelcomeComponent,
    StartComponent,
    ToolpanelComponent,
    GcodsComponent,
    ActiveToolComponent,
    ProgramListComponent,
    ToolsComponent,
    MemComponent,
    ProgramComponent,
    PanelWrapperComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HeaderComponent, ScenService, MoveCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
