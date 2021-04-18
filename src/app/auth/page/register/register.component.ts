import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.completeName)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.isMago]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  },
  {
    validators: [this.validatorService.sameFields('password', 'confirmPassword')]
  });

  get emailErrors(): string {
    const errors = this.myForm.get('email')?.errors;

    if (errors?.required) {
      return 'Email es requerido';
    } else if (errors?.pattern) {
      return 'No es un formato de email válido';
    } else if (errors?.emailTomado) {
      return 'El email ya existe en la base de datos';
    }

    return '';
  }

  constructor( private formBuilder: FormBuilder, private validatorService: ValidatorService,
               private emailValidator: EmailValidatorService ) { }

  ngOnInit(): void {
    this.myForm.reset({
      name: 'Jesus Martinez',
      email: 'test1@test.com',
      username: 'Mago2420',
      password: '123456',
      confirmPassword: '123456'
    });
  }

  isFieldValid(field: string): boolean | undefined {
    return this.myForm.get(field)?.invalid && this.myForm.get(field)?.touched;
  }

  emailRequired(): boolean | undefined {
    return this.myForm.get('email')?.errors?.required && this.myForm.get('email')?.touched;
  }

  ifEmail(): boolean | undefined {
    return this.myForm.get('email')?.errors?.pattern && this.myForm.get('email')?.touched;
  }

  emailExists(): boolean | undefined {
    return this.myForm.get('email')?.errors?.emailTomado && this.myForm.get('email')?.touched;
  }

  save(): void {
    this.myForm.markAllAsTouched();
    console.log(this.myForm.value);
  }

}
