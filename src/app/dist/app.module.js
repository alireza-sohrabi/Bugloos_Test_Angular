"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var form_field_generator_screen_component_1 = require("./components/form-field-generator/form-field-generator-screen/form-field-generator-screen.component");
var form_field_generator_edit_component_1 = require("./components/form-field-generator/form-field-generator-edit/form-field-generator-edit.component");
var shared_module_1 = require("./components/shared/shared.module");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var form_field_generator_component_1 = require("./components/form-field-generator/form-field-generator.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                form_field_generator_component_1.FormFieldGeneratorComponent,
                form_field_generator_edit_component_1.FormFieldGeneratorEditComponent,
                form_field_generator_screen_component_1.FormFieldGeneratorScreenComponent,
            ],
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, shared_module_1.SharedModule],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
