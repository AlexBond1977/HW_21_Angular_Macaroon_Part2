import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[bgButton]'
})
export class ButtonDirective implements OnInit {
  @Input() bgButtonColorMouseover: string = 'yellow';
  @Input() bgButtonColorFocus: string = 'white';
  private _background: string = '';

  constructor(private element: ElementRef) {
  }
  @HostBinding('style.background')
  get getBackground() {
    return this._background;
  }

  @HostListener('mouseover')
  onMouseover() {
    this._background = 'none';
    this.changeElementBgColor(this.bgButtonColorMouseover);
  }
  @HostListener('mouseout')
  onMouseout() {
    this._background = this.element.nativeElement.background;
  }

  @HostListener('focus')
  onFocus() {
    this.changeElementBgColor(this.bgButtonColorFocus);
  }

  changeElementBgColor(color: string) {
    this._background = color;
  }

  ngOnInit() {
  }
}
