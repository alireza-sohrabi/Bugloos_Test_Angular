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
  @ViewChild('elFake') elFake: ElementRef;
  selectedItemForEdit = null;
  rows: any[] = [];
  draging = false;
  formId: string;
  fieldId: string;
  configed = false;

  selectedItem: {
    el: HTMLElement;
    model: FormFiledModel;
    rowIndex: number;
    colIndex: number;
    newRowIndex: number;
    newColIndex: number;
  } = null;
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
    this.fieldId = this.selectedItemForEdit.id;
    this.openDialog();
  }

  populate(): void {
    this.formFieldService.getFormFieldsById(this.formId).subscribe((res) => {
      if (res.isOk) {
        const rowsLength = res.result.length + 1;
        const rows = [];
        let maxCols = 3;
        for (let index = 0; index < rowsLength; index++) {
          const cols: any = res.result[index]?.cols ?? [];
          maxCols = maxCols < cols.length ? cols.length : maxCols;
          for (let i = cols.length; i < maxCols; i++) {
            cols.push({ showFake: false, showFake_last: false });
          }
          rows.push({
            index,
            cols,
          });
        }
        this.fields = rows;
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
      body.style.left = `${ev.pageX + 2}px`;
      body.style.top = `${ev.pageY}px`;
      this.draging = true;
      window.document.documentElement.style.cursor = 'move';
    } else {
    }
  }
  afterFinisMove(): void {
    this.selectedItem = null;
    this.draging = false;
    window.document.documentElement.style.cursor = '';
    this.leave();
  }
  @HostListener('window:mouseup', ['$event'])
  onMouseUp(ev: MouseEvent): void {
    if (this.selectedItem && this.draging) {
      this.draging = false;
      debugger;
      this.formFieldService
        .moveField(
          this.selectedItem.model,
          this.formId,
          this.selectedItem.newRowIndex,
          this.selectedItem.newColIndex
        )
        .subscribe((res) => {
          if (res.isOk) {
            this.populate();
            this.afterFinisMove();
          }
        });
    }
  }
  private leaveFakeEmptyEl(): void {
    const fakes = document.querySelectorAll('.form-screen-box-col-fake-fake');
    fakes.forEach((item) =>
      item.classList.remove('form-screen-box-col-fake-fake')
    );
  }
  private leaveFakeEl(): void {
    this.configed = false;
    const el = this.elFake.nativeElement.firstChild as HTMLElement;
    el.style.width = '0';
    el.style.height = '0';
    setTimeout(() => {
      el.classList.remove('form-screeen-col-visibility');
    }, 10);
  }
  leave(): void {
    this.leaveFakeEl();
    this.leaveFakeEmptyEl();
  }

  insertBefore(currentCell, el): void {
    currentCell.parentNode.insertBefore(el, currentCell);
  }
  insertAfter(currentCell, el): void {
    currentCell.parentNode.insertBefore(el, currentCell.nextSibling);
  }
  configFakeEl(el): void {
    console.dir(this.selectedItem);
    if (!this.configed) {
      const elfake = el.firstChild as HTMLElement;
      this.configed = true;
      setTimeout(() => {
        if (!elfake.classList.contains('form-screeen-col-visibility')) {
          elfake.classList.add('form-screeen-col-visibility');
        }
        elfake.style.width = (this.selectedItem?.el.clientWidth ?? 0) + 'px';
        elfake.style.height = (this.selectedItem?.el.clientHeight ?? 0) + 'px';
        console.dir('add');
      }, 20);
    }
  }
  onMouseDown(
    ev: MouseEvent,
    col: FormFiledModel,
    rowIndex: number,
    colIndex: number
  ): void {
    this.selectedItem = {
      el: ev.currentTarget as HTMLElement,
      model: col,
      rowIndex,
      colIndex,
      newColIndex: null,
      newRowIndex: null,
    };
    this.selectedItemForEdit = col;
    const body = this.elForMove.nativeElement as HTMLElement;
    body.innerHTML = null;
    body.innerHTML = this.selectedItem.el.outerHTML;
  }
  onMouseLeaveEmptyCell(ev: MouseEvent): void {
    const parent = (ev.currentTarget as HTMLElement) as any;
    if (parent) {
      parent.classList.remove('form-screen-box-col-fake-fake');
    }
  }
  onMouseEnterToEmptyCell(
    ev: MouseEvent,
    rowIndex: number,
    colIndex: number
  ): void {
    if (this.draging && this.selectedItem) {
      this.selectedItem.newColIndex = colIndex;
      this.selectedItem.newRowIndex = rowIndex;
      this.leaveFakeEl();
      const child = ev.currentTarget as HTMLElement;
      if (!child.classList.contains('form-screen-box-col-fake-fake')) {
        child.classList.add('form-screen-box-col-fake-fake');
        child.style.height = (this.selectedItem?.el.clientHeight ?? 0) + 'px';
      }
    }
  }
  onMouseEnter(
    ev: MouseEvent,
    col: FormFiledModel,
    cols: FormFiledModel[],
    colIndex: number,
    rowIndex: number,
    directionOfEnter: string
  ): void {
    if (this.draging && this.selectedItem?.model !== col) {
      const el = this.elFake.nativeElement as HTMLElement;
      const currentCell = (ev.currentTarget as HTMLElement).parentNode
        .parentNode;
      setTimeout(() => {
        this.selectedItem.newRowIndex = rowIndex;
        const isBefore = directionOfEnter === 'before';
        const isAfter = directionOfEnter === 'after';
        if (rowIndex === this.selectedItem.rowIndex) {
          const isBeforeOfCurrent = colIndex - 1 === this.selectedItem.colIndex;
          const isAfterOfCurrent = colIndex + 1 === this.selectedItem.colIndex;
          if (isBeforeOfCurrent) {
            // if (isBefore) {
            //   return;
            // }
            this.selectedItem.newColIndex = colIndex + 1;
            this.insertAfter(currentCell, el);
            this.configFakeEl(el);
            return;
          }
          if (isAfterOfCurrent) {
            // if (isAfter) {
            //   return;
            // }
            this.selectedItem.newColIndex = colIndex - 1;
            this.insertBefore(currentCell, el);
            this.configFakeEl(el);
            return;
          }
        }
        if (isBefore) {
          this.insertBefore(currentCell, el);
          this.selectedItem.newColIndex = colIndex - 1;
          this.configFakeEl(el);
          return;
        }
        if (isAfter) {
          this.insertAfter(currentCell, el);
          this.selectedItem.newColIndex = colIndex + 1;
          this.configFakeEl(el);
          return;
        }
      }, 0);
    }
  }
  onMouseLeave(ev: MouseEvent, col: FormFiledModel): void {
    // this.Leave();
    console.dir('leave');
  }
  ngAfterViewInit(): void {
    // document.documentElement.appendChild(this.elForMove.nativeElement);
  }
  get fieldTypes() {
    return FormFieldTypes;
  }
}
