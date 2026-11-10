import { Routes } from '@angular/router';
import { FormControlComponent } from './components/form-control-component/form-control-component';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  {path: 'formulario', component: FormControlComponent},
  {path: '', pathMatch: 'full', redirectTo: '/formulario'},
  {path: '**', component: NotFound}
];
