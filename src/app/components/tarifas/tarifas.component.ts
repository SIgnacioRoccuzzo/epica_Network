import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrl: './tarifas.component.css'
})
export class TarifasComponent {
  tarifas: Tarifas[] = [];
  tarifasService = inject(TarifasService);
  router = inject(Router);
  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=¡Hola! Necesito información sobre tarifas.';

  async ngOnInit() {
    try {
      const response = await this.tarifasService.getAll();
      this.tarifas = response;
    } catch (error) {
      console.error(error);
    }
  }
}
