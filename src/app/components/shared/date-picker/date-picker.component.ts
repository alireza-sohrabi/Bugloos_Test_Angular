import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DatePickerComponent implements OnInit {
  constructor() {}
  @Input() label: string;
  @Input() value: Date;
  @Output() valueChange = new EventEmitter<Date>();
  ngOnInit(): void {}
}
