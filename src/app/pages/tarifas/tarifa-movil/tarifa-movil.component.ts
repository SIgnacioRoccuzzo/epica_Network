import { Component } from '@angular/core';




@Component({
  selector: 'app-tarifa-movil',
  templateUrl: './tarifa-movil.component.html',
  styleUrls: ['./tarifa-movil.component.css']
})
export class TarifaMovilComponent {
  activeIndex: number | null = null;
  questions = [
    {
      title: '¿Qué es eso de la portabilidad y en qué consiste?',
      content: 'El proceso es muy sencillo y queremos ponértelo fácil. Al acabar la contratación del servicio de móvil, se activa tu solicitud en nuestros sistemas y se pone en marcha la portabilidad desde tu operador actual a Épica Network. Este trámite requiere un tiempo estimado entre 48-72h, periodo durante el cual recibirás la tarjeta SIM junto con las instrucciones de activación en la dirección que nos indiques. Cuando tengas tu tarjeta activada, la portabilidad se hará efectiva. Esto ocurre de madrugada, así no te quedas sin servicio en ningún momento. Por la mañana, solo tendrás que sustituir la tarjeta SIM antigua por la de Épica Network y disfrutar de tu nueva tarifa.'
    },
    {
      title: '¿Tendré Roaming y servicio cuando viaje al extranjero? ¿Cómo lo activo?',
      content: 'Para poder disfrutar de tu tarifa móvil durante tus viajes al extranjero deberás tener activado el servicio de roaming. Es muy sencillo, accede a nuestra app y en configuración de tarifa podrás activar este servicio, así de fácil. Si aún no tienes nuestra app, descárgala aquí para iPhone o Android.'
    },
    {
      title: '¿Puedo cambiarme a otra tarifa diferente después de contratar una?',
      content: 'Una vez activada tu línea móvil, puedes cambiar de tarifa sin coste una vez al mes. Así, puedes ajustar con flexibilidad tu consumo a las necesidades que puedas tener en cada momento. Llámanos y uno de nuestros agentes te ayudará en el proceso.'
    }
  ];


  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }
  getClass(index: number): string {
    return this.isActive(index) ? 'accordion-collapse collapse show' : 'accordion-collapse collapse';
  }

  mobileCards = [
    { title: 'Conexión', description: 'Contamos con la red e infraestructura móvil de Telefónica que ofrece una cobertura excepcional en todo el territorio nacional. Además, nuestra red permite navegar mucho más deprisa y descargar archivos en cuestión de segundos, brindando una experiencia de velocidad superior. ¡Estamos aquí para mantenerte conectado en todo momento!', imageUrl: '../../../../assets/images/imagenes webp/iconos/icons8-fourth-generation-network-plus-and-internet-connectivity-logotype-96 (1).webp' },
    { title: 'Transparencia y sin sorpresa en tu factura', description: 'Nuestro servicio ofrece una tarifa mensual fija que solo cambia si realizas llamadas de tarificación especial o fuera de las condiciones establecidas. Además, garantizamos total transparencia, ajustando los impuestos según la provincia de contratación durante el proceso de compra.', imageUrl: '../../../../assets/images/imagenes webp/iconos/icons8-recibo-euro-80.webp' },
    { title: 'Sin permanencia', description: 'Nuestros servicios móviles no tienen cláusulas de permanencia ni penalizaciones ocultas. Si decides darte de baja, podrás hacerlo sin preocupaciones y sin que intentemos retenerte con promociones temporales ni ofertas especiales.', imageUrl: '../../../../assets/images/imagenes webp/iconos/icons8-desbloquear-50.webp' },
    { title: 'Tendrás razón por defecto', description: 'Ante una incidencia o una reclamación, te daremos la razón por defecto. A continuación, analizaremos tu caso y te explicaremos lo sucedido.', imageUrl: '../../../../assets/images/imagenes webp/iconos/pulgar.webp' }
  ];

  isLastCard(index: number): boolean {
    return index === this.mobileCards.length - 1;
  }
}