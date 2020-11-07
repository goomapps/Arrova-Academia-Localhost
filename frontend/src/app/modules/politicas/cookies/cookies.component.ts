import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {
  cookies = 'INFORMACIÓN SOBRE COOKIES';
  desc1_1 = 'Debido a la entrada en vigor de la referente modificación de la «Ley de Servicios de la Sociedad de la Información» (LSSICE) establecida por el Real Decreto 13/2012, es de obligación obtener el consentimiento expreso del usuario de todas las páginas web que usan cookies prescindibles, antes de que este navegue por ellas.';
  que_son = '¿QUÉ SON LAS COOKIES?';
  desc2_1 = 'Las cookies y otras tecnologías similares tales como local shared objects, flash cookies o píxeles, son herramientas empleadas por los servidores Web para almacenar y recuperar información acerca de sus visitantes, así como para ofrecer un correcto funcionamiento del sitio.';
  desc2_2 = 'Mediante el uso de estos dispositivos se permite al servidor Web recordar algunos datos concernientes al usuario, como sus preferencias para la visualización de las páginas de ese servidor, nombre y contraseña, productos que más le interesan, etc.';
  desc2_3 = 'Según la directiva de la UE, las cookies que requieren el consentimiento informado por parte del usuario son las cookies de analítica y las de publicidad y afiliación, quedando exceptuadas las de carácter técnico y las necesarias para el funcionamiento del sitio web o la prestación de servicios expresamente solicitados por el usuario.';
  tipos = 'TIPOS DE COOKIES';
  desc2_4 = '•	Cookies técnicas y funcionales: son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.';
  desc2_5 = '•	Cookies analíticas: son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.';
  desc2_6 = '•	Cookies publicitarias: son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.';
  desc2_7 = '•	Cookies de publicidad comportamental: recogen información sobre las preferencias y elecciones personales del usuario (retargeting) para permitir la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado.';
  desc2_8 = '•	Cookies sociales: son establecidas por las plataformas de redes sociales en los servicios para permitirle compartir contenido con sus amigos y redes. Las plataformas de medios sociales tienen la capacidad de rastrear su actividad en línea fuera de los Servicios. Esto puede afectar al contenido y los mensajes que ve en otros servicios que visita.';
  desc2_9 = '•	Cookies de afiliados: permiten hacer un seguimiento de las visitas procedentes de otras webs, con las que el sitio web establece un contrato de afiliación (empresas de afiliación).•	Cookies de afiliados: permiten hacer un seguimiento de las visitas procedentes de otras webs, con las que el sitio web establece un contrato de afiliación (empresas de afiliación).';
  desc2_10 = '•	Cookies de seguridad: almacenan información cifrada para evitar que los datos guardados en ellas sean vulnerables a ataques maliciosos de terceros.';
  desc2_11 = '•	Cookies propias: son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.';
  desc2_12 = '•	Cookies de terceros: son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.';
  desc2_13 = '•	Cookies de sesión: son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web.';
  desc2_14 = '•	Cookies persistentes: son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un período definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.';
  tratamiento = 'TRATAMIENTO DE DATOS PERSONALES';
  desc3_1 = 'ADRIAN GONZALEZ ROMERO es el Responsable del tratamiento de los datos personales del Interesado y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril de 2016 (GDPR), por lo que se le facilita la siguiente información del tratamiento:';
  desc3_2 = 'Fines del tratamiento: según se especifica en el apartado de cookies que se utilizan en este sitio web.';
  desc3_3 = 'Legitimación del tratamiento: por consentimiento del interesado (art. 6.1 GDPR).';
  desc3_4 = 'Criterios de conservación de los datos: según se especifica en el apartado de cookies utilizadas en la web.';
  desc3_5 = 'Comunicación de los datos: no se comunicarán los datos a terceros, excepto en cookies propiedad de terceros o por obligación legal.';
  desc3_6 = 'Derechos que asisten al Interesado: Derecho a retirar el consentimiento en cualquier momento. Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento. Derecho a presentar una reclamación ante la Autoridad de control (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.';
  desc3_7 = 'Datos de contacto para ejercer sus derechos: ADRIAN GONZALEZ ROMERO - C/ CARMEN DONDERIS, nº 1-38 de MELIANA (46133-VALENCIA). E-mail: contacto@arrovacademia.es.';
  utilizadas = 'COOKIES UTILIZADAS EN ESTE SITIO WEB';
  editor = 'COOKIES CONTROLADAS POR EL EDITOR';
  desc4_1 = 'No se instalan cookies controladas por el editor';
  terceros = 'COOKIES DE TERCEROS';
  desc5_1 = 'Los servicios de terceros son ajenos al control del editor. Los proveedores pueden modificar en todo momento sus condiciones de servicio, finalidad y utilización de las cookies, etc.';
  desc5_2 = 'No se instalan cookies controladas por terceros';
  panel = 'PANEL DE CONFIGURACIÓN DE COOKIES';
  desc6_1 = 'Desde este panel podrá configurar las cookies que el sitio web puede instalar en su navegador, excepto las cookies técnicas o funcionales que son necesarias para la navegación y la utilización de las diferentes opciones o servicios que se ofrecen.';
  navegador = 'CÓMO GESTIONAR LAS COOKIES DESDE EL NAVEGADOR';
  desc7_1 = 'Eliminar las cookies del dispositivo: Las cookies que ya están en un dispositivo se pueden eliminar borrando el historial del navegador, con lo que se suprimen las cookies de todos los sitios web visitados.Sin embargo, también se puede perder parte de la información guardada (por ejemplo, los datos de inicio de sesión o las preferencias de sitio web).';
  desc7_2 = 'Gestionar las cookies específicas del sitio: Para tener un control más preciso de las cookies específicas de cada sitio, los usuarios pueden ajustar su configuración de privacidad y cookies en el navegador.';
  desc7_3 = 'Bloquear las cookies: Aunque la mayoría de los navegadores modernos se pueden configurar para evitar que se instalen cookies en los dispositivos, eso puede obligar al ajuste manual de determinadas preferencias cada vez que se visite un sitio o página. Además, algunos servicios y características pueden no funcionar correctamente (por ejemplo, los inicios de sesión con perfil).Aunque la mayoría de los navegadores modernos se pueden configurar para evitar que se instalen cookies en los dispositivos, eso puede obligar al ajuste manual de determinadas preferencias cada vez que se visite un sitio o página. Además, algunos servicios y características pueden no funcionar correctamente (por ejemplo, los inicios de sesión con perfil).';
  eliminar = 'CÓMO ELIMINAR LAS COOKIES DE LOS NAVEGADORES MÁS COMUNES';
  desc8_1 = 'Chrome:	http://support.google.com/chrome/answer/95647?hl=es';
  desc8_2 = 'Internet Explorer. Versión 11:	https://support.microsoft.com/es-es/help/278835/how-to-delete-cookie-files-in-internet-explorer';
  desc8_3 = 'Firefox. Versión 65.0.1:	https://www.mozilla.org/es-ES/privacy/websites/#cookies';
  desc8_4 = 'Safari Versión 5.1:	https://support.apple.com/es-es/guide/safari/sfri11471/mac';
  desc8_5 = 'Opera: https://help.opera.com/en/latest/security-and-privacy/#clearBrowsingData';


  constructor() { }

  ngOnInit(): void {
  }

}
