"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RadioButtonComponent = void 0;
var core_1 = require("@angular/core");
var uuid_1 = require("uuid");
var RadioButtonComponent = /** @class */ (function () {
    function RadioButtonComponent() {
        this.value = false;
        this.valueChange = new core_1.EventEmitter();
        this.id = uuid_1.v4();
    }
    RadioButtonComponent.prototype.onChange = function (ev) {
        this.value = ev.target['checked'];
        this.valueChange.emit(this.value);
    };
    RadioButtonComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], RadioButtonComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], RadioButtonComponent.prototype, "value");
    __decorate([
        core_1.Input()
    ], RadioButtonComponent.prototype, "name");
    __decorate([
        core_1.Output()
    ], RadioButtonComponent.prototype, "valueChange");
    RadioButtonComponent = __decorate([
        core_1.Component({
            selector: 'app-radio-button',
            templateUrl: './radio-button.component.html',
            styleUrls: ['./radio-button.component.scss']
        })
    ], RadioButtonComponent);
    return RadioButtonComponent;
}());
exports.RadioButtonComponent = RadioButtonComponent;
