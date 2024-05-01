import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';
import { UrlFormatterService } from 'src/app/services/url-formatter.service';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.css'
})
export class SubmenuComponent {
  @Input() items: Tarifas[] = []
  selectedItem: Tarifas | null = null;
  private router = inject(Router)
  private urlFormatter = inject(UrlFormatterService)
  isMobile = false;

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

    if (item.type === 'fibra') {
      return ['/fibra', item.data];
    } else if (item.type === 'fibra y movil') {
      return ['/fibra-y-movil', item.data];
    } else if (item.type === 'movil') {
      return ['/movil', item.data];
    } else {
      return ['/tv', item.data];
    }
  }
  navigateToTarifa(data: string) {
    const friendlyName = this.urlFormatter.toUrlFriendly(data);
    this.router.navigateByUrl(`/fibra/${friendlyName}`);
  }


  selectItem(item: Tarifas): void {
    this.selectedItem = item;
  }
}
