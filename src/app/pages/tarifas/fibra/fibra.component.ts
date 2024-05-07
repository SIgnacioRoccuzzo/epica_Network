import { Component, OnInit, inject } from '@angular/core';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';

@Component({
  selector: 'app-fibra',
  templateUrl: './fibra.component.html',
  styleUrls: ['./fibra.component.css']
})
export class FibraComponent implements OnInit {
  tarifasFibra: Tarifas[] = [];
  tarifasService = inject(TarifasService);
  loading = true; // Indicador de carga
  errorMessage = ''; // Mensaje de error

  async ngOnInit() {
    try {
      const response = await this.tarifasService.getBytype('Fibra');
      this.tarifasFibra = response;
    } catch (error) {
      this.errorMessage = 'Error al cargar tarifas de fibra. Inténtalo de nuevo más tarde.';
      console.error(error);
    } finally {
      this.loading = false; // Finaliza la carga
    }
  }

  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=%C2%A1Hola%2C%20Luis!%20Ayud%C3%A1me%20a%20comparar%20mis%20tarifas%20de%20mis%20servicios%20de%20internet%20y%20telefon%C3%ADa.';
}
