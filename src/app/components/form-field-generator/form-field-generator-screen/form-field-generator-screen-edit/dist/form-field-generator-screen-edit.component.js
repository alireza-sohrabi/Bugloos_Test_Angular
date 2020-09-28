"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormFieldGeneratorScreenEditComponent = void 0;
var form_field_model_1 = require("./../../models/form-field-model");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormFieldGeneratorScreenEditComponent = /** @class */ (function () {
    function FormFieldGeneratorScreenEditComponent(formFieldService) {
        this.formFieldService = formFieldService;
        this.model = new form_field_model_1.FormFiledModel();
        this.fieldTypeSource = [];
        // tslint:disable-next-line:no-output-native
        this.change = new core_1.EventEmitter();
        this.show = false;
        this.showChange = new core_1.EventEmitter();
        this.title = 'ساخت فیلد جدید';
    }
    FormFieldGeneratorScreenEditComponent.prototype.populateForm = function () {
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(this.model.name, [forms_1.Validators.required]),
            description: new forms_1.FormControl(this.model.description),
            fieldType: new forms_1.FormControl(this.model.fieldType, [forms_1.Validators.required]),
            lName: new forms_1.FormControl(this.model.lName, [forms_1.Validators.required]),
            required: new forms_1.FormControl(this.model.required)
        });
    };
    FormFieldGeneratorScreenEditComponent.prototype.ngOnInit = function () {
        this.fieldTypeSource = this.formFieldService.getFieldTypes();
    };
    FormFieldGeneratorScreenEditComponent.prototype.populate = function () {
        var _this = this;
        if (this.fieldId) {
            this.formFieldService
                .getFieldById(this.formId, this.fieldId)
                .subscribe(function (res) {
                if (res.isOk) {
                    if (!res.result) {
                        alert('فیلد انتخابی یافت نشد.');
                    }
                    _this.model = res.result;
                    _this.title = "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0641\u06CC\u0644\u062F " + res.result.name;
                    _this.populateForm();
                }
                else {
                    console.error(res.message);
                }
            });
        }
        else {
            this.populateForm();
        }
    };
    FormFieldGeneratorScreenEditComponent.prototype.open = function () {
        this.show = true;
        this.showChange.emit(true);
        this.populate();
    };
    FormFieldGeneratorScreenEditComponent.prototype.onSave = function () {
        var _this = this;
        if (!this.form.valid) {
            alert('فیلد را کامل کنید');
            return;
        }
        if (this.fieldId) {
            this.formFieldService
                .updateField(this.model, this.formId, this.fieldId)
                .subscribe(function (res) {
                if (res.isOk) {
                    alert("\u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F");
                    _this.change.emit();
                    _this.close();
                }
                else {
                    alert("\u0628\u0631\u0648\u0632 \u062E\u0637\u0627 " + res.message);
                }
            });
        }
        else {
            this.formFieldService
                .insertField(this.model, this.formId)
                .subscribe(function (res) {
                if (res.isOk) {
                    alert("\u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F");
                    _this.change.emit();
                    _this.close();
                }
                else {
                    alert("\u0628\u0631\u0648\u0632 \u062E\u0637\u0627 " + res.message);
                }
            });
        }
    };
    FormFieldGeneratorScreenEditComponent.prototype.close = function () {
        this.show = false;
        this.showChange.emit(this.show);
    };
    __decorate([
        core_1.Input()
    ], FormFieldGeneratorScreenEditComponent.prototype, "formId");
    __decorate([
        core_1.Input()
    ], FormFieldGeneratorScreenEditComponent.prototype, "fieldId");
    __decorate([
        core_1.Output()
    ], FormFieldGeneratorScreenEditComponent.prototype, "change");
    __decorate([
        core_1.Input()
    ], FormFieldGeneratorScreenEditComponent.prototype, "show");
    __decorate([
        core_1.Output()
    ], FormFieldGeneratorScreenEditComponent.prototype, "showChange");
    FormFieldGeneratorScreenEditComponent = __decorate([
        core_1.Component({
            selector: 'app-form-field-generator-screen-edit',
            templateUrl: './form-field-generator-screen-edit.component.html',
            styleUrls: ['./form-field-generator-screen-edit.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], FormFieldGeneratorScreenEditComponent);
    return FormFieldGeneratorScreenEditComponent;
}());
exports.FormFieldGeneratorScreenEditComponent = FormFieldGeneratorScreenEditComponent;
