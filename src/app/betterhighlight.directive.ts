import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {


  constructor(private renderer: Renderer2, private elref: ElementRef) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elref.nativeElement, 'background-color','red');
  }

  @HostListener('mouseenter') mouseover(event: Event) {
    this.renderer.setStyle(this.elref.nativeElement, 'background-color','red');
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    this.renderer.setStyle(this.elref.nativeElement, 'background-color','transparent');
  }

}
