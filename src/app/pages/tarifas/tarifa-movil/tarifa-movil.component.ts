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
      title: '¿Qué es la fibra óptica y cómo funciona?',
      content: 'La fibra óptica es un medio de transmisión de datos que utiliza luz pulsada a través de fibras muy finas de vidrio o plástico. La luz viaja por estas fibras en ángulos de reflexión total, lo que permite una transmisión de datos rápida y eficiente.'
    },
    {
      title: '¿Tengo compromiso de permanencia con mi tarifa de solo fibra?',
      content: 'No. En Epica Networks no existe permanencia. Puedes irte o cambiar de tarifa cuando quieras.'
    },
    {
      title: '¿Cómo es el proceso de instalación de la fibra óptica?',
      content: 'Un instalador acudirá a tu domicilio para realizar la instalación del servicio y te proporcionará el router HGU y todo lo necesario.'
    },
    {
      title: '¿Incluye llamadas telefónicas mi tarifa de fibra?',
      content: 'Sí. Las tarifas de fibra incluyen llamadas ilimitadas a fijos y móviles nacionales desde la línea fija.'
    },
    {
      title: '¿Cómo puedo comprobar si tengo cobertura de fibra óptica?',
      content: 'Durante el proceso de contratación comprobaremos si dispones de cobertura de fibra en la dirección que nos indiques.'
    },
    {
      title: '¿Puedo obtener asistencia para comparar tarifas?',
      content: 'Puedes contactarnos para obtener asistencia y comparar tarifas de Internet y telefonía.'
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
    { title: 'Tecnología 4G+', description: 'Contamos con la red e infraestructura móvil de Telefónica y con la ultravelocidad de su tecnología 5G un 133% más rápida que el 4G. Lo que permite navegar mucho más deprisa y descargar archivos en cuestión de segundos.', imageUrl: '../../../../assets/images/4g+black.svg' },
    { title: 'Sin sorpresas en tu factura', description: 'Nuestro servicio tiene un precio mensual fijo, que no varía, salvo que ese mes realices llamadas de tarificación especial o que estén fuera de las condiciones descritas. En el proceso de compra se ajustarán los impuestos según la provincia de contratación.', imageUrl: '../../../../assets/images/reciboEuro.svg' },
    { title: 'Sin permanencia', description: 'No existen claúsulas de permanencia ni penalizaciones ocultas en nuestro servicio. Si decides irte lo harás con total tranquilidad, sin intentos de retención por nuestra parte ni promociones temporales para retenerte.', imageUrl: '../../../../assets/images/padlock-open_icon-icons.com_56064.svg' },
    { title: 'Tendrás razón por defecto', description: 'Ante una incidencia o una reclamación, te daremos la razón por defecto. A continuación, analizaremos tu caso y te explicaremos lo sucedido.', imageUrl: '../../../../assets/images/pulgar.svg' }
  ];

  isLastCard(index: number): boolean {
    return index === this.mobileCards.length - 1;
  }
}