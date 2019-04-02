import { Directive, ElementRef, HostListener, Renderer2, HostBinding } from '@angular/core';


@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false; // Mới vô là false, tức là ko có class đó

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
        
    }

    @HostListener('click') toggleOpen(eventDate: Event) {
        // C3: Dùng thêm @HostBinding
        this.isOpen = ! this.isOpen;

        // C2: Dùng Renderer2
        // const ele = this.elementRef.nativeElement;
        // if (ele.classList.contains('open')) {
        //     this.renderer.removeClass(ele, 'open');
        // } else {
        //     this.renderer.addClass(ele, 'open');
        // }

        // C1
        // const ele = this.elementRef.nativeElement;
        // if (ele.classList.contains('open')) {
        //     ele.classList.remove('open');
        // } else {
        //     ele.classList.add('open');
        // }
    }

}