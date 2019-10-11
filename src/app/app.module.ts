import { MdiComponent } from './allPanels/mdi/mdi.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SceneComponent } from './/StartApp/welcome/start/simulator/panel-wrapper/scene/scene.component';
import { HeaderComponent } from './StartApp/welcome/start/header/header.component';
import { ScenService } from './scen.service';
import { PanelComponent } from './allPanels/panels/panel/panel.component';
import { Panel2Component } from './allPanels/panels/panel2/panel2.component';
import { JogComponent } from './jog/jog.component';
import { InpComponent } from './inp/inp.component';
import { MoveCodeService } from './move-code.service';
import { WelcomeComponent } from './StartApp/welcome/WelcomeView/welcome.component';
import { AppRoutingModule } from './/app-routing.module';
import { StartComponent } from './StartApp/welcome/start/start/start.component';
import { ToolpanelComponent } from './allPanels/panels/toolpanel/toolpanel.component';
import { GcodsComponent } from './gcods/gcods.component';
import { ActiveToolComponent } from './allPanels/active-tool/active-tool.component';
import { ProgramListComponent } from './allPanels/panels/program-list/program-list.component';
import { ToolsComponent } from './allPanels/tools/tools.component';
import { MemComponent } from './StartApp/welcome/start/simulator/panel-wrapper/mem/mem.component';
import { ProgramComponent } from './allPanels/panels/program/program.component';
import { PanelWrapperComponent } from './StartApp/welcome/start/simulator/panel-wrapper/panel-wrapper.component';
import { InfoComponent } from './info/info.component';
import { EditPanelComponent } from './allPanels/edit-panel/edit-panel.component';
import { ZeroRetComponent } from './allPanels/zero-ret/zero-ret.component';
import { OfsetComponent } from './allPanels/ofset/ofset.component';
import { ActiveProgramComponent } from './allPanels/active-program/active-program.component';
import { WrapperPanelsComponent } from './StartApp/welcome/start/simulator/panel-wrapper/mem/wrapper-panels/wrapper-panels.component';


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
    MdiComponent,
    ProgramComponent,
    PanelWrapperComponent,
    InfoComponent,
    EditPanelComponent,
    ZeroRetComponent,
    OfsetComponent,
    HeaderComponent,
    ActiveProgramComponent,
    WrapperPanelsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ScenService, MoveCodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
