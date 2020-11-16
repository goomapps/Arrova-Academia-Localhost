export class Valoracion {
  tipo: string;
  texto: string;
  rate: number;
  constructor(tipo, texto, rate) {
    this.tipo = tipo;
    this.texto = texto;
    this.rate = rate;
  }
}
