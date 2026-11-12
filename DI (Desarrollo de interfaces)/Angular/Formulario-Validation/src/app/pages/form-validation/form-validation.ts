import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-form-validation',
  styleUrl: './form-validation.css',
  templateUrl: './form-validation.html',
})
export class FormValidation {
  registerForm = new FormGroup({

    nombre: new FormGroup('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')]),

    Apellidos: new FormGroup('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')]),

    DNI: new FormGroup('', [Validators.required, Validators.pattern('^([0-9]{8}[A-Za-z]|[XYZxyz][0-9]{7}[A-Za-z])$')]),

    Telefono: new FormGroup('', [Validators.required, Validators.pattern('^(\+34)?[67][0-9]{8}$')]),

    NombreUsuario: new FormGroup('', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern('^[a-zA-Z][a-zA-Z0-9_]*$')]),

    Email: new FormGroup('', [Validators.required, Validators.email]),

    password: new FormGroup('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$')]),


  })
}
