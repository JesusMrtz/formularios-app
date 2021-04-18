import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {
  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.formBuilder.array([
      ['Tokyo Ghoul', [Validators.required]],
      ['Dragon ball z', [Validators.required]]
    ])
  });

  newFavorite: FormControl = this.formBuilder.control('', Validators.required);

  get favoritesArray(): FormArray{
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  isFieldValid(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  addFavorite(): void {
    if (this.newFavorite.value.trim() === '') {
      this.newFavorite.reset('');
      this.newFavorite.markAllAsTouched();
      return;
    }

    this.favoritesArray.push(this.formBuilder.control(this.newFavorite.value, [Validators.required]));
    this.newFavorite.reset();
  }

  deleteFavorite(index: number): void {
    this.favoritesArray.removeAt(index);
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
