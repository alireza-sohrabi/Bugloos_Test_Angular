"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormFieldGeneratorEditComponent = void 0;
var core_1 = require("@angular/core");
var FormFieldGeneratorEditComponent = /** @class */ (function () {
    function FormFieldGeneratorEditComponent() {
    }
    FormFieldGeneratorEditComponent.prototype.ngOnInit = function () { };
    FormFieldGeneratorEditComponent = __decorate([
        core_1.Component({
            selector: 'app-form-field-generator-edit',
            templateUrl: './form-field-generator-edit.component.html',
            styleUrls: ['./form-field-generator-edit.component.scss']
        })
    ], FormFieldGeneratorEditComponent);
    return FormFieldGeneratorEditComponent;
}());
exports.FormFieldGeneratorEditComponent = FormFieldGeneratorEditComponent;
