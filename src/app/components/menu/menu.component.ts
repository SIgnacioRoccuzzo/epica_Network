import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';

interface MenuSection {
  label: string;
  route: string;
  submenuType: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  router = inject(Router)
  isMenuOpen = false;
  subMenu = false;
  submenus: { [key: string]: Tarifas[] } = {};
  activeSubmenu: string | null = null;
  loading = true; // Indicador de carga
  error = '';     // Manejo de errores
  tarifasService = inject(TarifasService)

  firstMenu: MenuSection[] = [
    { label: 'Fibra y Móvil', route: '/fibra-y-movil', submenuType: 'fibra y movil' },
    { label: 'Móvil', route: '/movil', submenuType: 'movil' },
    { label: 'Fibra', route: '/fibra', submenuType: 'fibra' },
    { label: 'TV', route: '/tv', submenuType: '' },
  ];
  secondMenu = [
    { label: 'Sobre Epica', route: 'sobre-epica' },
    /*    { label: 'Ayuda', route: 'ayuda' }, */
    { label: 'Contacto', route: 'contacto' },
  ]
  async ngOnInit() {
    try {
      // Esperar a que la promesa se resuelva para obtener tarifas
      const tarifas = await this.tarifasService.getAll();
      // Agrupar tarifas por tipo para crear submenús
      this.submenus = tarifas.reduce((acc: { [x: string]: any[]; }, tarifa: { type: string | number; }) => {
        if (!acc[tarifa.type]) {
          acc[tarifa.type] = [];
        }
        acc[tarifa.type].push(tarifa);
        return acc;
      }, {});
    } catch (err) {
      this.error = 'Error al cargar las tarifas.';
      console.error(err);
    } finally {
      this.loading = false; // Detener indicador de carga
    }
  }
  getSubmenuItems(type: string): Tarifas[] {
    return this.submenus[type] || []; // Devolver elementos o lista vacía
  }

  toggleSubmenu(submenuType: string): void {
    this.activeSubmenu = this.activeSubmenu === submenuType ? null : submenuType;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.router.navigate([], { fragment: sectionId });
    }
  }
}
