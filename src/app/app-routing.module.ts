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
import { InicioComponent } from './pages/inicio/inicio.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },

  // Rutas de tarifas
  { path: 'fibra', component: FibraComponent },
  { path: 'fibra/detalle/:speed', component: FibraDetailsComponent },
  { path: 'fibra-y-movil', component: FibraMovilComponent },
  { path: 'fibra-y-movil/detalle/:gb', component: FibraMovilDetailComponent },

  { path: 'movil', component: TarifaMovilComponent },
  { path: 'movil/detalle/:gb', component: MovilDetailComponent }, // Detalle de Móvil por GB

  { path: 'tv', component: TvComponent },
  { path: 'tv/detalle/:name', component: SubmenuComponent }, // Detalle de TV por nombre

  // Rutas generales
  { path: 'tarifas', component: TarifasComponent },
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

