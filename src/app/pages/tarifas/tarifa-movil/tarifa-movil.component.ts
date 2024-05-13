import { Component } from '@angular/core';




@Component({
  selector: 'app-tarifa-movil',
  templateUrl: './tarifa-movil.component.html',
  styleUrls: ['./tarifa-movil.component.css']
})
export class TarifaMovilComponent {

  mobileCards = [
    { title: 'Tecnología 5G', description: 'Contamos con la red e infraestructura móvil de Telefónica y con la ultravelocidad de su tecnología 5G un 133% más rápida que el 4G. Lo que permite navegar mucho más deprisa y descargar archivos en cuestión de segundos.', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/epica-network.appspot.com/o/images%2Fredes%20sociales%2Ficons8-5g-50.png?alt=media&token=7024db98-66f6-4b21-8df4-6900ab290768' },
    { title: 'Sin sorpresas en tu factura', description: 'Nuestro servicio tiene un precio mensual fijo, que no varía, salvo que ese mes realices llamadas de tarificación especial o que estén fuera de las condiciones descritas. En el proceso de compra se ajustarán los impuestos según la provincia de contratación.', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/epica-network.appspot.com/o/images%2Fredes%20sociales%2Ficons8-recibo-euro-80.png?alt=media&token=01d27da5-6ba5-4c60-bdbe-8a9c67d0abd4' },
    { title: 'Sin permanencia', description: 'No existen claúsulas de permanencia ni penalizaciones ocultas en nuestro servicio. Si decides irte lo harás con total tranquilidad, sin intentos de retención por nuestra parte ni promociones temporales para retenerte.', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/epica-network.appspot.com/o/images%2Fredes%20sociales%2Ficons8-desbloquear-50.png?alt=media&token=c19d53ae-1c6c-4587-80ad-ce8f742fa017' },
    { title: 'Tendrás razón por defecto', description: 'Contamos con la red e infraestructura móvil de Telefónica y con la ultravelocidad de su tecnología 5G un 133% más rápida que el 4G. Lo que permite navegar mucho más deprisa y descargar archivos en cuestión de segundos.', imageUrl: 'https://firebasestorage.googleapis.com/v0/b/epica-network.appspot.com/o/images%2Fredes%20sociales%2Ficons8-pulgar-para-arriba-50.png?alt=media&token=15ce0624-fd8c-4ca6-a49c-e0138242910d' }
  ];


  isLastCard(index: number): boolean {
    return index === this.mobileCards.length - 1;
  }
}