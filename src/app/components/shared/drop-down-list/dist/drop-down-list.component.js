"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DropDownListComponent = void 0;
var core_1 = require("@angular/core");
var DropDownListComponent = /** @class */ (function () {
    function DropDownListComponent() {
        this.displayValue = '';
        this.selectItem = new core_1.EventEmitter();
        this.isMulti = false;
        this.source = [];
        this.valueChange = new core_1.EventEmitter();
        this.displayMember = 'title';
        this.valueMember = 'value';
    }
    DropDownListComponent.prototype.ngOnInit = function () { };
    DropDownListComponent.prototype.setConent = function (content) {
        this.displayValue = content;
    };
    DropDownListComponent.prototype.close = function () {
        this.drp.close();
    };
    DropDownListComponent.prototype.onSelectItem = function (item) {
        this.setConent(item[this.displayMember]);
        this.value = item[this.valueMember];
        this.valueChange.emit(this.value);
        this.selectItem.emit(item);
        this.close();
    };
    DropDownListComponent.prototype.setContentById = function (id) {
        var _this = this;
        var item = this.source.find(function (w) { return w[_this.valueMember] === id; });
        if (item) {
            this.setConent(item[this.displayMember]);
        }
    };
    DropDownListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.value && changes.value.currentValue) {
            this.setContentById(changes.value.currentValue);
        }
    };
    DropDownListComponent.prototype.onClear = function () {
        this.value = null;
        this.valueChange.emit(this.value);
        this.close();
    };
    __decorate([
        core_1.ViewChild('drp')
    ], DropDownListComponent.prototype, "drp");
    __decorate([
        core_1.Output()
    ], DropDownListComponent.prototype, "selectItem");
    __decorate([
        core_1.Input()
    ], DropDownListComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], DropDownListComponent.prototype, "isMulti");
    __decorate([
        core_1.Input()
    ], DropDownListComponent.prototype, "source");
    __decorate([
        core_1.Input()
    ], DropDownListComponent.prototype, "value");
    __decorate([
        core_1.Output()
    ], DropDownListComponent.prototype, "valueChange");
    __decorate([
        core_1.Input()
    ], DropDownListComponent.prototype, "displayMember");
    __decorate([
        core_1.Input()
    ], DropDownListComponent.prototype, "valueMember");
    DropDownListComponent = __decorate([
        core_1.Component({
            selector: 'app-drop-down-list',
            templateUrl: './drop-down-list.component.html',
            styleUrls: ['./drop-down-list.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], DropDownListComponent);
    return DropDownListComponent;
}());
exports.DropDownListComponent = DropDownListComponent;
