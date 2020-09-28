"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormService = void 0;
var result_object_model_1 = require("./../models/result-object-model");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var uuid_1 = require("uuid");
var FormService = /** @class */ (function () {
    function FormService() {
        this.mainUrl = 'form-filed';
    }
    FormService.prototype.getFormFieldsById = function (formId) {
        var result = new result_object_model_1.ResultObjectModel();
        try {
            var onDb = localStorage[this.mainUrl];
            if (onDb) {
                var g = JSON.parse(onDb);
                var form = g.find(function (w) { return w.id === formId; });
                if (form) {
                    result.result = form.formFields;
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
    FormService.prototype.getForms = function () {
        var result = new result_object_model_1.ResultObjectModel();
        try {
            var onDb = localStorage[this.mainUrl];
            if (onDb) {
                result.result = JSON.parse(onDb);
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
    FormService.prototype.getFormById = function (formId) {
        var result = new result_object_model_1.ResultObjectModel();
        try {
            var onDb = localStorage[this.mainUrl];
            var items = void 0;
            if (!onDb) {
                result.result = null;
            }
            else {
                items = JSON.parse(onDb);
                if (items) {
                    result.result = items.find(function (w) { return w.id === formId; });
                    return rxjs_1.of(result);
                }
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
    FormService.prototype.insertForm = function (model) {
        var result = new result_object_model_1.ResultObjectModel();
        try {
            if (!model.id) {
                model.id = uuid_1.v4();
            }
            var onDb = localStorage[this.mainUrl];
            var items = void 0;
            if (!onDb) {
                items = [model];
            }
            else {
                items = JSON.parse(onDb);
                items.push(model);
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
    FormService.prototype.updateForm = function (model, formId) {
        var result = new result_object_model_1.ResultObjectModel();
        try {
            debugger;
            var onDb = localStorage[this.mainUrl];
            var items = void 0;
            if (!onDb) {
                items = [model];
            }
            else {
                items = JSON.parse(onDb);
                var itemIndex = items.findIndex(function (w) { return w.id === formId; });
                if (itemIndex !== -1) {
                    items.splice(itemIndex, 1);
                    items.unshift(model);
                }
                else {
                    result.isOk = false;
                    result.message = 'فرم یافت نشد';
                    return rxjs_1.of(result);
                }
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
    FormService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FormService);
    return FormService;
}());
exports.FormService = FormService;
