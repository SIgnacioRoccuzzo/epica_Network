import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'epica';
  isInicioPage = false;
  router = inject(Router)

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Determinar si la ruta actual es el menú (puedes ajustar esta lógica según tu enrutamiento)
        this.isInicioPage = event.url === '/inicio'; // Cambia esto por la ruta de tu menú
      }
    });
  }
}
