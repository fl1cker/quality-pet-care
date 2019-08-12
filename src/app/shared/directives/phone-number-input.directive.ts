import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
    selector: '[phoneNumberInput]'
})
export class PhoneNumberInputDirective {
    @Output() triggerRefresh = new EventEmitter<string>();

    constructor(private el: ElementRef) { }

    @HostListener('input', ['$event'])
    updateValue() {
        
        let phoneValue = this.el.nativeElement.value;
        console.log('input = ', phoneValue);
        if(!phoneValue) { return ''; }

        phoneValue = removePhoneFormatting(phoneValue);
        console.log('without formatting = ', phoneValue);
        const areaCode = phoneValue.substring(0,3);
        const middle = phoneValue.substring(3,6);
        const end = phoneValue.substring(6,10);

        let returnValue = '';

        if(phoneValue.length > 6) { returnValue = `(${areaCode}) ${middle}-${end}`;}
        else if(phoneValue.length >= 3) { returnValue = `(${areaCode}) ${middle}`;}
        else { returnValue = `(${areaCode}`;}
        console.log('return value = ', returnValue);
        this.triggerRefresh.emit(returnValue);
    }
}

function removePhoneFormatting(value: string) {
    return value.replace(/\D/g, '');
}