"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormFieldGeneratorScreenComponent = void 0;
var form_field_model_1 = require("./../models/form-field-model");
var core_1 = require("@angular/core");
var FormFieldGeneratorScreenComponent = /** @class */ (function () {
    function FormFieldGeneratorScreenComponent(formFieldService, route) {
        this.formFieldService = formFieldService;
        this.route = route;
        this.draging = false;
        this.selectedItem = null;
        this.enterToThisItem = null;
        this.showDialog = false;
        this.fields = [];
    }
    FormFieldGeneratorScreenComponent.prototype.ngOnInit = function () {
        this.formId = this.route.snapshot.params.formId;
        this.populate();
    };
    FormFieldGeneratorScreenComponent.prototype.onAddField = function () {
        this.fieldId = null;
        this.openDialog();
    };
    FormFieldGeneratorScreenComponent.prototype.onEditField = function () {
        var _a, _b, _c, _d;
        this.fieldId = (_d = (_c = (_b = (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.model) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : null) !== null && _d !== void 0 ? _d : null;
        this.openDialog();
    };
    FormFieldGeneratorScreenComponent.prototype.populate = function () {
        var _this = this;
        this.formFieldService.getFormFieldsById(this.formId).subscribe(function (res) {
            if (res.isOk) {
                _this.fields = res.result;
                console.dir(_this.fields);
            }
        });
    };
    FormFieldGeneratorScreenComponent.prototype.openDialog = function () {
        var _this = this;
        this.showDialog = false;
        setTimeout(function () {
            _this.showDialog = true;
            setTimeout(function () {
                _this.elEditField.open();
            }, 60);
        }, 0);
    };
    FormFieldGeneratorScreenComponent.prototype.onMouseMove = function (ev) {
        if (this.selectedItem) {
            var body = this.elForMove.nativeElement;
            body.style.left = ev.pageX + 30 + "px";
            body.style.top = ev.pageY - 20 + "px";
            this.draging = true;
            window.document.documentElement.style.cursor = 'move';
        }
        else {
        }
    };
    FormFieldGeneratorScreenComponent.prototype.onMouseDown = function (ev, item) {
        this.selectedItem = { el: ev.currentTarget, model: item };
        var body = this.elForMove.nativeElement;
        body.innerHTML = null;
        body.innerHTML = this.selectedItem.el.outerHTML;
    };
    FormFieldGeneratorScreenComponent.prototype.onMouseUp = function (ev) {
        this.selectedItem = null;
        this.draging = false;
        window.document.documentElement.style.cursor = '';
        if (this.enterToThisItem) {
            this.enterToThisItem['showFake'] = false;
        }
    };
    FormFieldGeneratorScreenComponent.prototype.onMouseLeave = function (ev, col) {
        col['showFake'] = false;
    };
    FormFieldGeneratorScreenComponent.prototype.onMouseEnter = function (ev, col) {
        var _a;
        if (this.draging && ((_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.model) !== col) {
            this.enterToThisItem = col;
            col['showFake'] = true;
        }
    };
    FormFieldGeneratorScreenComponent.prototype.ngAfterViewInit = function () {
        // document.documentElement.appendChild(this.elForMove.nativeElement);
    };
    Object.defineProperty(FormFieldGeneratorScreenComponent.prototype, "fieldTypes", {
        get: function () {
            return form_field_model_1.FormFieldTypes;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.ViewChild('elEditField')
    ], FormFieldGeneratorScreenComponent.prototype, "elEditField");
    __decorate([
        core_1.ViewChild('elForMove')
    ], FormFieldGeneratorScreenComponent.prototype, "elForMove");
    __decorate([
        core_1.HostListener('body:mousemove', ['$event'])
    ], FormFieldGeneratorScreenComponent.prototype, "onMouseMove");
    __decorate([
        core_1.HostListener('body:mouseup', ['$event'])
    ], FormFieldGeneratorScreenComponent.prototype, "onMouseUp");
    FormFieldGeneratorScreenComponent = __decorate([
        core_1.Component({
            selector: 'app-form-field-generator-screen',
            templateUrl: './form-field-generator-screen.component.html',
            styleUrls: ['./form-field-generator-screen.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], FormFieldGeneratorScreenComponent);
    return FormFieldGeneratorScreenComponent;
}());
exports.FormFieldGeneratorScreenComponent = FormFieldGeneratorScreenComponent;
