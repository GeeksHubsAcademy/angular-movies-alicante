import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[getfocus]',
})
export class AutofocusDirective implements OnInit{
  constructor(private el: ElementRef) {



  }
  ngOnInit(){
    this.el.nativeElement.focus();
    console.log('focused', this.el.nativeElement);
  }
}
