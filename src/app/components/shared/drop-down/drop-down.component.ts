import {
  animate,
  animation,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('openClose', [
      state(
        'true',
        style({
          transform: 'translateY(0)',
        })
      ),
      state(
        'false',
        style({
          transform: 'translateY(100%)',
        })
      ),
      transition('true <=> false', animate('0.3s')),
    ]),
  ],
})
export class DropDownComponent implements OnInit, OnDestroy {
  constructor(private el: ElementRef) {}

  id = uuidv4();
  @Input() disabled = false;
  @ViewChild('drpWin') drpWin: ElementRef;
  @ViewChild('drpBox') drpBox: ElementRef;
  containerSelector = 'html';
  @Input() label: string;
  @Input() value: string;
  @Input() drpHeight = 150;
  @Input() required = false;
  @Output() clear = new EventEmitter<any>();
  scrollEvent = null;
  private _container: HTMLElement;
  addCloseClass = false;
  showDrpWin = false;
  style = {};
  setContent(content: string): void {
    this.value = content;
  }
  ngOnInit(): void {
    this.addScrollEvent();
  }
  toggle(): void {
    if (this.disabled) {
      return;
    }
    if (this.showDrpWin === false) {
      this.closePrev();
      this.showDrpWin = true;
      setTimeout(() => {
        this.setPosiotion().then(() => {
          setTimeout(() => {
            this.addCloseClass = false;
          }, 0);
        });
      }, 0);
    } else {
      this.close();
    }
  }
  close(): void {
    this.addCloseClass = true;
    setTimeout(() => {
      this.showDrpWin = false;
      this.style = { top: 0, width: 0 };
      this.addCloseClass = false;
    }, 130);
  }
  setPosiotion(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.style = {};
      const refEl = (this.drpBox.nativeElement as HTMLElement).querySelector(
        'div'
      );
      const htmls = document.querySelectorAll(this.containerSelector);

      this._container = htmls[htmls.length - 1] as HTMLElement;
      const refCoords = this.getCoords(refEl);
      this.style['left'] = `${refCoords.left}px`;
      this.style['width'] = `${refEl.clientWidth}px`;
      this.style['top'] = `${refCoords.top + refEl.clientHeight + 3}px`;
      if (
        refCoords.bottom + this.drpHeight >
        window.document.documentElement.clientHeight
      ) {
        this.style['top'] = `${refCoords.top - this.drpHeight - 3}px`;
      }
      this._container.appendChild(this.drpWin.nativeElement);
      resolve();
    });
  }
  closePrev(): void {
    const allDrps = document.querySelectorAll('.drop-down-window');
    allDrps.forEach((el: HTMLElement) => {
      const id = el.getAttribute('data-id');
      document.getElementById(id)?.click();
    });
  }
  getCoords(
    el: HTMLElement
  ): { left: number; right: number; top: number; bottom: number } {
    const coord = el.getBoundingClientRect();
    return {
      left: coord.left + window.pageXOffset,
      right: coord.right + window.pageXOffset,
      top: coord.top + window.pageYOffset,
      bottom: coord.bottom + window.pageYOffset,
    };
  }
  scrollEvenFunc(ev: Event): void {
    this.close();
  }
  removeScrollEvent(): void {
    document.removeEventListener('scroll', this.scrollEvent);
  }
  addScrollEvent(): void {
    this.scrollEvent = this.scrollEvenFunc.bind(this);
    document.addEventListener('scroll', this.scrollEvent, true);
  }

  @HostListener('body:click', ['$event'])
  onClickOnBody(ev: MouseEvent): void {
    if (
      this.drpWin &&
      this.drpBox &&
      !this.drpWin.nativeElement.contains(ev.target) &&
      !this.drpBox.nativeElement.contains(ev.target)
    ) {
      this.close();
    }
  }
  onClear(): void {
    window.event.stopPropagation();
    this.value = null;
    this.clear.emit();
  }
  ngOnDestroy(): void {
    this.removeScrollEvent();
  }
}
