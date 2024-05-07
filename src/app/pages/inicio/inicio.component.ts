import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  tarifas: Tarifas[]; // Todas las tarifas
  tarifasFiltradas: Tarifas[]; // Tarifas filtradas
  filtroActual: string = 'Fibra y Móvil';

  tarifasService = inject(TarifasService);
  router = inject(Router);
  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=¡Hola! Necesito información sobre tarifas.';

  constructor() {
    this.tarifas = [];
    this.tarifasFiltradas = [];
  }

  async ngOnInit() {
    try {
      const response = await this.tarifasService.getAll();
      this.tarifas = response;


      this.filtrarTarifas(this.filtroActual);
    } catch (error) {
      console.error(error);
    }
  }

  filtrarTarifas(filtro: string) {
    this.filtroActual = filtro;

    if (filtro === 'todos') {
      this.tarifasFiltradas = this.tarifas;
    } else {

      this.tarifasFiltradas = this.tarifas.filter(
        (tarifa) => tarifa.type.toLowerCase() === filtro.toLowerCase()
      );
    }
  }
}
