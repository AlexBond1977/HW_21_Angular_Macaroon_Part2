import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

    transform(value: string): string {
        if (!value || value.length !== 12) {
            return '';
        }
        const countryCode = '+' + value.substring(0, 3);
        const operatorCode = value.substring(3, 5);
        const firstPart = value.substring(5, 8);
        const secondPart = value.substring(8, 10);
        const thirdPart = value.substring(10);

        return `${countryCode} (${operatorCode}) ${firstPart}-${secondPart}-${thirdPart}`;
    }
}
