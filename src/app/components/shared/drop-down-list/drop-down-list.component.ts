import { DropDownComponent } from './../drop-down/drop-down.component';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DropDownListComponent implements OnInit, OnChanges {
  constructor() {}
  @ViewChild('drp') drp: DropDownComponent;
  displayValue = '';
  @Output() selectItem = new EventEmitter<any>();
  @Input() label: string;
  @Input() isMulti = false;
  @Input() source: any[] = [];
  @Input() value: string | string[];
  @Output() valueChange = new EventEmitter<string | string[]>();
  @Input() displayMember = 'title';
  @Input() valueMember = 'value';
  ngOnInit(): void {}
  private setConent(content: string): void {
    this.displayValue = content;
  }
  close(): void {
    this.drp.close();
  }
  onSelectItem(item: any): void {
    this.setConent(item[this.displayMember]);
    this.value = item[this.valueMember];
    this.valueChange.emit(this.value);
    this.selectItem.emit(item);
    this.close();
  }
  private setContentById(id: string): void {
    const item = this.source.find((w) => w[this.valueMember] === id);
    if (item) {
      this.setConent(item[this.displayMember]);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value && changes.value.currentValue) {
      this.setContentById(changes.value.currentValue);
    }
  }
  onClear(): void {
    this.value = null;
    this.valueChange.emit(this.value);
    this.close();
  }
}
