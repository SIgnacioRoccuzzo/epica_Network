import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-tarifa-movil',
  templateUrl: './tarifa-movil.component.html',
  styleUrls: ['./tarifa-movil.component.css']
})
export class TarifaMovilComponent implements OnInit {

  planMovil: any[];
  private httpClient = inject(HttpClient)

  constructor() {
    this.planMovil = []
  }
  ngOnInit(): void {
    this.httpClient.get<any>('../../../../assets/json/movil-data.json').subscribe(data => {
      this.planMovil = data.movil
    })
  }

  mobileCards = [
    { title: 'Tecnología 5G', description: 'Contamos con la red e infraestructura móvil de Telefónica y con la ultravelocidad de su tecnología 5G un 133% más rápida que el 4G. Lo que permite navegar mucho más deprisa y descargar archivos en cuestión de segundos.', imageUrl: 'https://dlvt1u0vrr0ux.cloudfront.net/media/public/5g.svg' },
    { title: 'Sin sorpresas en tu factura', description: 'Nuestro servicio tiene un precio mensual fijo, que no varía, salvo que ese mes realices llamadas de tarificación especial o que estén fuera de las condiciones descritas. En el proceso de compra se ajustarán los impuestos según la provincia de contratación.', imageUrl: 'https://dlvt1u0vrr0ux.cloudfront.net/media/public/icons-sin-sorpresas-en-tu-factura.svg' },
    { title: 'Sin permanencia', description: 'No existen claúsulas de permanencia ni penalizaciones ocultas en nuestro servicio. Si decides irte lo harás con total tranquilidad, sin intentos de retención por nuestra parte ni promociones temporales para retenerte.', imageUrl: 'https://dlvt1u0vrr0ux.cloudfront.net/media/public/icons-sin-permanencia.svg' },
    { title: 'Tendrás razón por defecto', description: 'Contamos con la red e infraestructura móvil de Telefónica y con la ultravelocidad de su tecnología 5G un 133% más rápida que el 4G. Lo que permite navegar mucho más deprisa y descargar archivos en cuestión de segundos.', imageUrl: 'https://dlvt1u0vrr0ux.cloudfront.net/media/public/icons-razon-por-defecto.svg' }
  ];

  swiperSlides = [
    {
      title: 'Tecnología 5G',
      description: 'Contamos con la red e infraestructura móvil de Telefónica y con la <strong>ultravelocidad</strong> de su tecnología 5G un <strong>133% más rápida</strong> que el 4G. Lo que permite navegar mucho más deprisa y descargar archivos en cuestión de segundos.',
      imageUrl: 'https://dlvt1u0vrr0ux.cloudfront.net/media/public/5g.svg',
      altText: 'Tecnología 5G',

    },
    {
      title: 'Sin sorpresas en tu factura',
      description: 'Nuestro servicio tiene un precio mensual fijo, que no varía, salvo que ese mes realices llamadas de tarificación especial o que estén fuera de las condiciones descritas. En el proceso de compra se ajustarán los impuestos según la provincia de contratación.',
      imageUrl: 'https://dlvt1u0vrr0ux.cloudfront.net/media/public/icons-sin-sorpresas-en-tu-factura.svg',
      altText: 'Sin sorpresas en tu factura',

    },
    {
      title: 'Sin permanencia',
      description: 'No existen claúsulas de permanencia ni penalizaciones ocultas en nuestro servicio. Si decides irte lo harás con total tranquilidad, sin intentos de retención por nuestra parte ni promociones temporales para retenerte.',
      imageUrl: 'https://dlvt1u0vrr0ux.cloudfront.net/media/public/icons-sin-permanencia.svg',
      altText: 'Sin permanencia',

    },
    {
      title: 'Tendrás razón por defecto',
      description: 'Contamos con la red e infraestructura móvil de Telefónica y con la ultravelocidad de su tecnología 5G un 133% más rápida que el 4G. Lo que permite navegar mucho más deprisa y descargar archivos en cuestión de segundos.',
      imageUrl: 'https://dlvt1u0vrr0ux.cloudfront.net/media/public/icons-razon-por-defecto.svg',
      altText: 'Tendrás razón por defecto',

    }

  ];

  whatsappLink = 'tu_link_de_whatsapp';

  isLastCard(index: number): boolean {
    return index === this.mobileCards.length - 1;
  }
}


