import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {
  @Input() items: Tarifas[] = [];
  selectedItem: Tarifas | null = null;
  isSubmenuVisible = true;

  constructor(
    private route: ActivatedRoute,
    private tarifasService: TarifasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.scrollToTopOnNavigation();
    this.route.paramMap.subscribe(() => {
      this.loadTarifasByName();
    });
  }

  scrollToTopOnNavigation(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  loadTarifasByName(): void {
    const name = this.route.snapshot.paramMap.get('name'); // Obtener el parámetro de la ruta
    if (name) {
      this.tarifasService.getAll().then((tarifas) => {
        this.items = tarifas.filter((t: Tarifas) => t.name === name); // Buscar el item por nombre
      });
    }
  }

  getRouterLink(item: Tarifas): string[] {
    if (item.type === 'Fibra') {
      return ['/fibra/detalle', item.speed ?? '']; // Manejar undefined
    } else if (item.type === 'Fibra y Móvil') {
      return ['/fibra-y-movil/detalle', item.gb ?? '']; // Manejar undefined
    } else if (item.type === 'Móvil') {
      return ['/movil/detalle', item.gb ?? '']; // Manejar undefined
    } else {
      return ['/tv', item.name];
    }
  }

  toggleSubmenu(): void {
    this.isSubmenuVisible = !this.isSubmenuVisible;
  }

  selectItem(item: Tarifas): void {
    this.selectedItem = item;
  }
}
