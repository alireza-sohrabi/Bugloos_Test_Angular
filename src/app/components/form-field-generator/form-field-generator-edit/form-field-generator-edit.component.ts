import { FormService } from './../services/form.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormModel } from '../models/form-model';
import { FormFiledModel } from '../models/form-field-model';

@Component({
  selector: 'app-form-field-generator-edit',
  templateUrl: './form-field-generator-edit.component.html',
  styleUrls: ['./form-field-generator-edit.component.scss'],
})
export class FormFieldGeneratorEditComponent implements OnInit {
  constructor(private formService: FormService) {}
  model: FormModel = new FormModel();
  form: FormGroup;
  @Input() formId: string;
  // tslint:disable-next-line:no-output-native
  @Output() change = new EventEmitter<any>();
  @Input() show = false;
  @Output() showChange = new EventEmitter<boolean>();
  title = 'ساخت فرم جدید';
  populateForm(): void {
    this.form = new FormGroup({
      name: new FormControl(this.model.name, [Validators.required]),
      description: new FormControl(this.model.description),
      width: new FormControl(this.model.width, [Validators.required]),
    });
  }
  ngOnInit(): void {}
  populate(): void {
    if (this.formId) {
      this.formService.getFormById(this.formId).subscribe((res) => {
        if (res.isOk) {
          if (!res.result) {
            alert('فرم انتخابی یافت نشد.');
          }
          this.model = res.result;
          this.title = `ویرایش فرم ${res.result.name}`;
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
      alert('فرم را کامل کنید');
      return;
    }
    if (this.formId) {
      this.formService.updateForm(this.model, this.formId).subscribe((res) => {
        if (res.isOk) {
          alert(`با موفقیت ذخیره شد`);
          this.change.emit();
          this.close();
        } else {
          alert(`بروز خطا ${res.message}`);
        }
      });
    } else {
      this.formService.insertForm(this.model).subscribe((res) => {
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
