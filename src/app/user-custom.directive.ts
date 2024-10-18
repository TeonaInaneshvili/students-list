import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUserCustom]',
  standalone: true
})
export class UserCustomDirective {

  constructor(private el:ElementRef) { }
@HostListener('click') onclick(){
  this.el.nativeElement.style.backgroundColor='grey';
}
}
