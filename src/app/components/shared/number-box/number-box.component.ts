import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
  styleUrls: ['./number-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NumberBoxComponent implements OnInit {
  constructor() {}
  @Input() readOnly = false;
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() label: string;
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  @Input() required = false;
  ngOnInit(): void {}
  onClear(): void {
    this.value = null;
    this.valueChange.emit(this.value);
  }
}
