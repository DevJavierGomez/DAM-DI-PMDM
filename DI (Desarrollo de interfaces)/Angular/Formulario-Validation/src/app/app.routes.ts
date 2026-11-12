import { Routes } from '@angular/router';
import { FormValidation } from './pages/form-validation/form-validation';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: FormValidation},
  {path: '**', component: NotFoundPage}
];
