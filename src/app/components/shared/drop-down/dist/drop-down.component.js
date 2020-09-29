"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DropDownComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var uuid_1 = require("uuid");
var DropDownComponent = /** @class */ (function () {
    function DropDownComponent(el) {
        this.el = el;
        this.id = uuid_1.v4();
        this.disabled = false;
        this.containerSelector = 'html';
        this.drpHeight = 150;
        this.required = false;
        this.clear = new core_1.EventEmitter();
        this.scrollEvent = null;
        this.addCloseClass = false;
        this.showDrpWin = false;
        this.style = {};
    }
    DropDownComponent.prototype.setContent = function (content) {
        this.value = content;
    };
    DropDownComponent.prototype.ngOnInit = function () {
        this.addScrollEvent();
    };
    DropDownComponent.prototype.toggle = function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        if (this.showDrpWin === false) {
            this.closePrev();
            this.showDrpWin = true;
            setTimeout(function () {
                _this.setPosiotion().then(function () {
                    setTimeout(function () {
                        _this.addCloseClass = false;
                    }, 0);
                });
            }, 0);
        }
        else {
            this.close();
        }
    };
    DropDownComponent.prototype.close = function () {
        var _this = this;
        this.addCloseClass = true;
        setTimeout(function () {
            _this.showDrpWin = false;
            _this.style = { top: 0, width: 0 };
            _this.addCloseClass = false;
        }, 130);
    };
    DropDownComponent.prototype.setPosiotion = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.style = {};
            var refEl = _this.drpBox.nativeElement.querySelector('div');
            var htmls = document.querySelectorAll(_this.containerSelector);
            _this._container = htmls[htmls.length - 1];
            var refCoords = _this.getCoords(refEl);
            _this.style['left'] = refCoords.left + "px";
            _this.style['width'] = refEl.clientWidth + "px";
            _this.style['top'] = refCoords.top + refEl.clientHeight + 3 + "px";
            if (refCoords.bottom + _this.drpHeight >
                window.document.documentElement.clientHeight) {
                _this.style['top'] = refCoords.top - _this.drpHeight - 3 + "px";
            }
            _this._container.appendChild(_this.drpWin.nativeElement);
            resolve();
        });
    };
    DropDownComponent.prototype.closePrev = function () {
        var allDrps = document.querySelectorAll('.drop-down-window');
        allDrps.forEach(function (el) {
            var _a;
            var id = el.getAttribute('data-id');
            (_a = document.getElementById(id)) === null || _a === void 0 ? void 0 : _a.click();
        });
    };
    DropDownComponent.prototype.getCoords = function (el) {
        var coord = el.getBoundingClientRect();
        return {
            left: coord.left + window.pageXOffset,
            right: coord.right + window.pageXOffset,
            top: coord.top + window.pageYOffset,
            bottom: coord.bottom + window.pageYOffset
        };
    };
    DropDownComponent.prototype.scrollEvenFunc = function (ev) {
        this.close();
    };
    DropDownComponent.prototype.removeScrollEvent = function () {
        document.removeEventListener('scroll', this.scrollEvent);
    };
    DropDownComponent.prototype.addScrollEvent = function () {
        this.scrollEvent = this.scrollEvenFunc.bind(this);
        document.addEventListener('scroll', this.scrollEvent, true);
    };
    DropDownComponent.prototype.onClickOnBody = function (ev) {
        if (this.drpWin &&
            this.drpBox &&
            !this.drpWin.nativeElement.contains(ev.target) &&
            !this.drpBox.nativeElement.contains(ev.target)) {
            this.close();
        }
    };
    DropDownComponent.prototype.onClear = function () {
        window.event.stopPropagation();
        this.value = null;
        this.clear.emit();
    };
    DropDownComponent.prototype.ngOnDestroy = function () {
        this.removeScrollEvent();
    };
    __decorate([
        core_1.Input()
    ], DropDownComponent.prototype, "disabled");
    __decorate([
        core_1.ViewChild('drpWin')
    ], DropDownComponent.prototype, "drpWin");
    __decorate([
        core_1.ViewChild('drpBox')
    ], DropDownComponent.prototype, "drpBox");
    __decorate([
        core_1.Input()
    ], DropDownComponent.prototype, "label");
    __decorate([
        core_1.Input()
    ], DropDownComponent.prototype, "value");
    __decorate([
        core_1.Input()
    ], DropDownComponent.prototype, "drpHeight");
    __decorate([
        core_1.Input()
    ], DropDownComponent.prototype, "required");
    __decorate([
        core_1.Output()
    ], DropDownComponent.prototype, "clear");
    __decorate([
        core_1.HostListener('body:click', ['$event'])
    ], DropDownComponent.prototype, "onClickOnBody");
    DropDownComponent = __decorate([
        core_1.Component({
            selector: 'app-drop-down',
            templateUrl: './drop-down.component.html',
            styleUrls: ['./drop-down.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            animations: [
                animations_1.trigger('openClose', [
                    animations_1.state('true', animations_1.style({
                        transform: 'translateY(0)'
                    })),
                    animations_1.state('false', animations_1.style({
                        transform: 'translateY(100%)'
                    })),
                    animations_1.transition('true <=> false', animations_1.animate('0.3s')),
                ]),
            ]
        })
    ], DropDownComponent);
    return DropDownComponent;
}());
exports.DropDownComponent = DropDownComponent;
