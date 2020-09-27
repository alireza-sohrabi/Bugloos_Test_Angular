import { FormFieldGeneratorScreenEditComponent } from './form-field-generator-screen-edit/form-field-generator-screen-edit.component';
import { FormFiledModel, FormFieldTypes } from './../models/form-field-model';
import { FormFieldService } from './../services/form-field.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-field-generator-screen',
  templateUrl: './form-field-generator-screen.component.html',
  styleUrls: ['./form-field-generator-screen.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormFieldGeneratorScreenComponent
  implements OnInit, AfterViewInit {
  constructor(
    private formFieldService: FormFieldService,
    private route: ActivatedRoute
  ) {}

  @ViewChild('elEditField') elEditField: FormFieldGeneratorScreenEditComponent;
  @ViewChild('elForMove') elForMove: ElementRef;

  draging = false;
  formId: string;
  fieldId: string;
  selectedItem: { el: HTMLElement; model: FormFiledModel } = null;
  enterToThisItem = null;
  showDialog = false;
  fields: { index: number; cols: FormFiledModel[] }[] = [];
  ngOnInit(): void {
    this.formId = this.route.snapshot.params.formId;
    this.populate();
  }
  onAddField(): void {
    this.fieldId = null;
    this.openDialog();
  }
  onEditField(): void {
    this.fieldId = this.selectedItem?.model?.id ?? null ?? null;
    this.openDialog();
  }

  populate(): void {
    this.formFieldService.getFormFieldsById(this.formId).subscribe((res) => {
      if (res.isOk) {
        this.fields = res.result;
        console.dir(this.fields);
      }
    });
  }
  openDialog(): void {
    this.showDialog = false;
    setTimeout(() => {
      this.showDialog = true;
      setTimeout(() => {
        this.elEditField.open();
      }, 60);
    }, 0);
  }
  @HostListener('body:mousemove', ['$event'])
  onMouseMove(ev: MouseEvent): void {
    if (this.selectedItem) {
      const body = this.elForMove.nativeElement as HTMLElement;
      body.style.left = `${ev.pageX + 30}px`;
      body.style.top = `${ev.pageY - 20}px`;
      this.draging = true;
      window.document.documentElement.style.cursor = 'move';
    } else {
    }
  }
  onMouseDown(ev: MouseEvent, item: FormFiledModel): void {
    this.selectedItem = { el: ev.currentTarget as HTMLElement, model: item };
    const body = this.elForMove.nativeElement as HTMLElement;
    body.innerHTML = null;
    body.innerHTML = this.selectedItem.el.outerHTML;
  }
  @HostListener('body:mouseup', ['$event'])
  onMouseUp(ev: MouseEvent): void {
    this.selectedItem = null;
    this.draging = false;
    window.document.documentElement.style.cursor = '';
    if (this.enterToThisItem) {
      this.enterToThisItem['showFake'] = false;
    }
  }
  onMouseLeave(ev: MouseEvent, col: FormFiledModel) {
    col['showFake'] = false;
  }
  onMouseEnter(ev: MouseEvent, col: FormFiledModel): void {
    if (this.draging && this.selectedItem?.model !== col) {
      this.enterToThisItem = col;
      col['showFake'] = true;
    }
  }
  ngAfterViewInit(): void {
    // document.documentElement.appendChild(this.elForMove.nativeElement);
  }
  get fieldTypes() {
    return FormFieldTypes;
  }
}
