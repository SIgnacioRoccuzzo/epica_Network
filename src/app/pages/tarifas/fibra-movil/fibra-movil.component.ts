import { Component } from '@angular/core';


@Component({
  selector: 'app-fibra-movil',
  templateUrl: './fibra-movil.component.html',
  styleUrls: ['./fibra-movil.component.css']
})
export class FibraMovilComponent {
  activeIndex: number | null = null;
  questions = [
    {
      title: '¿Cómo funciona el proceso de activación del paquete de fibra y móvil?',
      content: 'El proceso es muy sencillo y queremos ponértelo fácil. Al acabar la contratación del servicio fibra + móvil, se activa tu solicitud en nuestros sistemas y se pone en marcha la portabilidad desde tu operador actual a Épica Network. Este trámite requiere un tiempo que está estimado entre las 48h y 72h. Primero te instalamos y activamos el servicio de fibra, y después te activamos el servicio de línea móvil. Debes saber que, en el periodo comprendido entre la instalación y activación del servicio de fibra, hasta la activación del servicio de línea móvil, solo se te facturará por la fibra la parte proporcional que corresponda aplicar por dicho periodo sobre una tarifa mensual de 19,8760€ + impuestos. Ten en cuenta que, si durante el proceso de activación de la tarifa fibra + móvil, y por causas ajenas a Épica Network, no activas la línea móvil en un plazo máximo de quince (15) días laborales desde la puesta en marcha del servicio de fibra, quedará automáticamente sin efecto la tarifa fibra + móvil y se te aplicará la tarifa normal que exista en ese momento para el servicio individual de fibra. Si eres un cliente nuevo de Épica Network, la activación en el sistema del servicio fibra + móvil se llevará a cabo en el momento de la contratación. Si ya eres cliente de Épica Network y tienes contratado con anterioridad alguno de los servicios que van a formar parte de la tarifa solicitada, la activación en el sistema del nuevo servicio de fibra + móvil junto con el servicio o servicios ya existentes tendrá lugar el día 1 del mes inmediatamente siguiente al de esta contratación. Mientras tanto, y durante el periodo que comprende desde el momento de la contratación de la tarifa fibra + móvil, hasta el día 1 del mes siguiente, solo se facturará al cliente por el servicio nuevo la parte proporcional. Finalmente, queremos explicarte que la efectiva contratación de la tarifa fibra + móvil estará condicionada y sometida en todo caso a la posibilidad técnica de instalación y puesta en marcha de los servicios convergentes contratados.'
    },
    {
      title: '¿Puedo realizar cambios en mi servicio una vez contratado?',
      content: 'Una vez activada la tarifa fibra + móvil, puede que necesites cambiar la línea móvil de la misma. En ese caso, la activación de la nueva línea móvil dentro de tu tarifa tendrá efecto a partir del día 1 del mes siguiente al de la solicitud de cambio. Si lo necesitas, también podrás solicitar el cambio de titular de toda una tarifa fibra + móvil, debiendo suscribir y aceptar el nuevo titular las condiciones que tú hubieras adquirido para dichos servicios. Sin embargo, no podrás cambiar la línea móvil de la tarifa fibra + móvil si no han transcurrido doce (12) meses desde la contratación inicial de la tarifa o desde el último cambio de línea móvil.'
    },
    {
      title: '¿Y si quiero darme de baja, qué hago?',
      content: 'Puedes solicitar la baja de la tarifa fibra + móvil y desde Épica Network ejecutaremos la orden en las siguientes 48 horas hábiles desde el día de tu solicitud. Si solicitas la baja de uno de los dos servicios, rompiendo el pack fibra + móvil, el servicio que mantengas activo pasará inmediatamente a tener un precio conforme a la tarifa normal que exista en ese momento. En caso de no existir tarifa para ese servicio individual, y salvo que contrates otra cosa, se cambiará automáticamente por otra tarifa de prestaciones no superiores, pero lo más próxima al servicio que tenías contratado. La baja del servicio de fibra conlleva la devolución a Épica Network del router y del resto del equipamiento en perfectas condiciones en el plazo máximo de (1) mes desde la solicitud de baja. De no ser así, Épica Network podrá reclamarte un importe de 250€ en concepto de penalización una vez transcurrido (1) mes.'
    },
    {
      title: '¿Cómo se activa mi pack fibra + móvil?',
      content: 'En el momento de la contratación del pack, te indicaremos una fecha y hora de instalación, en la cual un técnico se desplazará a tu domicilio para instalar el servicio de fibra. Una vez que la fibra esté instalada se lanzará automáticamente la solicitud de portabilidad o activación del nuevo número de teléfono que hayas seleccionado para tu pack.'
    },
    {
      title: '¿Qué ocurre si finalmente no activo mi línea principal o rompo el pack?',
      content: 'Si durante el proceso de activación de la tarifa convergente, y por causas ajenas a Épica Network, el cliente no activa la línea móvil principal del pack en un plazo máximo de quince (15) días laborales desde la puesta en marcha del servicio de fibra, se anulará el contrato del pack convergente móvil + fibra y comenzarán a aplicarse las condiciones del servicio de solo fibra. Se aplicarán las mismas condiciones si el cliente rompe el paquete convergente por causas ajenas a Épica Network, por ejemplo, al solicitar la baja en el servicio móvil. Dichas condiciones establecen una permanencia del servicio de fibra de 12 meses, a contar desde el momento de la instalación. Consulta las condiciones del servicio de solo fibra.'
    },
    {
      title: '¿Cómo cambio el titular de mi pack fibra + móvil?',
      content: 'El cambio de titular implica la firma para la aceptación de las condiciones del anterior y nuevo titular. Para ello, ambos deben ser clientes de Épica Network. Te recomendamos que contactes con nuestro departamento de Atención al Cliente y te indicarán cómo proceder. Contacta con nuestro departamento de Atención al Cliente llamando.'
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
    { title: 'Tecnología 4G+', description: 'En Épica Network te ofrecemos la mejor calidad red de Internet Móvil de España con cobertura 4G+ y velocidad de descarga de hasta 300Mbps para conectarte a Internet y hablar estés donde estés.', imageUrl: '../../../../assets/images/imagenes webp/iconos/icons8-fourth-generation-network-plus-and-internet-connectivity-logotype-96 (1).webp' },
    { title: 'Velocidad', description: 'En Épica Network te ofrecemos internet de calidad en una extensa red de Fibra. Podrás navegar por internet, jugar a videojuegos, realizar videoconferencias, descargar y subir archivos a la nube y transmitir en streaming, sin cortes ni interrupciones. Con nuestro servicio de Fibra tendrás una velocidad fija y podrás disfrutar de mayor capacidad en conexiones con velocidades de bajada entre 100Mb, 300Mb o 600Mb según tu tarifa elegida y velocidad de subida sujeta a tu disponibilidad geográfica.', imageUrl: '../../../../assets/images/imagenes webp/iconos/icons8-wifi-48.webp' },
    { title: 'Transparencia', description: 'Nuestro servicio ofrece una tarifa mensual fija que solo cambia si realizas llamadas de tarificación especial o fuera de las condiciones establecidas. Además, garantizamos total transparencia, ajustando los impuestos según la provincia de contratación durante el proceso de compra.', imageUrl: '../../../../assets/images/imagenes webp/iconos/icons8-recibo-euro-80.webp' },
  ];

}
