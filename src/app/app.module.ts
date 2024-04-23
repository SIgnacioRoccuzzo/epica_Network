import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FibraComponent } from './pages/tarifas/fibra/fibra.component';
import { TarifaMovilComponent } from './pages/tarifas/tarifa-movil/tarifa-movil.component';
import { TvComponent } from './pages/tarifas/tv/tv.component';
import { SobreEpicaComponent } from './pages/epicaNetwork/sobre-epica/sobre-epica.component';
import { AyudaComponent } from './pages/epicaNetwork/ayuda/ayuda.component';
import { ContactoComponent } from './pages/epicaNetwork/contacto/contacto.component';
import { FibraMovilComponent } from './pages/tarifas/fibra-movil/fibra-movil.component';
import { register } from 'swiper/element/bundle';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';


register()


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FibraComponent,
    TarifaMovilComponent,
    TvComponent,
    SobreEpicaComponent,
    AyudaComponent,
    ContactoComponent,
    FibraMovilComponent,
    InicioComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [

  ]
})
export class AppModule { }
