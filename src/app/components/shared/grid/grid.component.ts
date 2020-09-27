import { ColumnsDef } from './models/column-def';
import {
  Component,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent implements OnInit {
  constructor() {}
  @Input() selectedRow: any;
  @Output() selectedRowChange = new EventEmitter<any>();

  @Input() columnsDef: ColumnsDef[] = [];
  @Input() rowData: any[] = [];
  ngOnInit(): void {}
  onClickRow(ev: MouseEvent, row: any): void {
    ev.stopPropagation();
    if (row !== this.selectedRow) {
      this.selectedRow = row;
    } else {
      this.selectedRow = null;
    }
    this.selectedRowChange.emit(this.selectedRow);
  }
}
