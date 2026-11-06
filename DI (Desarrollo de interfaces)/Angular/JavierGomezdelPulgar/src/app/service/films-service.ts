import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsListResponse } from '../interfaces/films-list-response';
import { FilmsDetailResponse } from '../interfaces/films-detail-response';

@Service()
export class FilmsService {
  private http = inject(HttpClient);

  getAll(): Observable<FilmsListResponse> {
    return this.http.get<FilmsListResponse>('https://swapi.dev/api/films');
  }

  getOne(id: string): Observable<FilmsDetailResponse> {
    return this.http.get<FilmsDetailResponse>(`https://swapi.dev/api/films/${id}`);
  }
}
