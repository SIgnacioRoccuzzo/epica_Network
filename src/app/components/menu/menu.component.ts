import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  router = inject(Router);
  isMenuOpen = false;
  subMenu = false;
  submenus: { [key: string]: Tarifas[] } = {};
  activeSubmenu: string | null = null;
  loading = true; // Indicador de carga
  error = '';     // Manejo de errores
  tarifasService = inject(TarifasService);
  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=¡Hola! Necesito información sobre tarifas.';

  firstMenu: MenuSection[] = [
    { label: 'Fibra y Móvil', route: '/fibra-y-movil', submenuType: 'Fibra y Móvil' },
    { label: 'Móvil', route: '/movil', submenuType: 'Móvil' },
    { label: 'Fibra', route: '/fibra', submenuType: 'Fibra' },
    { label: 'TV', route: '/tv', submenuType: '' },
  ];


  async ngOnInit() {
    try {
      const tarifas = await this.tarifasService.getAll();

      this.submenus = tarifas.reduce((acc: { [x: string]: any[]; }, tarifa: { type: string | number; }) => {
        acc[tarifa.type] = acc[tarifa.type] || [];
        acc[tarifa.type].push(tarifa);
        return acc;
      }, {});
    } catch (err) {

      this.error = 'Error al cargar las tarifas.';
      console.error(err);
    } finally {

      this.loading = false;
    }
  }

  getSubmenuItems(type: string): Tarifas[] {
    return this.submenus[type] || [];
  }

  toggleSubmenu(submenuType: string): void {
    this.activeSubmenu = this.activeSubmenu === submenuType ? null : submenuType;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleMenuItemClick(submenuType?: string): void {
    this.toggleSubmenu(submenuType || '');
    this.isMenuOpen = false;  // Close the menu
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.router.navigate([], { fragment: sectionId });
    }
  }

  trackByItems(index: number, item: any): number {
    return item.id;
  }
}
