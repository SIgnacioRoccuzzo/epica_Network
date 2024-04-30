import { Component, inject } from '@angular/core';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';



@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  tarifasTv: Tarifas[];
  tarifasService = inject(TarifasService);
  constructor() {
    this.tarifasTv = [];
  }

  async ngOnInit() {
    try {
      const response = await this.tarifasService.getBytype('tv');
      this.tarifasTv = response;
    } catch (error) {
      console.log(error);
    }
  }

  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=%C2%A1Hola%2C%20Luis!%20Ayud%C3%A1me%20a%20comparar%20mis%20tarifas%20de%20mis%20servicios%20de%20internet%20y%20telefon%C3%ADa.';

}
