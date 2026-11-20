import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { AbilityItem, AbilityListResponse } from '../interface/ability-list-response';
import { AbilityDetailResponse } from '../interface/ability-detail-response';

@Service()
export class AbilityService {

  private http = inject(HttpClient);

  getAll(): Observable<AbilityListResponse> {
    return this.http.get<AbilityListResponse>('https://pokeapi.co/api/v2/ability/');
  }

  getOne(id: string): Observable<AbilityDetailResponse> {
    return this.http.get<AbilityDetailResponse>(`https://pokeapi.co/api/v2/ability/${id}`);
  }

  customAbilities = signal<AbilityItem[]>([]);

  addAbility(newAbility: AbilityItem) {
    this.customAbilities.update((currentList) => [...currentList, newAbility]);
  }
}
