import { Component, OnInit, inject } from '@angular/core';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';

@Component({
  selector: 'app-fibra-details',
  templateUrl: './fibra-detail.component.html',
  styleUrls: ['./fibra-detail.component.css']
})
export class FibraDetailsComponent implements OnInit {
  planData: string | null = null;
  planDetails: Tarifas[] | undefined;
  tarifasService = inject(TarifasService)

  async ngOnInit() {
    try {
      const response = await this.tarifasService.getByData('data');
      this.planDetails = response;
    } catch (error) {
      console.log(error);
    }
  }
}
