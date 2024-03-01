import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.scss'
})
export class DefaultButtonComponent {
  @Input() type : 'submit' | 'button' = 'submit';
  @Input() text: string = 'Submit';
  @Input() bgColor = '#ac957b';
  @Input() color = 'white';
  @Input() fontSizeRem = 1.3;
  @Input() widthRem = 12;
  @Input() borderRadiusRem = 0.7;

  @Output() onClick = new EventEmitter();

}
