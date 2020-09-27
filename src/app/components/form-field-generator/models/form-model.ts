import { FormFiledModel } from './form-field-model';
export class FormModel {
  id: string;
  name: string;
  description: string;
  formFields: FormFiledModel[] = [];
  width: any;
}
