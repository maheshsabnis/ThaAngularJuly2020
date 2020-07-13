import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

// all attribite directives will be used as the
// proeperty Binding with HTML Target element
// the 'selector' property will be define in syntax of the
// property-binding e.g. [setColor]
// this selector will be mapped with the
// Input decorated property of the Directive

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[setColor]'
})
export class ColorDirective {

  @Input('setColor')
   setColor: string;

   constructor(private element: ElementRef, private renderer: Renderer2){}

   // logic

   private applyColorToElement(color: string): void {
      this.renderer.setStyle(this.element.nativeElement,
         'backgroundColor', color);
   }


   // Define event Hosting for the Directive so that directive will be
   // activated whem those events areb raised on DOM

   @HostListener('mouseenter')
   onmouseenter(){
     this.applyColorToElement(this.setColor || 'magenta');
   }
   @HostListener('mouseleave')
   onmouseleave(){
     this.applyColorToElement(null);
   }

}
