import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {
  private toggle = false;
  @HostListener('click') onClick() {
    if (this.toggle) {
      this.toggle = false
      this.close()
    }
    else {
      this.toggle = true;
      this.openNav();
    }

  }
  close() {
    this.el.nativeElement.parentElement.children[1].classList.remove("show");
  }

  openNav() {
    this.el.nativeElement.parentElement.children[1].classList.add("show");
  }
  constructor(private el: ElementRef) { }

}
