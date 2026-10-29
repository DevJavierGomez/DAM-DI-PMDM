import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomProgressBarComponent } from './components/custom-progress-bar-component/custom-progress-bar-component';

@Component({
  imports: [RouterOutlet, CustomProgressBarComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('UD2-08-Barra-de-progreso-personalizable');
}
