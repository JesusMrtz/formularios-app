import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {
  @ViewChild('miForm') miForm!: NgForm;
  initialForm = {
    product: 'Laptop',
    price: 0,
    exists: 10
  };

  constructor() { }

  ngOnInit(): void {
  }

  validProduct(): boolean {
    return this.miForm?.controls.product?.invalid && this.miForm?.controls.product?.touched;
  }

  validPrice(): boolean {
    return this.miForm?.controls.price?.touched && this.miForm?.controls.price?.value <= 0;
  }

  save(): void {
    // console.log(this.miForm);
    console.log('Posteo correcto');

    // Resetear el form
    // this.miForm.resetForm();

    // Resetar el form con valores
    this.miForm.resetForm({
      exists: 0
    });
  }

}
