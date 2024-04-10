import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarifaMovilComponent } from './pages/tarifas/tarifa-movil/tarifa-movil.component';
import { FibraComponent } from './pages/tarifas/fibra/fibra.component';
import { FibraMovilComponent } from './pages/tarifas/fibra-movil/fibra-movil.component';
import { TvComponent } from './pages/tarifas/tv/tv.component';
import { AyudaComponent } from './pages/epicaNetwork/ayuda/ayuda.component';
import { ContactoComponent } from './pages/epicaNetwork/contacto/contacto.component';
import { SobreEpicaComponent } from './pages/epicaNetwork/sobre-epica/sobre-epica.component';

const routes: Routes = [
  { path: 'fibra', component: FibraComponent },
  { path: 'fibra-y-movil', component: FibraMovilComponent },
  { path: 'movil', component: TarifaMovilComponent },
  { path: 'tv', component: TvComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobre-epica', component: SobreEpicaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
