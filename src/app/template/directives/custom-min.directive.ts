import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[customMin][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CustomMinDirective,
    multi: true
  }]
})
export class CustomMinDirective implements Validator {
  @Input() minimo!: number;

  constructor() {
    console.log('Minimo', this.minimo);
  }

  validate(control: FormControl): object | null {
    const inputValue = control.value;
    console.log(inputValue);
    console.log('Minimo', this.minimo);
    return (inputValue < this.minimo) ? { customMin: true} : null;
  }
}
