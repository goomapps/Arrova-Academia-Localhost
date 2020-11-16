import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-privacidad-redes',
  templateUrl: './privacidad-redes.component.html',
  styleUrls: ['./privacidad-redes.component.scss']
})
export class PrivacidadRedesComponent implements OnInit {
  redes_sociales: string = 'POLÍTICA DE PRIVACIDAD EN REDES SOCIALES'
  informacion_usuario: string = '1. INFORMACIÓN DEL USUARIO';
  subtitle1_1 = '¿Quién es el responsable del tratamiento de tus datos personales?';
  desc1_1 = 'ADRIAN GONZALEZ ROMERO, en adelante, RESPONSABLE, informa al USUARIO de que cuenta o puede contar en el futuro con un perfil en las Redes Sociales Facebook, Instagram, Twitter, LinkedIn, Youtube, Vimeo y Google+, siendo por tanto el responsable del tratamiento de los datos personales del usuario que se lleve a cabo en dichas redes sociales y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica (ES) 3/2018, de 5 de diciembre (LOPDGDD), por lo que se le facilita la siguiente información del tratamiento:';
  subtitle2_1 = 'Datos de ADRIAN GONZALEZ ROMERO';
  desc2_1 = 'C.I.F. nº 29213298D';
  desc2_2 = 'Dirección: C/ CARMEN DONDERIS, nº 1-38 - MELIANA - 46.133 – VALENCIA';
  desc2_3 = 'Correo Electrónico: contacto@arrovacademia.es';
  desc2_4 = 'Dominio Web: www.arrovacademia.es';
  desc2_5 = 'El/La usuario/a dispone de un perfil en la misma Red Social y ha decidido unirse a la página creada por ADRIAN GONZALEZ ROMERO, mostrando así interés en la información que se publicite en la/s Red/es. Al unirse a nuestra/s página/s, nos facilita su consentimiento para el tratamiento de aquellos datos personales publicados en su/s perfiles.';
  desc2_6 = 'El/La usuario/a puede acceder en todo momento a las políticas de privacidad de la propia Red Social, así como configurar su perfil para garantizar su privacidad.';
  desc2_7 = 'ADRIAN GONZALEZ ROMERO, tiene acceso y trata aquella información pública del/de la usuario/a, en especial, su nombre y datos de contacto. Estos datos podrán ser  incorporados en nuestros tratamientos en un fichero denominado “CONTACTOS” en nuestro Registro de Actividades de Tratamiento.';
  desc2_8 = 'En relación a los derechos de acceso, rectificación, limitación de tratamiento, supresión, portabilidad y oposición al tratamiento de sus datos de carácter personal, de los que usted dispone y que pueden ser ejercitados ADRIAN GONZALEZ ROMERO, de acuerdo con la legislación vigente y aplicable de Protección de Datos:';
  subtitle3_1 = '¿Para qué tratamos tus datos personales?';
  desc3_1 = 'Fin del tratamiento: mantener una relación entre el USUARIO y el RESPONSABLE que puede incluir las siguientes operaciones:';
  desc3_2 = '•	Tramitar solicitudes y consultas planteadas al responsable';
  desc3_3 = '•	Informar sobre actividades y eventos organizados por el responsable';
  desc3_4 = '•	Informar sobre productos o servicios ofrecidos por el responsable.';
  desc3_5 = '•	Interactuar a través de los perfiles oficiales.';
  desc3_6 = 'El usuario/a siempre puede controlar sus conexiones, eliminar los contenidos que dejen de interesarle y restringir con quién comparte sus conexiones, para ello deberá acceder a su configuración de privacidad.';
  subtitle4_1 = '¿Por qué motivo podemos tratar tus datos personales?';
  desc4_1 = 'Base jurídica del tratamiento: artículo 6.1.a GDPR, el interesado ha dado su consentimiento para el tratamiento de sus datos personales para uno o varios fines específicos. El USUARIO dispone de un perfil en la misma red social y ha decidido unirse a la red social del RESPONSABLE mostrando así interés en la información que se publique en la misma, por tanto, en el momento de solicitar seguir nuestros perfiles oficiales, nos facilita su consentimiento para el tratamiento de aquellos datos personales publicados en su perfil.';
  desc4_2 = 'El USUARIO puede acceder en todo momento a las políticas de privacidad de la propia red social, así como configurar su perfil para garantizar su privacidad.';
  desc4_3 = 'El RESPONSABLE tiene acceso y trata aquella información pública del USUARIO, en especial, su nombre de contacto. Estos datos solo son utilizados dentro de la propia red social y no son incorporados a ningún fichero.';
  subtitle5_1 = '¿Durante cuánto tiempo guardaremos tus datos personales?';
  desc5_1 = 'Criterios de conservación de los datos: se conservarán mientras el USUARIO no revoque el consentimiento prestado tal y como se indica en esta política de privacidad.';
  subtitle6_1 = '¿A quién facilitamos tus datos personales?';
  desc6_1 = 'Comunicación de los datos: la información facilitada por el USUARIO a través de las redes sociales del RESPONSABLE, incluidos sus datos personales, puede ser publicada, siempre en función de los servicios que el USUARIO utilice, por lo que podrá quedar a disposición pública de otros terceros usuarios de las redes sociales. Desde el perfil de cada red social, el USUARIO puede configurar qué información quiere hacer pública en cada caso, ver los permisos que se han concedido, eliminarlos o desactivarlos, como cualquier aplicación de un tercero que ya no se desea utilizar.';
  desc6_2 = 'No está prevista ninguna comunicación de datos personales a terceros fuera de la red social salvo, si fuese imprescindible para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con comunicaciones, con los cuales el RESPONSABLE tiene suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.';
  subtitle7_1 = 'Derechos que asisten al USUARIO: solo podrán satisfacerse en relación a aquella información que se encuentre bajo el control del RESPONSABLE';
  desc7_1 = '•	Derecho a retirar el consentimiento en cualquier momento.';
  desc7_2 = '•	Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento';
  desc7_3 = '•	Derecho a presentar una reclamación ante la autoridad de control (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.';
  desc7_4 = 'Datos de contacto para ejercer sus derechos: ADRIAN GONZALEZ ROMERO - C/ CARMEN DONDERIS, nº 1-38 - MELIANA - 46.133 – VALENCIA. Email: contacto@arrovacademia.es';
  desc7_5 = 'A continuación detallamos el enlace a la política de privacidad de cada una de las Redes Sociales indicadas por si quieres saber que uso de tus datos hacen las mismas:';
  desc7_6 = '•	Facebook: https://www.facebook.com/help/323540651073243/';
  desc7_7 = '•	Twitter: https://twitter.com/privacy';
  desc7_8 = '•	Google +: http://www.google.com/intl/es/policies/privacy/';
  desc7_9 = '•	Instagram: https://es-la.facebook.com/help/instagram/155833707900388/';
  desc7_10 = '•	YouTube: http://www.google.com/intl/es/policies/privacy/';
  utilizacion = '2. UTILIZACIÓN DEL PERFIL';
  desc8_1 = 'El RESPONSABLE realizará o puede realizar, de acuerdo a los fines indicados las siguientes actuaciones:';
  desc8_2 = '•	Acceso a la información pública del perfil.';
  desc8_3 = '•	Publicación en el perfil del USUARIO de toda aquella información ya publicada en la red social del RESPONSABLE.';
  desc8_4 = '•	Enviar mensajes personales e individuales a través de los canales de la red social.';
  desc8_5 = '•	Actualizaciones del estado de la página que se publicarán en el perfil del USUARIO.';
  desc8_6 = '•	Estudios estadísticos.';
  desc8_7 = '•	Estudios de marketing dirigidos a la optimización de campañas publicitarias en dichas redes de acuerdo a los hábitos del interesado.';
  publicaciones = '3. PUBLICACIONES';
  desc9_1 = 'El USUARIO, una vez sea seguidor o se haya unido a la red social del RESPONSABLE, podrá publicar en esta comentarios, enlaces, imágenes, fotografías o cualquier otro tipo de contenido multimedia soportado por la misma que podrá ser previamente moderado por el RESPONSABLE. El USUARIO, una vez sea seguidor o se haya unido a la red social del RESPONSABLE, podrá publicar en esta comentarios, enlaces, imágenes, fotografías o cualquier otro tipo de contenido multimedia soportado por la misma que podrá ser previamente moderado por el RESPONSABLE.';
  desc9_2 = 'El USUARIO, en todos los casos, debe ser el titular del contenido publicado, gozar de los derechos de autor y de propiedad intelectual o contar con el consentimiento de los terceros afectados.';
  desc9_3 = 'Se prohíbe expresamente cualquier publicación en la red social, ya sean textos, gráficos, fotografías, vídeos, etc. que atenten o sean susceptibles de atentar contra la moral, la ética, el buen gusto o el decoro, y/o que infrinjan, violen o quebranten los derechos de propiedad intelectual o industrial, el derecho a la imagen o la Ley.';
  desc9_4 = 'En estos casos, el RESPONSABLE se reserva el derecho a retirar de inmediato el contenido, sin comunicación previa, pudiendo solicitar el bloqueo permanente del USUARIO.';
  desc9_5 = 'El RESPONSABLE no se hará responsable de los contenidos que libremente ha publicado un USUARIO.';
  desc9_6 = 'El USUARIO debe tener presente que sus publicaciones serán conocidas por otros usuarios, por lo que él mismo es el principal responsable de su privacidad.El USUARIO debe tener presente que sus publicaciones serán conocidas por otros usuarios, por lo que él mismo es el principal responsable de su privacidad.';
  desc9_7 = 'Las imágenes que puedan publicarse en la red social no serán almacenadas en ningún fichero por parte del RESPONSABLE, pero sí que permanecerán en la red social.';
  publicidad = '4. PUBLICIDAD';
  desc10_1 = 'ADRIAN GONZALEZ ROMERO podrá utilizar las redes sociales para publicitarse, cumpliendo en todo caso con las exigencias legales de la legislación vigente y aplicable de Protección de Datos y de la LSSI-CE.ADRIAN GONZALEZ ROMERO podrá utilizar las redes sociales para publicitarse, cumpliendo en todo caso con las exigencias legales de la legislación vigente y aplicable de Protección de Datos y de la LSSI-CE.';
  desc10_2 = 'No se considerará publicidad el hecho de recomendar a otros/as usuarios/as la página de ADRIAN GONZALEZ ROMERO para que también ellos/as puedan disfrutar de las promociones o estar informados de su actividad.';
  datos_menores_discapacidad = '5. DATOS DE MENORES DE EDAD O PERSONAS CON CAPACIDADES ESPECIALES';
  desc11_1 = 'El acceso y registro a través de las redes sociales del RESPONSABLE está prohibido a menores de 18 años. Por su parte, si el USUARIO tiene capacidades especiales, será necesaria la intervención del titular de su patria potestad o tutela, o de su representante legal mediante documento válido que acredite la representación.';
  desc11_2 = 'El RESPONSABLE quedará expresamente exonerado de cualquier responsabilidad que pudiera derivarse del uso de las redes sociales por parte de menores o personas con capacidades especiales. Las redes sociales del RESPONSABLE no recogen conscientemente ninguna información personal de menores de edad, por ello, si el USUARIO es menor de edad, no debe registrarse, ni utilizar las redes sociales del RESPONSABLE ni tampoco proporcionar ninguna información personal.';


  constructor() {
  }

  ngOnInit(): void {
  }

}
