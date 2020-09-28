import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckBoxComponent implements OnInit {
  constructor() {}
  @Input() disabled = false;
  @Input() label: string;
  @Input() value = false;
  @Output() valueChange = new EventEmitter<boolean>();
  id = uuidv4();
  onChange(ev: Event): void {
    this.value = ev.target['checked'] as boolean;
    this.valueChange.emit(this.value);
  }
  ngOnInit(): void {}
}
