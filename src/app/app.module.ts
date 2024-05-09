import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Componentes y Páginas
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FibraComponent } from './pages/tarifas/fibra/fibra.component';
import { TarifaMovilComponent } from './pages/tarifas/tarifa-movil/tarifa-movil.component';
import { TvComponent } from './pages/tarifas/tv/tv.component';
import { SobreEpicaComponent } from './pages/epicaNetwork/sobre-epica/sobre-epica.component';
import { AyudaComponent } from './pages/epicaNetwork/ayuda/ayuda.component';
import { ContactoComponent } from './pages/epicaNetwork/contacto/contacto.component';
import { FibraMovilComponent } from './pages/tarifas/fibra-movil/fibra-movil.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FibraDetailsComponent } from './pages/tarifas/fibra/fibra-detail/fibra-detail.component';
import { SubmenuComponent } from './components/submenu/submenu.component';


// Registro de librerías externas
import { register } from 'swiper/element/bundle';
import { FibraMovilDetailComponent } from './pages/tarifas/fibra-movil/fibra-movil-detail/fibra-movil-detail.component';
import { MovilDetailComponent } from './pages/tarifas/tarifa-movil/movil-detail/movil-detail.component';
import { TvDetailComponent } from './pages/tarifas/tv/tv-detail/tv-detail.component';
import { TarifasComponent } from './components/tarifas/tarifas.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getStorage, provideStorage } from '@angular/fire/storage';


register();

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
    CarrouselComponent,
    FibraDetailsComponent,
    SubmenuComponent,
    FibraMovilDetailComponent,
    MovilDetailComponent,
    TvDetailComponent,
    TarifasComponent


  ],
  imports: [
    BrowserModule, // Necesario para el AppModule
    CommonModule, // Necesario para directivas como *ngFor
    AppRoutingModule, // Importa las rutas de la aplicación
    HttpClientModule, // Para llamadas HTTP
    RouterModule, provideFirebaseApp(() => initializeApp({ "projectId": "epica-network", "appId": "1:940276320481:web:dbf7200664ed42875d0fa0", "databaseURL": "https://epica-network-default-rtdb.europe-west1.firebasedatabase.app", "storageBucket": "epica-network.appspot.com", "apiKey": "AIzaSyDMe-S_zitBzFSw1XPsQl-gDk0AyW3gqDA", "authDomain": "epica-network.firebaseapp.com", "messagingSenderId": "940276320481" })), provideStorage(() => getStorage()), // Para rutas dinámicas


  ],
  providers: [],
  bootstrap: [AppComponent], // Indica que este es el módulo principal
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permite el uso de elementos personalizados
})
export class AppModule { }
