import { ResultObjectModel } from './../models/result-object-model';
import { FormModel } from '../models/form-model';
import { FormFiledModel } from '../models/form-field-model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
@Injectable({
  providedIn: 'root',
})
export class FormService {
  private mainUrl = 'form-filed';
  constructor() {}
  getFormFieldsById(
    formId: string
  ): Observable<ResultObjectModel<FormFiledModel[]>> {
    const result = new ResultObjectModel<FormFiledModel[]>();

    try {
      const onDb = localStorage[this.mainUrl];
      if (onDb) {
        const g = JSON.parse(onDb) as FormModel[];
        const form = g.find((w) => w.id === formId);
        if (form) {
          result.result = form.formFields;
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
  getForms(): Observable<ResultObjectModel<FormModel[]>> {
    const result = new ResultObjectModel<FormModel[]>();

    try {
      const onDb = localStorage[this.mainUrl];
      if (onDb) {
        result.result = JSON.parse(onDb) as FormModel[];
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
  getFormById(formId: string): Observable<ResultObjectModel<FormModel>> {
    const result = new ResultObjectModel<FormModel>();
    try {
      const onDb = localStorage[this.mainUrl];
      let items: FormModel[];
      if (!onDb) {
        result.result = null;
      } else {
        items = JSON.parse(onDb) as FormModel[];
        if (items) {
          result.result = items.find((w) => w.id === formId);
          return of(result);
        }
      }
      result.result = null;
      return of(result);
    } catch (error) {
      result.isOk = false;
      result.message = error;
      return of(result);
    }
  }
  insertForm(model: FormModel): Observable<ResultObjectModel<string>> {
    const result = new ResultObjectModel<string>();
    try {
      if (!model.id) {
        model.id = uuid();
      }
      const onDb = localStorage[this.mainUrl];
      let items: any;
      if (!onDb) {
        items = [model];
      } else {
        items = JSON.parse(onDb) as FormModel[];
        items.push(model);
      }
      localStorage[this.mainUrl] = JSON.stringify(items);
      return of(result);
    } catch (error) {
      result.isOk = false;
      result.message = error;
      return of(result);
    }
  }
  updateForm(
    model: FormModel,
    formId: string
  ): Observable<ResultObjectModel<string>> {
    const result = new ResultObjectModel<string>();
    try {
      debugger;
      const onDb = localStorage[this.mainUrl];
      let items: FormModel[];
      if (!onDb) {
        items = [model];
      } else {
        items = JSON.parse(onDb) as FormModel[];
        const itemIndex = items.findIndex((w) => w.id === formId);
        if (itemIndex !== -1) {
          items.splice(itemIndex, 1);
          items.unshift(model);
        } else {
          result.isOk = false;
          result.message = 'فرم یافت نشد';
          return of(result);
        }
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
