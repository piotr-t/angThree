import { Directive, ElementRef, Renderer2, OnInit, Input, ViewContainerRef, TemplateRef } from '@angular/core';
import { Element } from '@angular/compiler';

@Directive({
  selector: '[appWindowsWiew]'
})

export class WindowsWiewDirective implements OnInit {

  @Input()
    data: any;

    private newElement;

  constructor(
      private el: ElementRef,
      private renderer: Renderer2,
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef) {
       // this.newElement = this.renderer.createElement('div');
      //  this.newElement.innerHtml = this.data;
     }

    ngOnInit() {
       let elRef = this.el.nativeElement;
      // this.renderer.addClass(this.newElement, 'ok');
       this.renderer.appendChild( this.templateRef , elRef );
      // this.viewContainer.createEmbeddedView(this.templateRef);
    }

}
