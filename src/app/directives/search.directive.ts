import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.opacity = '0.5';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.opacity = '1';
  }
}
