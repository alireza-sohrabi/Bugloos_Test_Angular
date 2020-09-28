"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TextAreaComponent = void 0;
var core_1 = require("@angular/core");
var TextAreaComponent = /** @class */ (function () {
    function TextAreaComponent() {
        this.initHeight = 50;
        this.disabled = false;
        this.placeholder = '';
        this.valueChange = new core_1.EventEmitter();
    }
    TextAreaComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], TextAreaComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], TextAreaComponent.prototype, "value");
    __decorate([
        core_1.Input()
    ], TextAreaComponent.prototype, "initHeight");
    __decorate([
        core_1.Input()
    ], TextAreaComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], TextAreaComponent.prototype, "placeholder");
    __decorate([
        core_1.Output()
    ], TextAreaComponent.prototype, "valueChange");
    TextAreaComponent = __decorate([
        core_1.Component({
            selector: 'app-text-area',
            templateUrl: './text-area.component.html',
            styleUrls: ['./text-area.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], TextAreaComponent);
    return TextAreaComponent;
}());
exports.TextAreaComponent = TextAreaComponent;
