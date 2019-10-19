'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular-three-examples documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-cdc6fabfba6fbb0e399e9a7ab2d05f02"' : 'data-target="#xs-components-links-module-AppModule-cdc6fabfba6fbb0e399e9a7ab2d05f02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-cdc6fabfba6fbb0e399e9a7ab2d05f02"' :
                                            'id="xs-components-links-module-AppModule-cdc6fabfba6fbb0e399e9a7ab2d05f02"' }>
                                            <li class="link">
                                                <a href="components/ActiveProgram1Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActiveProgram1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActiveProgramComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActiveProgramComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActiveToolComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActiveToolComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CarusselComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CarusselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditPanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditPanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GcodsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GcodsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MdiComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MdiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OfsetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OfsetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Panel2Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Panel2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PanelWrapperComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PanelWrapperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgramComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgramComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgramListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgramListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SceneComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SceneComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolpanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolpanelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToolsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WelcomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WrapperPanelsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WrapperPanelsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ZeroRetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ZeroRetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-cdc6fabfba6fbb0e399e9a7ab2d05f02"' : 'data-target="#xs-injectables-links-module-AppModule-cdc6fabfba6fbb0e399e9a7ab2d05f02"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-cdc6fabfba6fbb0e399e9a7ab2d05f02"' :
                                        'id="xs-injectables-links-module-AppModule-cdc6fabfba6fbb0e399e9a7ab2d05f02"' }>
                                        <li class="link">
                                            <a href="injectables/MoveCodeService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MoveCodeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ScenService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ScenService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Camera1.html" data-type="entity-link">Camera1</a>
                            </li>
                            <li class="link">
                                <a href="classes/EventsButtons.html" data-type="entity-link">EventsButtons</a>
                            </li>
                            <li class="link">
                                <a href="classes/Init.html" data-type="entity-link">Init</a>
                            </li>
                            <li class="link">
                                <a href="classes/Scene1.html" data-type="entity-link">Scene1</a>
                            </li>
                            <li class="link">
                                <a href="classes/Shapes.html" data-type="entity-link">Shapes</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserPanel.html" data-type="entity-link">UserPanel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GcodsService.html" data-type="entity-link">GcodsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JogComponent.html" data-type="entity-link">JogComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MoveCodeService.html" data-type="entity-link">MoveCodeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SceneComponent.html" data-type="entity-link">SceneComponent</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScenService.html" data-type="entity-link">ScenService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Program.html" data-type="entity-link">Program</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tool.html" data-type="entity-link">Tool</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tool-1.html" data-type="entity-link">Tool</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});