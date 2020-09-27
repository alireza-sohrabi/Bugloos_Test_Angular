import { DialogComponent } from './../shared/dialog/dialog.component';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormService } from '../form-field-generator/services/form.service';
import { ColumnsDef } from '../shared/grid/models/column-def';
import { FormFieldGeneratorEditComponent } from '../form-field-generator/form-field-generator-edit/form-field-generator-edit.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent implements OnInit {
  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  @ViewChild('elEditForm') elEditForm: FormFieldGeneratorEditComponent;
  formId: string;
  title = 'ساخت فرم جدید';
  showDialog = false;
  selectedRow = null;
  columnsDef: ColumnsDef[] = [
    { headerName: 'نام فرم', field: 'name' },
    { headerName: 'توضیحات', field: 'description' },
  ];
  forms = [];
  ngOnInit(): void {
    this.populate();
  }
  populate(): void {
    this.formService.getForms().subscribe((result) => {
      if (result.isOk) {
        this.forms = result.result;
      } else {
        console.dir(result.message);
      }
    });
  }
  onAdd(): void {
    this.formId = null;
    this.openDialog();
  }
  onEdit(): void {
    this.formId = this.selectedRow?.id ?? null;
    this.openDialog();
  }
  openDialog(): void {
    this.showDialog = false;
    setTimeout(() => {
      this.showDialog = true;
      setTimeout(() => {
        this.elEditForm.open();
      }, 60);
    }, 0);
  }
  onEditScreen(): void {
    this.formId = this.selectedRow?.id ?? null;
    this.router.navigate([`../screen/${this.formId}`], {
      relativeTo: this.route,
    });
  }
}
