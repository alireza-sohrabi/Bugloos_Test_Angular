import { FormGroup } from '@angular/forms';
import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appFormValidator]',
})
export class FormValidatorDirective {
  constructor() {}
  private _value: any;
  @Input() name: string;
  @Input() appFormValidator: FormGroup;
  @Output() appFormValidatorChange = new EventEmitter<FormGroup>();
  @Input() set value(val: any) {
    const formGorup = this.appFormValidator;
    if (formGorup) {
      const ct = formGorup.controls[this.name];
      if (ct) {
        ct.setValue(val);
      }
    }
  }
  get value(): any {
    return this._value;
  }
}
