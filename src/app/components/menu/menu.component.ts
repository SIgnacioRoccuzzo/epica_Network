import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


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
  isMenuOpen = false;

  constructor(private router: Router) { }


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
