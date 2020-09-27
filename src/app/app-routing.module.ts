import { FormFieldGeneratorComponent } from './components/form-field-generator/form-field-generator.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFieldGeneratorScreenComponent } from './components/form-field-generator/form-field-generator-screen/form-field-generator-screen.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  { path: 'screen/:formId', component: FormFieldGeneratorScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
