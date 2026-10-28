import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register-form',
  styleUrl: './register-form-component.css',
  templateUrl: './register-form-component.html',
})
export class RegisterFormComponent {

  nombre = '';
  apellidos = '';
  nif = '';
  emailForm = '';
  telefono = '';
  sexo = '';
  comoConocio = '';
  password = '';
  confirmarPassword = '';
  terminos = false;

  sendForm() {
    console.log({
      nombre: this.nombre,
      apellidos: this.apellidos,
      nif: this.nif,
      email: this.emailForm,
      telefono: this.telefono,
      sexo: this.sexo,
      comoConocio: this.comoConocio,
      password: this.password,
      confirmarPassword: this.confirmarPassword,
      terminos: this.terminos
    });
  }
}
