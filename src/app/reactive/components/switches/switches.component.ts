import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    gender: ['M', [Validators.required]],
    notifications: [true],
    terms: [false, [Validators.requiredTrue]]
  });

  person = {
    gender: 'F',
    notifications: true
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  save(): void {
    const formValue = this.myForm.value;
    this.person = formValue;
    console.log(formValue);
  }

}
