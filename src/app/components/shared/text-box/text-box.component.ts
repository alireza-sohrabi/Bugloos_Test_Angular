import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import InputMask from 'inputmask';
@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextBoxComponent implements OnInit, AfterViewInit {
  constructor() {}
  @Input() readOnly = false;
  @Input() disabled = false;
  @Input() placeholder = '';
  @Input() width: any;
  @ViewChild('elInput') elInput: ElementRef;
  @Input() mask = '';
  @Input() label: string;
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();
  @Input() required = false;
  ngOnInit(): void {}
  onClear(): void {
    this.value = null;
    this.valueChange.emit(this.value);
  }
  populateMask(): void {
    setTimeout(() => {
      const mask = new InputMask(this.mask);
      mask.mask(this.elInput.nativeElement);
    }, 0);
  }
  ngAfterViewInit(): void {
    this.populateMask();
  }
}
