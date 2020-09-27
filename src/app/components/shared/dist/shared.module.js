"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var form_validator_directive_1 = require("./form-validator/form-validator.directive");
var radio_button_component_1 = require("./radio-button/radio-button.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var text_box_component_1 = require("./text-box/text-box.component");
var forms_1 = require("@angular/forms");
var number_box_component_1 = require("./number-box/number-box.component");
var drop_down_component_1 = require("./drop-down/drop-down.component");
var drop_down_list_component_1 = require("./drop-down-list/drop-down-list.component");
var date_picker_component_1 = require("./date-picker/date-picker.component");
var text_area_component_1 = require("./text-area/text-area.component");
var check_box_component_1 = require("./check-box/check-box.component");
var grid_component_1 = require("./grid/grid.component");
var dialog_component_1 = require("./dialog/dialog.component");
var dialog_header_directive_1 = require("./dialog/dialog-header.directive");
var dialog_body_directive_1 = require("./dialog/dialog-body.directive");
var dialog_footer_directive_1 = require("./dialog/dialog-footer.directive");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [
                text_box_component_1.TextBoxComponent,
                number_box_component_1.NumberBoxComponent,
                drop_down_component_1.DropDownComponent,
                drop_down_list_component_1.DropDownListComponent,
                date_picker_component_1.DatePickerComponent,
                text_area_component_1.TextAreaComponent,
                check_box_component_1.CheckBoxComponent,
                radio_button_component_1.RadioButtonComponent,
                grid_component_1.GridComponent,
                dialog_component_1.DialogComponent,
                dialog_header_directive_1.DialogHeaderDirective,
                dialog_body_directive_1.DialogBodyDirective,
                dialog_footer_directive_1.DialogFooterDirective,
                form_validator_directive_1.FormValidatorDirective,
            ],
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            exports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                text_box_component_1.TextBoxComponent,
                number_box_component_1.NumberBoxComponent,
                drop_down_component_1.DropDownComponent,
                drop_down_list_component_1.DropDownListComponent,
                date_picker_component_1.DatePickerComponent,
                text_area_component_1.TextAreaComponent,
                check_box_component_1.CheckBoxComponent,
                radio_button_component_1.RadioButtonComponent,
                grid_component_1.GridComponent,
                dialog_component_1.DialogComponent,
                dialog_header_directive_1.DialogHeaderDirective,
                dialog_body_directive_1.DialogBodyDirective,
                dialog_footer_directive_1.DialogFooterDirective,
                form_validator_directive_1.FormValidatorDirective,
                forms_1.FormControlDirective,
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
