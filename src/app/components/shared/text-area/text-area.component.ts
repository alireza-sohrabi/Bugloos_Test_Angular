import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextAreaComponent implements OnInit {
  constructor() {}
  @Input() label: string;
  @Input() value: string;
  @Input() initHeight = 50;
  @Output() valueChange = new EventEmitter<string>();
  ngOnInit(): void {}
}
