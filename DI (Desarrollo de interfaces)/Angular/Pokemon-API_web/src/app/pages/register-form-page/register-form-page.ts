import { AbilityService } from './../../service/ability-service';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register-form-page',
  styleUrl: './register-form-page.css',
  templateUrl: './register-form-page.html',
})
export class RegisterFormPage {

  private AbilityService = inject(AbilityService);

  registerForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    is_main_series: new FormControl(false),
    generation: new FormControl('', Validators.required),
    show_effect: new FormControl('', [Validators.required, Validators.minLength(10)]),
    pokemonName: new FormControl('', Validators.required)
  });

  isInvalidField(field: keyof typeof this.registerForm.controls) {
    const control = this.registerForm.controls[field];
    return control.invalid && (control.dirty || control.touched);
  }

  sendform() {
    debugger;
    console.log(this.registerForm.value)
  }

}
