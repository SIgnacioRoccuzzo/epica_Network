import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarifaMovilComponent } from './pages/tarifas/tarifa-movil/tarifa-movil.component';
import { FibraComponent } from './pages/tarifas/fibra/fibra.component';
import { FibraMovilComponent } from './pages/tarifas/fibra-movil/fibra-movil.component';
import { TvComponent } from './pages/tarifas/tv/tv.component';
import { AyudaComponent } from './pages/epicaNetwork/ayuda/ayuda.component';
import { ContactoComponent } from './pages/epicaNetwork/contacto/contacto.component';
import { SobreEpicaComponent } from './pages/epicaNetwork/sobre-epica/sobre-epica.component';
import { FibraDetailsComponent } from './pages/tarifas/fibra/fibra-detail/fibra-detail.component';
import { MovilDetailComponent } from './pages/tarifas/tarifa-movil/movil-detail/movil-detail.component';
import { FibraMovilDetailComponent } from './pages/tarifas/fibra-movil/fibra-movil-detail/fibra-movil-detail.component';
import { TvDetailComponent } from './pages/tarifas/tv/tv-detail/tv-detail.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'; // Un componente para rutas no encontradas
import { SubmenuComponent } from './components/submenu/submenu.component';

const routes: Routes = [
  // Redireccionar a la página de inicio para la ruta raíz
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  // Página de inicio
  { path: 'inicio', component: InicioComponent },

  // Rutas de tarifas
  { path: 'fibra', component: FibraComponent },
  { path: 'fibra/:speed', component: FibraDetailsComponent },
  { path: 'fibra-y-movil', component: FibraMovilComponent },
  { path: 'fibra-y-movil/:gb', component: FibraMovilDetailComponent },
  { path: 'movil', component: TarifaMovilComponent },
  { path: 'movil/:gb', component: MovilDetailComponent },
  { path: 'tv', component: TvComponent },
  { path: 'tv/:gb', component: TvDetailComponent },
  { path: 'detalle/:name', component: SubmenuComponent },

  // Rutas generales
  { path: 'ayuda', component: AyudaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-epica', component: SobreEpicaComponent },

  // Redirección para rutas no encontradas
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
