import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  tarifasTv: Tarifas[];
  questions: { title: string; content: SafeHtml }[] = [];
  activeIndex: number | null = null;
  tarifasService = inject(TarifasService);

  constructor(private sanitizer: DomSanitizer) {
    this.tarifasTv = [];
    this.questions = [
      {
        title: '¿Qué permanencia tiene el servicio de ÉPICA TV?',
        content: this.sanitizer.bypassSecurityTrustHtml('ÉPICA TV no tiene permanencia: si lo contratas, pagarás el importe correspondiente a cada ciclo de facturación. Si decides darlo de baja, podrás solicitarla sin coste adicional y cuando lo desees, aunque ya no podrás disfrutar de todo su contenido.')
      },
      {
        title: '¿Cómo activo el servicio?',
        content: this.sanitizer.bypassSecurityTrustHtml('Efectuada la contratación del servicio, recibirás un correo electrónico de bienvenida, en el cual se indicarán los pasos necesarios para disfrutar de todo el contenido de TV.')
      },
      {
        title: '¿Cuántos dispositivos puedo conectar?',
        content: this.sanitizer.bypassSecurityTrustHtml('Podrás disfrutar del servicio de ÉPICA TV con hasta 4 dispositivos simultáneos, depende de tu tarifa, es decir, conectados al mismo tiempo.')
      },
      {
        title: '¿Cuáles son los dispositivos compatibles?',
        content: this.sanitizer.bypassSecurityTrustHtml('Para disfrutar de ÉPICA TV, deberás hacerlo con algún dispositivo compatible, como televisores Smart TV, además de smartphones y tabletas. Actualmente hay diversas formas de disfrutar del contenido de ÉPICA TV, a través de la aplicación disponible para diferentes sistemas operativos y dispositivos compatibles o bien a través del navegador disponible en la práctica totalidad de dispositivos. Para poder disfrutar de una experiencia de calidad, te recomendamos descargar la APP ÉPICA TV de MASMEDIA TV, que actualmente es compatible con: <ul><li>Android TV: Cualquier versión y dispositivo certificado (Smart TV o decodificador).</li><li>Google TV: Cualquier versión y modelo.</li><li>Android móvil: Versión AOS 4.4 y versiones posteriores.</li><li>iPhone y iPad: iOS 13.0 o posterior.</li><li>Navegadores Web en PC: Chrome, Firefox y MS Edge.</li><li>Navegadores Web en MacOS: Safari, Firefox y Chrome.</li><li>Smart TV LG: Cualquier modelo fabricado desde el año 2016 en adelante.</li><li>Smart TV Samsung: Cualquier modelo fabricado desde el año 2019 en adelante.</li></ul>Recuerda que en caso de no disponer de un dispositivo compatible con la aplicación Openstream, siempre puedes disfrutar del contenido de ÉPICA TV a través del navegador iniciando sesión en: <a href="https://masmediatv.es/" style="text-decoration: none; color: var(--accent)">Accede al reproductor online</a>. Si deseas descargar la aplicación a tu dispositivo, accede a: <ul><li><a href="https://play.google.com/store/apps/details?id=masmedia.openstream.com&hl=es_419&gl=US" style="text-decoration: none; color: var(--accent)">Aplicación para Android</a></li><li><a href="https://apps.apple.com/es/app/media/id1490413082" style="text-decoration: none; color: var(--accent)">Aplicación para iPhone y iPad</a></li></ul>')
      }
    ];

  }
  async ngOnInit() {
    try {
      const response = await this.tarifasService.getByType('TV');
      this.tarifasTv = response;
    } catch (error) {
      console.log(error);
    }
  }



  whatsappLink = 'https://api.whatsapp.com/send?phone=34611558367&text=%C2%A1Hola%2C%20Luis!%20Ayud%C3%A1me%20a%20comparar%20mis%20tarifas%20de%20mis%20servicios%20de%20internet%20y%20telefon%C3%ADa.';

}
