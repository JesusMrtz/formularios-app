import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  completeName = ('([a-zA-Z]+) ([a-zA-Z]+)');
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor() { }

  isMago(control: FormControl): ValidationErrors | null {
    const value = control.value?.trim().toLowerCase();

    if (value === 'mago') {
      return {
        noMago: true
      };
    } else {
      return null;
    }
  }

  sameFields(field1: string, field2: string): any {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password1 = formGroup.get(field1)?.value;
      const confirmPassword = formGroup.get(field2)?.value;

      if (password1 !== confirmPassword) {
        formGroup.get(field2)?.setErrors({noEquals: true});
        return { noEquals: true };
      }
      formGroup.get(field2)?.setErrors(null);
      return null;
    };
  }
}
