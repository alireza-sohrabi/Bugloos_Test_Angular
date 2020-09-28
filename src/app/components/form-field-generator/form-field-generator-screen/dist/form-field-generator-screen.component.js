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
        this.selectedItemForEdit = null;
        this.rows = [];
        this.draging = false;
        this.configed = false;
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
        this.fieldId = this.selectedItemForEdit.id;
        this.openDialog();
    };
    FormFieldGeneratorScreenComponent.prototype.populate = function () {
        var _this = this;
        this.formFieldService.getFormFieldsById(this.formId).subscribe(function (res) {
            var _a, _b;
            if (res.isOk) {
                var rowsLength = res.result.length + 1;
                var rows = [];
                var maxCols = 3;
                for (var index = 0; index < rowsLength; index++) {
                    var cols = (_b = (_a = res.result[index]) === null || _a === void 0 ? void 0 : _a.cols) !== null && _b !== void 0 ? _b : [];
                    maxCols = maxCols < cols.length ? cols.length : maxCols;
                    for (var i = cols.length; i < maxCols; i++) {
                        cols.push({ showFake: false, showFake_last: false });
                    }
                    rows.push({
                        index: index,
                        cols: cols
                    });
                }
                _this.fields = rows;
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
            body.style.left = ev.pageX + 2 + "px";
            body.style.top = ev.pageY + "px";
            this.draging = true;
            window.document.documentElement.style.cursor = 'move';
        }
        else {
        }
    };
    FormFieldGeneratorScreenComponent.prototype.afterFinisMove = function () {
        this.selectedItem = null;
        this.draging = false;
        window.document.documentElement.style.cursor = '';
        this.leave();
    };
    FormFieldGeneratorScreenComponent.prototype.onMouseUp = function (ev) {
        var _this = this;
        if (this.selectedItem && this.draging) {
            this.draging = false;
            debugger;
            this.formFieldService
                .moveField(this.selectedItem.model, this.formId, this.selectedItem.newRowIndex, this.selectedItem.newColIndex)
                .subscribe(function (res) {
                if (res.isOk) {
                    _this.populate();
                    _this.afterFinisMove();
                }
            });
        }
    };
    FormFieldGeneratorScreenComponent.prototype.leaveFakeEmptyEl = function () {
        var fakes = document.querySelectorAll('.form-screen-box-col-fake-fake');
        fakes.forEach(function (item) {
            return item.classList.remove('form-screen-box-col-fake-fake');
        });
    };
    FormFieldGeneratorScreenComponent.prototype.leaveFakeEl = function () {
        this.configed = false;
        var el = this.elFake.nativeElement.firstChild;
        el.style.width = '0';
        el.style.height = '0';
        setTimeout(function () {
            el.classList.remove('form-screeen-col-visibility');
        }, 10);
    };
    FormFieldGeneratorScreenComponent.prototype.leave = function () {
        this.leaveFakeEl();
        this.leaveFakeEmptyEl();
    };
    FormFieldGeneratorScreenComponent.prototype.insertBefore = function (currentCell, el) {
        currentCell.parentNode.insertBefore(el, currentCell);
    };
    FormFieldGeneratorScreenComponent.prototype.insertAfter = function (currentCell, el) {
        currentCell.parentNode.insertBefore(el, currentCell.nextSibling);
    };
    FormFieldGeneratorScreenComponent.prototype.configFakeEl = function (el) {
        var _this = this;
        console.dir(this.selectedItem);
        if (!this.configed) {
            var elfake_1 = el.firstChild;
            this.configed = true;
            setTimeout(function () {
                var _a, _b, _c, _d;
                if (!elfake_1.classList.contains('form-screeen-col-visibility')) {
                    elfake_1.classList.add('form-screeen-col-visibility');
                }
                elfake_1.style.width = ((_b = (_a = _this.selectedItem) === null || _a === void 0 ? void 0 : _a.el.clientWidth) !== null && _b !== void 0 ? _b : 0) + 'px';
                elfake_1.style.height = ((_d = (_c = _this.selectedItem) === null || _c === void 0 ? void 0 : _c.el.clientHeight) !== null && _d !== void 0 ? _d : 0) + 'px';
                console.dir('add');
            }, 20);
        }
    };
    FormFieldGeneratorScreenComponent.prototype.onMouseDown = function (ev, col, rowIndex, colIndex) {
        this.selectedItem = {
            el: ev.currentTarget,
            model: col,
            rowIndex: rowIndex,
            colIndex: colIndex,
            newColIndex: null,
            newRowIndex: null
        };
        this.selectedItemForEdit = col;
        var body = this.elForMove.nativeElement;
        body.innerHTML = null;
        body.innerHTML = this.selectedItem.el.outerHTML;
    };
    FormFieldGeneratorScreenComponent.prototype.onMouseLeaveEmptyCell = function (ev) {
        var parent = ev.currentTarget;
        if (parent) {
            parent.classList.remove('form-screen-box-col-fake-fake');
        }
    };
    FormFieldGeneratorScreenComponent.prototype.onMouseEnterToEmptyCell = function (ev, rowIndex, colIndex) {
        var _a, _b;
        if (this.draging && this.selectedItem) {
            this.selectedItem.newColIndex = colIndex;
            this.selectedItem.newRowIndex = rowIndex;
            this.leaveFakeEl();
            var child = ev.currentTarget;
            if (!child.classList.contains('form-screen-box-col-fake-fake')) {
                child.classList.add('form-screen-box-col-fake-fake');
                child.style.height = ((_b = (_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.el.clientHeight) !== null && _b !== void 0 ? _b : 0) + 'px';
            }
        }
    };
    FormFieldGeneratorScreenComponent.prototype.onMouseEnter = function (ev, col, cols, colIndex, rowIndex, directionOfEnter) {
        var _this = this;
        var _a;
        if (this.draging && ((_a = this.selectedItem) === null || _a === void 0 ? void 0 : _a.model) !== col) {
            var el_1 = this.elFake.nativeElement;
            var currentCell_1 = ev.currentTarget.parentNode
                .parentNode;
            setTimeout(function () {
                _this.selectedItem.newRowIndex = rowIndex;
                var isBefore = directionOfEnter === 'before';
                var isAfter = directionOfEnter === 'after';
                if (rowIndex === _this.selectedItem.rowIndex) {
                    var isBeforeOfCurrent = colIndex - 1 === _this.selectedItem.colIndex;
                    var isAfterOfCurrent = colIndex + 1 === _this.selectedItem.colIndex;
                    if (isBeforeOfCurrent) {
                        // if (isBefore) {
                        //   return;
                        // }
                        _this.selectedItem.newColIndex = colIndex + 1;
                        _this.insertAfter(currentCell_1, el_1);
                        _this.configFakeEl(el_1);
                        return;
                    }
                    if (isAfterOfCurrent) {
                        // if (isAfter) {
                        //   return;
                        // }
                        _this.selectedItem.newColIndex = colIndex - 1;
                        _this.insertBefore(currentCell_1, el_1);
                        _this.configFakeEl(el_1);
                        return;
                    }
                }
                if (isBefore) {
                    _this.insertBefore(currentCell_1, el_1);
                    _this.selectedItem.newColIndex = colIndex - 1;
                    _this.configFakeEl(el_1);
                    return;
                }
                if (isAfter) {
                    _this.insertAfter(currentCell_1, el_1);
                    _this.selectedItem.newColIndex = colIndex + 1;
                    _this.configFakeEl(el_1);
                    return;
                }
            }, 0);
        }
    };
    FormFieldGeneratorScreenComponent.prototype.onMouseLeave = function (ev, col) {
        // this.Leave();
        console.dir('leave');
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
        core_1.ViewChild('elFake')
    ], FormFieldGeneratorScreenComponent.prototype, "elFake");
    __decorate([
        core_1.HostListener('body:mousemove', ['$event'])
    ], FormFieldGeneratorScreenComponent.prototype, "onMouseMove");
    __decorate([
        core_1.HostListener('window:mouseup', ['$event'])
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
