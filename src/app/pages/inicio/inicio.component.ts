import { Component, ElementRef, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  @Input() tipo: string | null = null;
  checklist: { [key: string]: string[] } = {};
  tarifas: Tarifas[] = [];
  tarifasFiltradas: Tarifas[] = [];
  filtroActual: string = 'Fibra y Móvil';
  tituloSubtitulo: string = 'Todos nuestros planes incluyen tecnología 4G+';
  tarifasService = inject(TarifasService);
  router = inject(Router);
  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=¡Hola! Necesito información sobre tarifas.';


  constructor(private elRef: ElementRef) { }

  async ngOnInit() {
    try {
      // Obtener tarifas según el tipo (si se proporciona) o todas las tarifas si no hay tipo
      if (this.tipo) {
        this.tarifas = await this.tarifasService.getByType(this.tipo);
      } else {
        this.tarifas = await this.tarifasService.getAll();
      }

      // Checklist con beneficios específicos para cada tipo de tarifa
      this.checklist = {
        'Móvil': [
          'Sin permanencia.',
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

      // Filtrar tarifas según el filtro actual
      this.filtrarTarifas(this.filtroActual);

    } catch (error) {
      console.error('Error al obtener las tarifas:', error);
    }
  }

  filtrarTarifas(filtro: string) {
    this.filtroActual = filtro;

    // Cambiar el título según el filtro seleccionado
    if (filtro === 'Móvil') {
      this.tituloSubtitulo = 'Todos nuestros planes incluyen tecnología 4G';
    } else if (filtro === 'Fibra') {
      this.tituloSubtitulo = 'Todos nuestros planes incluyen la más alta tecnología';
    } else {
      this.tituloSubtitulo = 'Todos nuestros planes incluyen tecnología 4G+';
    }

    if (filtro === 'todos') {
      this.tarifasFiltradas = this.tarifas;
    } else {
      this.tarifasFiltradas = this.tarifas.filter(
        (tarifa) => tarifa.type.toLowerCase() === filtro.toLowerCase()
      );
    }
  }
}


