"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.columnsDef = [
            { headerName: 'نام فرم', field: 'title' },
            { headerName: 'توضیحات', field: 'description' },
        ];
        this.forms = [
            {
                title: 'form1',
                value: 1,
                description: 'as well as measure the accessibility level of any color combination.'
            },
            {
                title: 'form2',
                value: 2,
                description: 'Shaw has a little JavaScript one-liner that is very clever'
            },
            {
                title: 'form3',
                value: 3,
                description: 'Looking for a complete course on getting into web development'
            },
            {
                title: 'form4',
                value: 4,
                description: 'JavaScript to Git and basic back-end development'
            },
        ];
        this.title = 'bugloos';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
