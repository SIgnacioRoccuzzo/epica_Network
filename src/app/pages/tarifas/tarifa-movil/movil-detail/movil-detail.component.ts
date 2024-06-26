import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';



@Component({
  selector: 'app-movil-detail',
  templateUrl: './movil-detail.component.html',
  styleUrl: './movil-detail.component.css'
})
export class MovilDetailComponent {
  private tarifasService = inject(TarifasService);
  private route = inject(ActivatedRoute);
  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=%C2%A1Hola%2C%20Luis!%20Ayud%C3%A1me%20a%20comparar%20mis%20tarifas%20de%20mis%20servicios%20de%20internet%20y%20telefon%C3%ADa.';
  tarifa: Tarifas | null = null; // Aquí guardaremos la tarifa específica

  constructor() { }

  async ngOnInit() {
    try {
      // Obtener el parámetro "data" de la URL
      const data = this.route.snapshot.paramMap.get('gb');

      if (data) {
        // Obtener las tarifas con base en el valor de "data"
        const response = await this.tarifasService.getByGb(data);
        if (response.length > 0) {
          this.tarifa = response[0]; // Tomamos la primera tarifa que coincide
        } else {
          console.error('No se encontró tarifa con ese valor de data');
        }
      }
    } catch (error) {
      console.error('Error al obtener la tarifa por data:', error);
    }
  }
}
