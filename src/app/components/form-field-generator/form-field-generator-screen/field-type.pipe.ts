import { FormFieldService } from './../services/form-field.service';
import { FormFieldTypes } from './../models/form-field-model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldType',
})
export class FieldTypePipe implements PipeTransform {
  constructor(private formFieldService: FormFieldService) {}
  transform(value: FormFieldTypes, ...args: any[]): any {
    const types = this.formFieldService.getFieldTypes();
    const type = types.find((w) => w.value === value);
    return type?.title ?? null;
  }
}
