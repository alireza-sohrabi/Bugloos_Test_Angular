"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NumberBoxComponent = void 0;
var core_1 = require("@angular/core");
var NumberBoxComponent = /** @class */ (function () {
    function NumberBoxComponent() {
        this.readOnly = false;
        this.disabled = false;
        this.placeholder = '';
        this.valueChange = new core_1.EventEmitter();
        this.required = false;
    }
    NumberBoxComponent.prototype.ngOnInit = function () { };
    NumberBoxComponent.prototype.onClear = function () {
        this.value = null;
        this.valueChange.emit(this.value);
    };
    __decorate([
        core_1.Input()
    ], NumberBoxComponent.prototype, "readOnly");
    __decorate([
        core_1.Input()
    ], NumberBoxComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], NumberBoxComponent.prototype, "placeholder");
    __decorate([
        core_1.Input()
    ], NumberBoxComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], NumberBoxComponent.prototype, "value");
    __decorate([
        core_1.Output()
    ], NumberBoxComponent.prototype, "valueChange");
    __decorate([
        core_1.Input()
    ], NumberBoxComponent.prototype, "required");
    NumberBoxComponent = __decorate([
        core_1.Component({
            selector: 'app-number-box',
            templateUrl: './number-box.component.html',
            styleUrls: ['./number-box.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], NumberBoxComponent);
    return NumberBoxComponent;
}());
exports.NumberBoxComponent = NumberBoxComponent;
