export class FormFiledModel {
  id: string;
  formId: string;
  name: string;
  lName: string;
  rowIndex = 0;
  colIndex = 0;
  fieldType: FormFieldTypes;
  description: string;
  required: boolean;
  regex: string;
}
export enum FormFieldTypes {
  Number,
  Text,
  TextArea,
  Date,
  DateRang,
  SelectBox,
  RadioButton,
  CheckBox,
}
