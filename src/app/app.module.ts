import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SceneComponent } from './scene/scene.component';
import { HeaderModule } from './header/header/header.module';
import { HeaderComponent } from './header/header/header.component';
import { ScenService } from './scen.service';
import { PanelComponent } from './allPanels/panels/panel/panel.component';
import { Panel2Component } from './allPanels/panels/panel2/panel2.component';
import { JogComponent } from './jog/jog.component';
import { InpComponent } from './inp/inp.component';
import { MoveCodeService } from './move-code.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartComponent } from './start/start.component';
import { ToolpanelComponent } from './allPanels/panels/toolpanel/toolpanel.component';
import { GcodsComponent } from './gcods/gcods.component';
import { ActiveToolComponent } from './allPanels/active-tool/active-tool.component';
import { ProgramListComponent } from './allPanels/panels/program-list/program-list.component';
import { ToolsComponent } from './allPanels/tools/tools.component';
import { MemComponent } from './allPanels/mem/mem.component';
import { ProgramComponent } from './allPanels/panels/program/program.component';
import { PanelWrapperComponent } from './allPanels/panels/panel-wrapper/panel-wrapper.component';
import { InfoComponent } from './info/info.component';
import { EditPanelComponent } from './allPanels/edit-panel/edit-panel.component';
import { ZeroRetComponent } from './allPanels/zero-ret/zero-ret.component';
import { OfsetComponent } from './allPanels/ofset/ofset.component';
import { ActiveProgramComponent } from './allPanels/active-program/active-program.component';
import { WrapperPanelsComponent } from './allPanels/wrapper-panels/wrapper-panels.component';

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
    InfoComponent,
    EditPanelComponent,
    ZeroRetComponent,
    OfsetComponent,
    ActiveProgramComponent,
    WrapperPanelsComponent],
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
