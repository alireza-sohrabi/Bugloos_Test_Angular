"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FormControlLabelDirective = void 0;
var core_1 = require("@angular/core");
var FormControlLabelDirective = /** @class */ (function () {
    function FormControlLabelDirective(el) {
        this.el = el;
        debugger;
    }
    FormControlLabelDirective.prototype.ngOnChanges = function (changes) {
        debugger;
        var label = this.el.nativeElement;
        if (this.innerHTML) {
            label.parentElement.style.marginTop = '20px';
        }
        else {
            label.parentElement.style.marginTop = '0';
        }
    };
    __decorate([
        core_1.Input()
    ], FormControlLabelDirective.prototype, "innerHTML");
    FormControlLabelDirective = __decorate([
        core_1.Directive({
            // tslint:disable-next-line:directive-selector
            selector: 'label'
        })
    ], FormControlLabelDirective);
    return FormControlLabelDirective;
}());
exports.FormControlLabelDirective = FormControlLabelDirective;
