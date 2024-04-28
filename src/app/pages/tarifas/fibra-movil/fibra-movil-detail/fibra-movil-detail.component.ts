import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';


@Component({
  selector: 'app-fibra-movil-detail',
  standalone: true,
  imports: [],
  templateUrl: './fibra-movil-detail.component.html',
  styleUrl: './fibra-movil-detail.component.css'
})
export class FibraMovilDetailComponent {
  planData: any | null = null;
  planDetails: Tarifas[];

  tarifasService = inject(TarifasService)

  constructor() {
    this.planDetails = [];
  }

  async ngOnInit() {
    try {
      const response = await this.tarifasService.getBytype('fibra');
      this.planData = response;
    } catch (error) {
      console.log(error);
    }
  }
}
