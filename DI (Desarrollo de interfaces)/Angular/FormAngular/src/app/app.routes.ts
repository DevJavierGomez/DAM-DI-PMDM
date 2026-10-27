import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form-component/register-form-component';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  { path: 'registro', component: RegisterFormComponent },
  { path: 'formulario', component: RegisterFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '/registro' },
  { path: '**', component: NotFoundPage }
];
