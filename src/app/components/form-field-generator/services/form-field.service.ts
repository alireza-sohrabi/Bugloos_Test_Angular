import { FormFiledModel, FormFieldTypes } from './../models/form-field-model';
import { ResultObjectModel } from './../models/result-object-model';
import { FormModel } from '../models/form-model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { orderBy } from 'natural-orderby';
import groupBy from 'group-array';
@Injectable({
  providedIn: 'root',
})
export class FormFieldService {
  private mainUrl = 'form-filed';
  constructor() {}
  getFieldTypes(): any[] {
    return [
      { title: 'رشته متنی', value: FormFieldTypes.Text },
      { title: 'رشته متنی چندخطی', value: FormFieldTypes.TextArea },
      { title: 'انتخاب از لیست', value: FormFieldTypes.SelectBox },
      { title: 'رشته عددی', value: FormFieldTypes.Number },
      { title: 'رادیو', value: FormFieldTypes.RadioButton },
      { title: 'چک‌باکس', value: FormFieldTypes.CheckBox },
      { title: 'تاریخ', value: FormFieldTypes.Date },
      { title: 'بازه تاریخ', value: FormFieldTypes.DateRang },
    ];
  }
  getFormFieldsById(
    formId: string
  ): Observable<
    ResultObjectModel<{ index: number; cols: FormFiledModel[] }[]>
  > {
    const result = new ResultObjectModel<any>();

    try {
      const onDb = localStorage[this.mainUrl];
      if (onDb) {
        const g = JSON.parse(onDb) as FormModel[];
        const form = g.find((w) => w.id === formId);
        if (form) {
          let fields = form.formFields;
          fields = orderBy(fields, (v) => v.rowIndex, 'asc');
          const f: any[] = [];
          const groupedByRow = groupBy(fields, 'rowIndex');
          Object.values(groupedByRow).forEach((row: FormFiledModel[]) => {
            row = orderBy<FormFiledModel>(row, (v) => v.colIndex, 'asc');
            f.push({ index: row[0]?.rowIndex ?? 0, cols: row });
          });
          result.result = f;
        }
        return of(result);
      }
      result.result = [];
      return of(result);
    } catch (error) {
      result.isOk = false;
      result.message = error;
      return of(result);
    }
  }
  getFieldById(
    formId: string,
    fieldId: string
  ): Observable<ResultObjectModel<FormFiledModel>> {
    const result = new ResultObjectModel<FormFiledModel>();
    try {
      const onDb = localStorage[this.mainUrl];
      if (onDb) {
        const g = JSON.parse(onDb) as FormModel[];
        const form = g.find((w) => w.id === formId);
        if (form) {
          const field = form.formFields.find((w) => w.id === fieldId);
          result.result = field;
        }
        return of(result);
      }
      result.result = null;
      return of(result);
    } catch (error) {
      result.isOk = false;
      result.message = error;
      return of(result);
    }
  }
  private fieldNotFound(result): Observable<ResultObjectModel<any>> {
    result.isOk = false;
    result.message = 'فیلد یافت نشد';
    return of(result);
  }
  private formNotFound(result): Observable<ResultObjectModel<any>> {
    result.isOk = false;
    result.message = 'فرم یافت نشد';
    return of(result);
  }
  insertField(
    model: FormFiledModel,
    formId: string
  ): Observable<ResultObjectModel<any>> {
    debugger;
    const result = new ResultObjectModel<string>();
    try {
      if (!model.id) {
        model.id = uuid();
      }
      model.rowIndex = 0;
      model.colIndex = 0;
      const onDb = localStorage[this.mainUrl];
      let items: FormModel[];
      if (!onDb) {
        return this.formNotFound(result);
      } else {
        items = JSON.parse(onDb) as FormModel[];
        const form = items.find((w) => w.id === formId);
        if (!form) {
          return this.formNotFound(result);
        }
        let fields = form.formFields;
        if (!fields) {
          fields = [];
        } else {
          fields.forEach((f) => {
            f.colIndex = f.colIndex + 1;
          });
        }
        fields.push(model);
      }
      localStorage[this.mainUrl] = JSON.stringify(items);
      return of(result);
    } catch (error) {
      result.isOk = false;
      result.message = error;
      return of(result);
    }
  }
  updateField(
    model: FormFiledModel,
    formId: string,
    fieldId: string
  ): Observable<ResultObjectModel<any>> {
    const result = new ResultObjectModel<string>();
    try {
      const onDb = localStorage[this.mainUrl];
      let items: FormModel[];
      if (!onDb) {
        return this.formNotFound(result);
      } else {
        items = JSON.parse(onDb) as FormModel[];
        const form = items.find((w) => w.id === formId);
        if (!form) {
          return this.formNotFound(result);
        }
        const fields = form.formFields;
        let field = fields.find((w) => w.id === fieldId);
        if (!field) {
          return this.fieldNotFound(result);
        }
        field = model;
      }
      localStorage[this.mainUrl] = JSON.stringify(items);
      return of(result);
    } catch (error) {
      result.isOk = false;
      result.message = error;
      return of(result);
    }
  }
}
