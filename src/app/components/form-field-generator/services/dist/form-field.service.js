"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormFieldService = void 0;
var form_field_model_1 = require("./../models/form-field-model");
var result_object_model_1 = require("./../models/result-object-model");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var uuid_1 = require("uuid");
var natural_orderby_1 = require("natural-orderby");
var group_array_1 = require("group-array");
var FormFieldService = /** @class */ (function () {
    function FormFieldService() {
        this.mainUrl = 'form-filed';
    }
    FormFieldService.prototype.getFieldTypes = function () {
        return [
            { title: 'رشته متنی', value: form_field_model_1.FormFieldTypes.Text },
            { title: 'رشته متنی چندخطی', value: form_field_model_1.FormFieldTypes.TextArea },
            { title: 'انتخاب از لیست', value: form_field_model_1.FormFieldTypes.SelectBox },
            { title: 'رشته عددی', value: form_field_model_1.FormFieldTypes.Number },
            { title: 'رادیو', value: form_field_model_1.FormFieldTypes.RadioButton },
            { title: 'چک‌باکس', value: form_field_model_1.FormFieldTypes.CheckBox },
            { title: 'تاریخ', value: form_field_model_1.FormFieldTypes.Date },
            { title: 'بازه تاریخ', value: form_field_model_1.FormFieldTypes.DateRang },
        ];
    };
    FormFieldService.prototype.getFormFieldsById = function (formId) {
        var result = new result_object_model_1.ResultObjectModel();
        try {
            var onDb = localStorage[this.mainUrl];
            if (onDb) {
                var g = JSON.parse(onDb);
                var form = g.find(function (w) { return w.id === formId; });
                if (form) {
                    var fields = form.formFields;
                    fields = natural_orderby_1.orderBy(fields, function (v) { return v.rowIndex; }, 'asc');
                    var f_1 = [];
                    var groupedByRow = group_array_1["default"](fields, 'rowIndex');
                    Object.values(groupedByRow).forEach(function (row) {
                        var _a, _b;
                        row = natural_orderby_1.orderBy(row, function (v) { return v.colIndex; }, 'asc');
                        f_1.push({ index: (_b = (_a = row[0]) === null || _a === void 0 ? void 0 : _a.rowIndex) !== null && _b !== void 0 ? _b : 0, cols: row });
                    });
                    result.result = f_1;
                }
                return rxjs_1.of(result);
            }
            result.result = [];
            return rxjs_1.of(result);
        }
        catch (error) {
            result.isOk = false;
            result.message = error;
            return rxjs_1.of(result);
        }
    };
    FormFieldService.prototype.getFieldById = function (formId, fieldId) {
        var result = new result_object_model_1.ResultObjectModel();
        try {
            var onDb = localStorage[this.mainUrl];
            if (onDb) {
                var g = JSON.parse(onDb);
                var form = g.find(function (w) { return w.id === formId; });
                if (form) {
                    var field = form.formFields.find(function (w) { return w.id === fieldId; });
                    result.result = field;
                }
                return rxjs_1.of(result);
            }
            result.result = null;
            return rxjs_1.of(result);
        }
        catch (error) {
            result.isOk = false;
            result.message = error;
            return rxjs_1.of(result);
        }
    };
    FormFieldService.prototype.fieldNotFound = function (result) {
        result.isOk = false;
        result.message = 'فیلد یافت نشد';
        return rxjs_1.of(result);
    };
    FormFieldService.prototype.formNotFound = function (result) {
        result.isOk = false;
        result.message = 'فرم یافت نشد';
        return rxjs_1.of(result);
    };
    FormFieldService.prototype.insertField = function (model, formId) {
        var result = new result_object_model_1.ResultObjectModel();
        try {
            if (!model.id) {
                model.id = uuid_1.v4();
            }
            model.rowIndex = 0;
            model.colIndex = 0;
            var onDb = localStorage[this.mainUrl];
            var items = void 0;
            if (!onDb) {
                return this.formNotFound(result);
            }
            else {
                items = JSON.parse(onDb);
                var form = items.find(function (w) { return w.id === formId; });
                if (!form) {
                    return this.formNotFound(result);
                }
                var fields = form.formFields;
                if (!fields) {
                    fields = [];
                }
                else {
                    fields.forEach(function (f) {
                        f.colIndex = f.colIndex + 1;
                    });
                }
                fields.push(model);
            }
            localStorage[this.mainUrl] = JSON.stringify(items);
            return rxjs_1.of(result);
        }
        catch (error) {
            result.isOk = false;
            result.message = error;
            return rxjs_1.of(result);
        }
    };
    FormFieldService.prototype.updateField = function (model, formId, fieldId) {
        var result = new result_object_model_1.ResultObjectModel();
        try {
            var onDb = localStorage[this.mainUrl];
            var items = void 0;
            if (!onDb) {
                return this.formNotFound(result);
            }
            else {
                items = JSON.parse(onDb);
                var form_1 = items.find(function (w) { return w.id === formId; });
                if (!form_1) {
                    return this.formNotFound(result);
                }
                var fields = form_1.formFields;
                var fieldIndex = fields.findIndex(function (w) { return w.id === fieldId; });
                if (fieldIndex === -1) {
                    return this.fieldNotFound(result);
                }
                fields.splice(fieldIndex, 1);
                fields.push(model);
                form_1.formFields = fields;
                var formIndex = items.findIndex(function (w) { return w.id === form_1.id; });
                items.splice(formIndex, 1);
                items.push(form_1);
            }
            localStorage[this.mainUrl] = JSON.stringify(items);
            return rxjs_1.of(result);
        }
        catch (error) {
            result.isOk = false;
            result.message = error;
            return rxjs_1.of(result);
        }
    };
    FormFieldService.prototype.moveField = function (model, formId, rowIndex, colIndex) {
        model.rowIndex = rowIndex;
        model.colIndex = colIndex;
        debugger;
        return this.updateField(model, formId, model.id);
    };
    FormFieldService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FormFieldService);
    return FormFieldService;
}());
exports.FormFieldService = FormFieldService;
