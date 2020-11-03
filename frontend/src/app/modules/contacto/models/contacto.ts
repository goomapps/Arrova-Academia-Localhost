export class Contacto {
  nombre: string;
  correo: string;
  texto: string;
  terminos: boolean;
  constructor(
    nombre,
    correo,
    texto,
    terminos
  ) {
    this.nombre = nombre;
    this.correo = correo;
    this.texto = texto;
    this.terminos = terminos;
  }
}
