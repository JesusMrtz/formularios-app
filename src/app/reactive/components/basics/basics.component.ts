import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  /*myForm: FormGroup = new FormGroup({
    name: new FormControl('Laptop 32 GB RAM'),
    price: new FormControl(1500),
    exists: new FormControl(5)
  });*/

  myForm: FormGroup = this.formBulider.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [, [Validators.required, Validators.min(0)]],
    exists: [, [Validators.required, Validators.min(0)]]
  });

  constructor(private formBulider: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Aguacate',
      price: 14.50,
    });
  }

  isFieldValid(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  save(): void {
    if (this.myForm.invalid) {
      console.error('Error');
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm);
    this.myForm.reset();
  }
}
