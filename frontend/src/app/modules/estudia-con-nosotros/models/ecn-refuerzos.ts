export class EcnRefuerzos {
  parte1: [string];
  comentario1: string;
  correo: string;
  terminos: boolean;
  constructor(
    parte1,
    comentario1,
    email,
    terminos
  ) {
    this.parte1 = parte1;
    this.comentario1 = comentario1;
    this.correo = email;
    this.terminos = terminos;
  }
}
