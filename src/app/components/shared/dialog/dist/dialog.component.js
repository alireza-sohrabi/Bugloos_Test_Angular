"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DialogComponent = void 0;
var core_1 = require("@angular/core");
var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.height = 'auto';
        this.width = 450;
        this.maxWidth = '100%';
        this.overflow = 'unset';
        this._show = false;
        this.showChange = new core_1.EventEmitter();
    }
    Object.defineProperty(DialogComponent.prototype, "show", {
        get: function () {
            return this._show;
        },
        set: function (value) {
            if (value === true) {
                this.open();
            }
            else if (value === false) {
                this.close();
            }
        },
        enumerable: false,
        configurable: true
    });
    DialogComponent.prototype.ngOnInit = function () { };
    DialogComponent.prototype.toggle = function () {
        if (this.show) {
            this.close();
        }
        else {
            this.open();
        }
    };
    DialogComponent.prototype.open = function () {
        this._show = true;
        this.showChange.emit(this.show);
        this.appendToContainer();
    };
    DialogComponent.prototype.close = function () {
        var _this = this;
        if (this.elDialog) {
            document.body.click();
            var el = this.anim.nativeElement;
            el.classList.add('close');
            setTimeout(function () {
                _this._show = false;
                _this.showChange.emit(_this.show);
            }, 520);
        }
    };
    DialogComponent.prototype.appendToContainer = function () {
        var _this = this;
        setTimeout(function () {
            var container = document.documentElement;
            container.appendChild(_this.elDialog.nativeElement);
        }, 0);
    };
    __decorate([
        core_1.ViewChild('elDialog')
    ], DialogComponent.prototype, "elDialog");
    __decorate([
        core_1.ViewChild('anim')
    ], DialogComponent.prototype, "anim");
    __decorate([
        core_1.Input()
    ], DialogComponent.prototype, "height");
    __decorate([
        core_1.Input()
    ], DialogComponent.prototype, "width");
    __decorate([
        core_1.Input()
    ], DialogComponent.prototype, "maxWidth");
    __decorate([
        core_1.Input()
    ], DialogComponent.prototype, "overflow");
    __decorate([
        core_1.Input()
    ], DialogComponent.prototype, "show");
    __decorate([
        core_1.Output()
    ], DialogComponent.prototype, "showChange");
    DialogComponent = __decorate([
        core_1.Component({
            selector: 'app-dialog',
            templateUrl: './dialog.component.html',
            styleUrls: ['./dialog.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], DialogComponent);
    return DialogComponent;
}());
exports.DialogComponent = DialogComponent;
