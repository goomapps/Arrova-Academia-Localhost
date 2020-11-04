export class EcnAccesos {
  parte1: [string];
  comentario1: string;
  parte2: [string];
  comentario2: string;
  parte3: [string];
  comentario3: string;
  parte4: [string];
  comentario4: string;
  email: string;
  terminos: boolean;
  constructor(
    parte1,
    comentario1,
    parte2,
    comentario2,
    parte3,
    comentario3,
    parte4,
    comentario4,
    email,
    terminos
  ) {
    this.parte1 = parte1;
    this.comentario1 = comentario1;
    this.parte2 = parte2;
    this.comentario2 = comentario2;
    this.parte3 = parte3;
    this.comentario3 = comentario3;
    this.parte4 = parte4;
    this.comentario4 = comentario4;
    this.email = email;
    this.terminos = terminos;
  }
}
