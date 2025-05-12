import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number): string {
      const formattedValue = value.toFixed(2);
      return `${formattedValue} руб.`;
  }

}
