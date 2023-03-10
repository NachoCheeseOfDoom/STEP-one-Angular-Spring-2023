import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCaseCustom'
})
export class UpperCaseCustomPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.toUpperCase();
  }

}
