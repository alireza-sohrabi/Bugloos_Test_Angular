"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TextBoxComponent = void 0;
var core_1 = require("@angular/core");
var inputmask_1 = require("inputmask");
var TextBoxComponent = /** @class */ (function () {
    function TextBoxComponent() {
        this.readOnly = false;
        this.disabled = false;
        this.placeholder = '';
        this.mask = '';
        this.valueChange = new core_1.EventEmitter();
        this.required = false;
    }
    TextBoxComponent.prototype.ngOnInit = function () { };
    TextBoxComponent.prototype.onClear = function () {
        this.value = null;
        this.valueChange.emit(this.value);
    };
    TextBoxComponent.prototype.populateMask = function () {
        var _this = this;
        setTimeout(function () {
            var mask = new inputmask_1["default"](_this.mask);
            mask.mask(_this.elInput.nativeElement);
        }, 0);
    };
    TextBoxComponent.prototype.ngAfterViewInit = function () {
        this.populateMask();
    };
    __decorate([
        core_1.Input()
    ], TextBoxComponent.prototype, "readOnly");
    __decorate([
        core_1.Input()
    ], TextBoxComponent.prototype, "disabled");
    __decorate([
        core_1.Input()
    ], TextBoxComponent.prototype, "placeholder");
    __decorate([
        core_1.Input()
    ], TextBoxComponent.prototype, "width");
    __decorate([
        core_1.ViewChild('elInput')
    ], TextBoxComponent.prototype, "elInput");
    __decorate([
        core_1.Input()
    ], TextBoxComponent.prototype, "mask");
    __decorate([
        core_1.Input()
    ], TextBoxComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], TextBoxComponent.prototype, "value");
    __decorate([
        core_1.Output()
    ], TextBoxComponent.prototype, "valueChange");
    __decorate([
        core_1.Input()
    ], TextBoxComponent.prototype, "required");
    TextBoxComponent = __decorate([
        core_1.Component({
            selector: 'app-text-box',
            templateUrl: './text-box.component.html',
            styleUrls: ['./text-box.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], TextBoxComponent);
    return TextBoxComponent;
}());
exports.TextBoxComponent = TextBoxComponent;
