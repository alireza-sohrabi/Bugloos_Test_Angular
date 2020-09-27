import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit {
  constructor() {}
  @ViewChild('elDialog') elDialog: ElementRef;
  @ViewChild('anim') anim: ElementRef;
  @Input() height: string | number = 'auto';
  @Input() width: string | number = 450;
  @Input() maxWidth: string | number = '100%';
  private _show = false;

  @Input() set show(value: boolean) {
    if (value === true) {
      this.open();
    } else if (value === false) {
      this.close();
    }
  }
  get show(): boolean {
    return this._show;
  }
  @Output() showChange = new EventEmitter<boolean>();
  ngOnInit(): void {}
  toggle(): void {
    if (this.show) {
      this.close();
    } else {
      this.open();
    }
  }
  open(): void {
    this._show = true;
    this.showChange.emit(this.show);
    this.appendToContainer();
  }
  close(): void {
    if (this.elDialog) {
      const el = this.anim.nativeElement as HTMLElement;
      el.classList.add('close');
      setTimeout(() => {
        this._show = false;
        this.showChange.emit(this.show);
      }, 520);
    }
  }
  appendToContainer(): void {
    setTimeout(() => {
      const container = document.documentElement;
      container.appendChild(this.elDialog.nativeElement);
    }, 0);
  }
}
