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
        this.title = 'bugloos';
        if (!localStorage['form-filed']) {
            localStorage['form-filed'] = [
                {
                    formFields: [
                        {
                            rowIndex: null,
                            colIndex: 3,
                            name: 'Name',
                            lName: 'نام',
                            fieldType: 1,
                            required: true,
                            id: 'a8fe92a3-13f2-46c8-a4db-1ea6f48cf588'
                        },
                        {
                            rowIndex: null,
                            colIndex: 2,
                            name: 'LastName',
                            lName: 'نام خانوادگی',
                            fieldType: 1,
                            required: true,
                            id: 'f3359b75-77e1-48d3-8d0c-ebc5c62fdf69'
                        },
                        {
                            rowIndex: 0,
                            colIndex: 1,
                            name: 'Name',
                            lName: 'نام',
                            fieldType: 1,
                            required: true,
                            id: '0dde151f-7734-460e-b607-67ecc9d133ec'
                        },
                        {
                            rowIndex: null,
                            colIndex: 1,
                            name: 'Name',
                            lName: 'نام خانوادگی',
                            fieldType: 1,
                            id: '2e9fa83c-ae0d-4185-ab12-a5a708b36f09'
                        },
                        {
                            rowIndex: 0,
                            colIndex: 0,
                            name: 'LastName',
                            lName: 'نام‌خانوادگی',
                            fieldType: 1,
                            required: true,
                            id: '4dcdf70d-b92b-499e-af6d-0107c40aa863'
                        },
                    ],
                    name: 'منابع انسانی',
                    width: 1200,
                    id: '439809ae-6fb9-4fac-adaf-effd80943bd0',
                    description: 'برای ایجاد کارمند جدید'
                },
            ];
        }
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
