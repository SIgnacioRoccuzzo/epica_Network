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

  tarifa: Tarifas | null = null; // Aquí guardaremos la tarifa específica

  constructor() { }

  async ngOnInit() {
    try {
      // Obtener el parámetro "data" de la URL
      const data = this.route.snapshot.paramMap.get('data');

      if (data) {
        // Obtener las tarifas con base en el valor de "data"
        const response = await this.tarifasService.getByData(data);
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
