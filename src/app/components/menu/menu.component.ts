import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  /*   tarifas: Tarifas
   tarifasService = inject(TarifasService) */
  router = inject(Router)
  isMenuOpen = false;
  firstMenu = [

    { label: 'Fibra y Móvil', route: 'fibra-y-movil' },
    { label: 'Fibra', route: 'fibra' },
    { label: 'Móvil', route: 'movil' },
    { label: 'TV', route: 'tv' },

  ];
  secondMenu = [
    { label: 'Sobre Epica', route: 'sobre-epica' },
    /*    { label: 'Ayuda', route: 'ayuda' }, */
    { label: 'Contacto', route: 'contacto' },
  ]

  /* 
    constructor(private router: Router) {
      this.tarifas = {
        name: '',
        type: '',
        data: '',
        price: 0
      }
    }
    async ngOnInit() {
      this.tarifas = await this.tarifasService.getByData('data');
      console.log(this.tarifas.data)
    } */

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
