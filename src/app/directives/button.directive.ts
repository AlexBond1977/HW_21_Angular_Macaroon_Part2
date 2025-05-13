import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[bgButton]'
})
export class ButtonDirective implements OnInit {
    @Input() public bgButtonColorMouseover: string = 'yellow';
    @Input() public bgButtonColorFocus: string = 'white';
    private _background: string = '';

    constructor(private element: ElementRef) {
    }
    @HostBinding('style.background')
    public get getBackground() {
        return this._background;
    }

    @HostListener('mouseover')
    private onMouseover() {
        this._background = 'none';
        this.changeElementBgColor(this.bgButtonColorMouseover);
    }
    @HostListener('mouseout')
    private onMouseout() {
        this._background = this.element.nativeElement.background;
    }

    @HostListener('focus')
    private onFocus() {
        this.changeElementBgColor(this.bgButtonColorFocus);
    }

    protected changeElementBgColor(color: string) {
        this._background = color;
    }

    ngOnInit() {
    }
}
