import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowNav]'
})
export class ShowNavDirective {

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
    this.el.nativeElement.parentElement.children[2].classList.remove("show");

  }

  openNav() {
    this.el.nativeElement.parentElement.children[2].classList.add("show");
  }
  constructor(private el: ElementRef) { }

}
