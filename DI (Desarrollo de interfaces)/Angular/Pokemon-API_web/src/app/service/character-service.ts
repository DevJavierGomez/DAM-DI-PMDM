import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListResponse } from '../interface/character-list-response';
import { CharacterDetailResponse } from '../interface/character-detail-response';

@Service()
export class CharacterService {

  private http = inject(HttpClient);

  getAll(): Observable<CharacterListResponse> {
    return this.http.get<CharacterListResponse>('https://pokeapi.co/api/v2/pokemon/');
  }

  getOne(id: string): Observable<CharacterDetailResponse> {
    return this.http.get<CharacterDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
