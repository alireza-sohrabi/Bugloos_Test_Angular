import { FormFiledModel } from './../../models/form-field-model';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormModel } from '../../models/form-model';
import { FormFieldService } from '../../services/form-field.service';

@Component({
  selector: 'app-form-field-generator-screen-edit',
  templateUrl: './form-field-generator-screen-edit.component.html',
  styleUrls: ['./form-field-generator-screen-edit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldGeneratorScreenEditComponent implements OnInit {
  constructor(private formFieldService: FormFieldService) {}
  model: FormFiledModel = new FormFiledModel();
  form: FormGroup;
  fieldTypeSource: any[] = [];
  @Input() formId: string;
  @Input() fieldId: string;
  // tslint:disable-next-line:no-output-native
  @Output() change = new EventEmitter<any>();
  @Input() show = false;
  @Output() showChange = new EventEmitter<boolean>();
  title = 'ساخت فیلد جدید';
  populateForm(): void {
    this.form = new FormGroup({
      name: new FormControl(this.model.name, [Validators.required]),
      description: new FormControl(this.model.description),
      fieldType: new FormControl(this.model.fieldType, [Validators.required]),
      lName: new FormControl(this.model.lName, [Validators.required]),
      required: new FormControl(this.model.required),
    });
  }
  ngOnInit(): void {
    debugger;
    this.fieldTypeSource = this.formFieldService.getFieldTypes();
  }
  populate(): void {
    if (this.fieldId) {
      this.formFieldService
        .getFieldById(this.formId, this.fieldId)
        .subscribe((res) => {
          if (res.isOk) {
            if (!res.result) {
              alert('فیلد انتخابی یافت نشد.');
            }
            this.model = res.result;
            this.title = `ویرایش فیلد ${res.result.name}`;
            this.populateForm();
          } else {
            console.error(res.message);
          }
        });
    } else {
      this.populateForm();
    }
  }
  open(): void {
    this.show = true;
    this.showChange.emit(true);
    this.populate();
  }
  onSave(): void {
    if (!this.form.valid) {
      alert('فیلد را کامل کنید');
      return;
    }
    if (this.fieldId) {
      this.formFieldService
        .updateField(this.model, this.formId, this.fieldId)
        .subscribe((res) => {
          if (res.isOk) {
            alert(`با موفقیت ذخیره شد`);
            this.change.emit();
            this.close();
          } else {
            alert(`بروز خطا ${res.message}`);
          }
        });
    } else {
      this.formFieldService
        .insertField(this.model, this.formId)
        .subscribe((res) => {
          if (res.isOk) {
            alert(`با موفقیت ذخیره شد`);
            this.change.emit();
            this.close();
          } else {
            alert(`بروز خطا ${res.message}`);
          }
        });
    }
  }
  close(): void {
    this.show = false;
    this.showChange.emit(this.show);
  }
}
