import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'advantages'
})
export class AdvantagesPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length <= 95) {
      return value;
    } else {
      return  value.slice(0, 96) + '...';
    }
  }
}
