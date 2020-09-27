import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldRequired',
})
export class FieldRequiredPipe implements PipeTransform {
  transform(value: boolean, ...args: any[]): any {
    if (value) {
      return `<div class="text-danger">ضروری</div>`;
    }
    return `<div class="text-warning">غیرضروری</div>`;
  }
}
