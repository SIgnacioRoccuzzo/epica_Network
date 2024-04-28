import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';
import { UrlFormatterService } from 'src/app/services/url-formatter.service';


@Component({
  selector: 'app-fibra',
  templateUrl: './fibra.component.html',
  styleUrls: ['./fibra.component.css']
})
export class FibraComponent {
  tarifasFibra: Tarifas[];
  urlFormatterService = inject(UrlFormatterService)
  tarifasService = inject(TarifasService)
  router = inject(Router)
  constructor() {
    this.tarifasFibra = [];
  }

  async ngOnInit() {
    try {
      const response = await this.tarifasService.getBytype('fibra');
      this.tarifasFibra = response;
    } catch (error) {
      console.log(error);
    }
  }


  navigateToDetail(data: string) {
    const urlFriendlyName = this.urlFormatterService.toUrlFriendly(data); // Convertir a URL-friendly
    this.router.navigate(['/fibra', urlFriendlyName]); // Usar el nombre amigable en la navegación
  }


  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=%C2%A1Hola%2C%20Luis!%20Ayud%C3%A1me%20a%20comparar%20mis%20tarifas%20de%20mis%20servicios%20de%20internet%20y%20telefon%C3%ADa.';
}



