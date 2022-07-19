import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    !condition ? this.viewRef.createEmbeddedView(this.templateRef) : this.viewRef.clear();  
  }

  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

}
