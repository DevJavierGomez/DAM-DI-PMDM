import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AbilityItem } from '../../interface/ability-list-response';
import { AbilityService } from './../../service/ability-service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { AbilityModal } from '../ability-modal/ability-modal';
import { AbilityItemComponent } from '../ability-item-component/ability-item-component';

@Component({
  imports: [AbilityItemComponent],
  selector: 'app-ability-list-component',
  styleUrl: './ability-list-component.css',
  templateUrl: './ability-list-component.html',
})
export class AbilityListComponent implements OnInit {

  AbilityService = inject(AbilityService);
  AbilityList = signal<AbilityItem[]>([]);
  private modalAbilityService = inject(NgbModal);

  ngOnInit(): void {
    this.AbilityService.getAll().subscribe(resp => {
      this.AbilityList.set(resp.results)
    });
  }

  openAbilityModal(id: string) {
    this.AbilityService.getOne(id).subscribe(resp => {

      const modalRef = this.modalAbilityService.open(AbilityModal);
      modalRef.componentInstance.AbilityDetail = resp;
    });
  }

}
