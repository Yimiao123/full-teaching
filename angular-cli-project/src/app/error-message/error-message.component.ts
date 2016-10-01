import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {

  @Input()
  errorTitle: string;
  @Input()
  errorContent: string;
  @Input()
  customClass: string;
  @Input()
  closable: boolean;
  @Input()
  timeable: number;

  @Output()
  eventShowable = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public closeAlert() {
    this.eventShowable.emit(false);
  }

}
