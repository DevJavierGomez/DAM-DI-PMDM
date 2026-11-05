import { PeoplelistResponse } from './../interfaces/people-list-response';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleDetailResponse } from '../interfaces/people-detail-response';

@Injectable({providedIn: 'root'})
export class PeopleService {

  http = inject(HttpClient);

  getAll(): Observable<PeoplelistResponse> {
    return this.http.get<PeoplelistResponse>(`https://swapi.dev/api/people`);
  }

  getOne(id: string): Observable<PeopleDetailResponse> {
    return this.http.get<PeopleDetailResponse>(`https://swapi.dev/api/people/${id}`);
  }

}
