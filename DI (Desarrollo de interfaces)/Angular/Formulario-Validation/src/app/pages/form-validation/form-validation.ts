import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-validation',
  styleUrl: './form-validation.css',
  templateUrl: './form-validation.html',
})
export class FormValidation {
  registerForm = new FormGroup({

    nombre: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')
    ]),
    apellidos: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')
    ]),
    dniNie: new FormControl('', [
      Validators.required,
      Validators.pattern('^([0-9]{8}[A-Za-z]|[XYZxyz][0-9]{7}[A-Za-z])$')
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.pattern('^(\\+34)?[67][0-9]{8}$')
    ]),

    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(15),
      Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$')
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$')
    ]),

    curso: new FormControl('', Validators.required),
    horas: new FormControl('', [
      Validators.required,
      Validators.min(2),
      Validators.max(40)
    ]),
    codigoPostal: new FormControl('', [
      Validators.required,
      Validators.pattern('^(0[1-9]|[1-4][0-9]|5[0-2])[0-9]{3}$')
    ])
  });

  isInvalidField(field: string) {
    return this.registerForm.get(field)?.invalid && (this.registerForm.get(field)?.dirty
    || this.registerForm.get(field)?.touched);
  }
}
