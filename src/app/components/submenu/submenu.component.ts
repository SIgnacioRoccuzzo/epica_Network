import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';


@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})

export class SubmenuComponent {
  @Input() items: Tarifas[] = []
  selectedItem: Tarifas | null = null;
  isSubmenuVisible = true;


  constructor(
    private route: ActivatedRoute,
    private tarifasService: TarifasService
  ) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name'); // Obtener el parámetro de la ruta
    if (name) {
      this.tarifasService.getAll().then((tarifas) => {
        this.items = tarifas.filter((t: { name: string; }) => t.name === name); // Buscar el item por nombre
      });
    }
  }
  getRouterLink(item: Tarifas): string[] {

    if (item.type === 'Fibra') {
      return ['/fibra/detalle', item.speed];
    } else if (item.type === 'Fibra y Móvil') {
      return ['/fibra-y-movil/detalle', item.gb];
    } else if (item.type === 'Móvil') {
      return ['/movil/detalle', item.gb];
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
