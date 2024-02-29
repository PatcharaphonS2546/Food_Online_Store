import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() control!: AbstractControl;
  @Input() showErrorsWhen: boolean = true;
  @Input() label!: string;
  @Input()
  type: 'text' | 'page' | 'email' | 'password' = 'text';

  get formControl(){
    return this.control as FormControl;
  }
}
