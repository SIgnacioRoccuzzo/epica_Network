import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';


@Component({
  selector: 'app-fibra-details',
  templateUrl: './fibra-detail.component.html',
  styleUrls: ['./fibra-detail.component.css']
})
export class FibraDetailsComponent implements OnInit {
  private tarifasService = inject(TarifasService);
  private route = inject(ActivatedRoute);

  tarifa: Tarifas | null = null; // Aquí guardaremos la tarifa específica

  constructor() { }

  async ngOnInit() {
    try {
      // Obtener el parámetro "data" de la URL
      const speed = this.route.snapshot.paramMap.get('speed');

      if (speed) {
        // Obtener las tarifas con base en el valor de "data"
        const response = await this.tarifasService.getBySpeed(speed);
        if (response.length > 0) {
          this.tarifa = response[0]; // Tomamos la primera tarifa que coincide
        } else {
          console.error('No se encontró tarifa con ese valor de speed');
        }
      }
    } catch (error) {
      console.error('Error al obtener la tarifa por speed:', error);
    }
  }

}
