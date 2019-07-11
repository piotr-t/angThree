import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';
import { HeaderModule } from './header/header/header.module';
import { HeaderComponent } from './header/header/header.component';
import { ScenService } from './scen.service';
import { PanelComponent } from './panels/panel/panel.component';
import { Panel2Component } from './panel2/panel2.component';
import { JogComponent } from './jog/jog.component';
import { GuiComponent } from './gui/gui.component';
import { GuiService } from './gui/gui.service';
import { InpComponent } from './inp/inp.component';
import { InpService } from './inp/inp.service';
import { MoveCodeService } from './move-code.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartComponent } from './start/start.component';
import { WindowComponent } from './window/window.component';
import { ToolpanelComponent } from './panels/toolpanel/toolpanel.component';
import { GcodsComponent } from './gcods/gcods.component';
import { ActiveToolComponent } from './active-tool/active-tool.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { ToolsComponent } from './tools/tools.component';
import { MemComponent } from './mem/mem.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    PanelComponent,
    Panel2Component,
    JogComponent,
    GuiComponent,
    InpComponent,
    WelcomeComponent,
    StartComponent,
    WindowComponent,
    ToolpanelComponent,
    GcodsComponent,
    ActiveToolComponent,
    ProgramListComponent,
    ToolsComponent,
    MemComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AppRoutingModule
  ],
  providers: [HeaderComponent, ScenService, GuiService, InpService, MoveCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
