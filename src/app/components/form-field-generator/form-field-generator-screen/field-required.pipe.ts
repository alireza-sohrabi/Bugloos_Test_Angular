import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldRequired',
})
export class FieldRequiredPipe implements PipeTransform {
  transform(value: boolean, ...args: any[]): any {
    if (value) {
      return `<div class="text-danger">*</div>`;
    }
    return `<div class="text-warning"></div>`;
  }
}
