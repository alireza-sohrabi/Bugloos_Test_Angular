import { FormValidatorDirective } from './form-validator/form-validator.directive';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './text-box/text-box.component';
import {
  FormControlDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NumberBoxComponent } from './number-box/number-box.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { GridComponent } from './grid/grid.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogHeaderDirective } from './dialog/dialog-header.directive';
import { DialogBodyDirective } from './dialog/dialog-body.directive';
import { DialogFooterDirective } from './dialog/dialog-footer.directive';
@NgModule({
  declarations: [
    TextBoxComponent,
    NumberBoxComponent,
    DropDownComponent,
    DropDownListComponent,
    DatePickerComponent,
    TextAreaComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    GridComponent,
    DialogComponent,
    DialogHeaderDirective,
    DialogBodyDirective,
    DialogFooterDirective,
    FormValidatorDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TextBoxComponent,
    NumberBoxComponent,
    DropDownComponent,
    DropDownListComponent,
    DatePickerComponent,
    TextAreaComponent,
    CheckBoxComponent,
    RadioButtonComponent,
    GridComponent,
    DialogComponent,
    DialogHeaderDirective,
    DialogBodyDirective,
    DialogFooterDirective,
    FormValidatorDirective,
    FormControlDirective,
  ],
})
export class SharedModule {}
