import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list-component/people-list-component';

export const routes: Routes = [
  {path: 'People-list', component: PeopleListComponent},
  {path: '', pathMatch: 'full', redirectTo: '/People-list'}
];
