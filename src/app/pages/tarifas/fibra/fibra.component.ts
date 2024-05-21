import { Component, OnInit, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Tarifas } from 'src/app/interfaces/tarifas.interface';
import { TarifasService } from 'src/app/services/tarifas.service';

@Component({
  selector: 'app-fibra',
  templateUrl: './fibra.component.html',
  styleUrls: ['./fibra.component.css']
})
export class FibraComponent {

  questions: { title: string; content: SafeHtml }[] = [];
  activeIndex: number | null = null;
  constructor(private sanitizer: DomSanitizer) {
    this.questions = [
      {
        title: '¿Cuándo y cómo me pondréis y me activaréis la Fibra?',
        content: this.sanitizer.bypassSecurityTrustHtml('El proceso es muy sencillo. Una vez realizada la contratación del servicio de fibra, se activa tu solicitud en nuestros sistemas y un instalador se pondrá en contacto contigo. Cuando se aproxime la fecha, te enviaremos un SMS recordándote la cita. Finalmente, el día acordado te dejaremos la fibra instalada y funcionando al momento. Recuerda que, una vez tu fibra de Épica Network esté instalada y funcionando correctamente, deberás tramitar la solicitud de baja de tu antiguo operador de fibra.')
      },
      {
        title: '¿A qué velocidad navegaré? ¿Qué velocidad tendré de subida y de bajada con mi fibra?',
        content: this.sanitizer.bypassSecurityTrustHtml('Dependiendo de la tarifa que contrates vas a disfrutar de diferentes velocidades, tú eliges cuál se adapta mejor a tus necesidades. Todos nuestros servicios de fibra óptica son simétricos(según disponibilidad geográfica), lo que significa que obtienes la misma velocidad de subida que de bajada, y siempre con la garantía de una conexión estable con velocidad fija.')
      },
      {
        title: '¿Cómo sé si me llega vuestra cobertura de Fibra y si puedo contratar?',
        content: this.sanitizer.bypassSecurityTrustHtml('Puedes consultar si la Fibra está disponible en tu ubicación geográfica a través de nuestro comprobador para contratar la Fibra de 600Mb, 300Mb o 100Mb simétricos.')
      },
      {
        title: '¿Puedo contratar fibra sin pagar cuota de instalación?',
        content: this.sanitizer.bypassSecurityTrustHtml('Puedes contratar un servicio de fibra y elegir el tipo de instalación que más se adapta a ti. Podrás elegir entre instalación con permanencia de 12 meses y así no pagar coste de instalación. O bien puedes elegir la instalación sin permanencia en cuyo caso deberás abonar el coste de instalación en la primera factura que recibas. En las condiciones de tu contrato podrás ver el detalle de ambas opciones.')
      },
      {
        title: '¿Tengo que dar de baja el servicio de fibra contratado con mi compañía actual?',
        content: this.sanitizer.bypassSecurityTrustHtml('En caso de que ya tuvieras internet con otro operador y quieras contratar también el servicio con nosotros, tienes 2 opciones: .Si no quieres mantener el servicio con el anterior operador, contacta con ellos y solicita la baja definitiva del mismo. Te recomendamos cursar la baja una vez esté instalada y funcionando nuestra fibra. .Si quieres mantener ambos servicios activos, indica al técnico cuando acuda a tu domicilio que quieres mantener ambos servicios y por lo tanto debe realizar una instalación paralela a la ya existente')
      },
      {
        title: '¿Cómo devuelvo el router? Te explicamos cómo realizar la devolución del Router si has decidido dar de baja tu servicio de Fibra',
        content: this.sanitizer.bypassSecurityTrustHtml(
          'Una vez recibamos tu solicitud de baja del servicio, procederemos a la misma en las próximas 48 horas. ' +
          'Cuando se haya tramitado la baja definitiva, recibirás en el teléfono de contacto que nos facilitaste en el momento de la contratación un SMS con un código con el que tendrás que acudir a cualquier oficina de Correos y hacer la entrega del equipo. ' +
          'Cómo realizar la devolución es muy sencillo: Introduce en la caja original del equipo: el router, el cable de alimentación y el cable Ethernet RJ45. ' +
          'Si no encuentras la caja original, no te preocupes, puedes emplear otra caja que tengas disponible. ' +
          'Escribe en el exterior de la caja y de forma muy visible el código que has recibido en el SMS. ' +
          'Acude a tu oficina de Correos más cercana y entrégales la caja. Ellos se encargarán de enviárnosla. ' +
          'Recuerda que la devolución del equipo debe realizarse en el plazo máximo de 30 días desde la baja efectiva del servicio de fibra. ' +
          'En caso de no devolver el equipo completo (router, cable de alimentación y cable Ethernet RJ45) en el plazo indicado, deberás abonar 250,00€ a Épica Network en concepto de precio del equipo. ' +
          'Si tienes cualquier duda o problema para recibir el código o para entregar el equipo en tu oficina de Correos, puedes contactar con nuestro equipo de Atención al Cliente a través del chat de atención al cliente. ' +
          '<a style="text-decoration: none; color: var(--accent)" href="https://api.whatsapp.com/send?phone=34611558367&text=%C2%A1Hola%2C%20Luis!%20Ayud%C3%A1me%20a%20comparar%20mis%20tarifas%20de%20mis%20servicios%20de%20internet%20y%20telefon%C3%ADa." target="_blank">WhatsApp</a>.'
        )
      }
    ];
  }
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
    { title: 'Tecnología 4G+', description: 'Contamos con la red e infraestructura móvil de Telefónica y con la ultravelocidad de su tecnología 5G un 133% más rápida que el 4G. Lo que permite navegar mucho más deprisa y descargar archivos en cuestión de segundos.', imageUrl: '../../../../assets/images/imagenes webp/iconos/icons8-wifi-48.webp' },
    { title: 'Sin sorpresas en tu factura', description: 'Nuestro servicio tiene un precio mensual fijo, que no varía, salvo que ese mes realices llamadas de tarificación especial o que estén fuera de las condiciones descritas. En el proceso de compra se ajustarán los impuestos según la provincia de contratación.', imageUrl: '../../../../assets/images/reciboEuro.svg' },
    { title: 'Sin permanencia', description: 'No existen claúsulas de permanencia ni penalizaciones ocultas en nuestro servicio. Si decides irte lo harás con total tranquilidad, sin intentos de retención por nuestra parte ni promociones temporales para retenerte.', imageUrl: '../../../../assets/images/padlock-open_icon-icons.com_56064.svg' },
    { title: 'Tendrás razón por defecto', description: 'Ante una incidencia o una reclamación, te daremos la razón por defecto. A continuación, analizaremos tu caso y te explicaremos lo sucedido.', imageUrl: '../../../../assets/images/pulgar.svg' }
  ];
  isLastCard(index: number): boolean {
    return index === this.mobileCards.length - 1;
  }

}



