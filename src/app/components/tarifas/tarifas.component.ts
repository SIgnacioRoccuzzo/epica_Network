import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';

@Component({
  selector: 'app-tarifas',
  templateUrl: './tarifas.component.html',
  styleUrls: ['./tarifas.component.css']
})
export class TarifasComponent implements OnChanges {
  @Input() tipo: string | null = null;
  checklist: { [key: string]: string[] } = {};
  tarifas: Tarifas[] = [];

  tarifasService = inject(TarifasService);
  router = inject(Router);
  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=¡Hola! Necesito información sobre tarifas.';

  constructor() { }

  ngOnInit() {
    this.cargarTarifas();
    this.checklist = {
      'Móvil': [
        'Sin permanencia ni penalizaciones.',
        'Llamadas ilimitadas.',
        'Cobertura en todo el territorio nacional.',
      ],
      'Fibra': [
        'Sin coste de línea fija, sin cuotas extras.',
        'Con o sin permanencia, tú eliges.',
        'Velocidad simétrica según disponibilidad geográfica.',
      ],
      'Fibra y Móvil': [
        'Sin cuota de línea fija.',
        'Velocidad simétrica según disponibilidad geográfica.',
        'Llamadas ilimitadas.',
      ],
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tipo']) {
      this.cargarTarifas();
    }
  }

  async cargarTarifas() {
    try {
      if (this.tipo) {
        this.tarifas = await this.tarifasService.getByType(this.tipo);
      } else {
        this.tarifas = await this.tarifasService.getAll();
      }
    } catch (error) {
      console.error('Error al obtener las tarifas:', error);
    }
  }
  trackByTarifas(index: number, tarifa: any): any {
    return tarifa.id; // Asegúrate de que cada 'tarifa' tenga una propiedad 'id' única.
  }

  trackByChecklistItems(index: number, item: any): any {
    return item.id; // Similarmente, asegúrate de que cada 'item' en el checklist tenga un ID único.
  }
  getDetailLink(tarifa: any): string {
    switch (tarifa.type) {
      case 'Fibra':
        return `/fibra/detalle/${tarifa.speed}`;
      case 'Fibra y Móvil':
        return `/fibra-y-movil/detalle/${tarifa.name}`;
      case 'Móvil':
        return `/movil/detalle/${tarifa.gb}`;
      case 'TV':
        return `/tv/detalle/${tarifa.name}`;
      default:
        return '/';
    }
  }

}
