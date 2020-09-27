import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
  constructor() {}

  @Input() label: string;
  @Input() value = false;
  @Input() name: string;
  @Output() valueChange = new EventEmitter<boolean>();
  id = uuidv4();
  onChange(ev: Event): void {
    this.value = ev.target['checked'] as boolean;
    this.valueChange.emit(this.value);
  }
  ngOnInit(): void {}
}
