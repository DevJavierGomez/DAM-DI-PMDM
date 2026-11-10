import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-control-component',
  styleUrl: './form-control-component.css',
  templateUrl: './form-control-component.html',
})
export class FormControlComponent {

form = new FormGroup({
  title: new FormControl(''),
  description: new FormControl(''),
  category: new FormControl(''),
  tags: new FormControl(''),
  email: new FormControl(''),
  publishNow: new FormControl(false),
  publishDate: new FormControl('')
});

  sendForm() {
    console.log(this.form.value);
  }

}
