import { element } from 'protractor';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  constructor(private element: ElementRef) {
    this.element
  }
  @Input('appClass') set classNames(classObj: any) {
    Object.keys(classObj).map(key => {
      classObj[key]
        ? this.element.nativeElement.classList.add(key)
        : this.element.nativeElement.classList.remove(key);

    })
  }
}
