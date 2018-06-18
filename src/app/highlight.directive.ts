import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private elref: ElementRef) { }

  ngOnInit(){
    this.elref.nativeElement.style.backgroundColor = 'blue';
  }

}
