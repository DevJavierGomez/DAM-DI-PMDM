import { Routes } from '@angular/router';
import { RegisterFormComponent } from './components/register-form-component/register-form-component';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: 'registro', component: RegisterFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '/registro' },
  {path: '**', component: NotFound}
];
