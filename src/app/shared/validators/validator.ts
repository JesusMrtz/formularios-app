import { FormControl } from '@angular/forms';

// Propiedades regex

export function isMago(control: FormControl): object | null {
  const value = control.value?.trim().toLowerCase();

  if (value === 'mago') {
    return {
      noMago: true
    };
  } else {
    return null;
  }
}
