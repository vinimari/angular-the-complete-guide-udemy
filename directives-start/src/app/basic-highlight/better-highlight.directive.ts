import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defautColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'trasparent'; 

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defautColor; 
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor; 
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
  //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent'); 
    this.backgroundColor = this.defautColor;
  }
}
