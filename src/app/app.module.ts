import { FormFieldGeneratorScreenComponent } from './components/form-field-generator/form-field-generator-screen/form-field-generator-screen.component';
import { FormFieldGeneratorEditComponent } from './components/form-field-generator/form-field-generator-edit/form-field-generator-edit.component';
import { SharedModule } from './components/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormFieldGeneratorComponent } from './components/form-field-generator/form-field-generator.component';
import { MainComponent } from './components/main/main.component';
import { FormService } from './components/form-field-generator/services/form.service';
import { FormFieldGeneratorScreenEditComponent } from './components/form-field-generator/form-field-generator-screen/form-field-generator-screen-edit/form-field-generator-screen-edit.component';
import { FormFieldService } from './components/form-field-generator/services/form-field.service';
import { FieldTypePipe } from './components/form-field-generator/form-field-generator-screen/field-type.pipe';
import { FieldRequiredPipe } from './components/form-field-generator/form-field-generator-screen/field-required.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormFieldGeneratorComponent,
    FormFieldGeneratorEditComponent,
    FormFieldGeneratorScreenComponent,
    FormFieldGeneratorScreenEditComponent,
    FieldTypePipe,
    FieldRequiredPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [FormService, FormFieldService],
  bootstrap: [AppComponent],
})
export class AppModule {}
