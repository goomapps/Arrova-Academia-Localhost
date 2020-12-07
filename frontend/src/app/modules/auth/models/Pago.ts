// Crear clase con constructor y igualando variables a las mismas. estan las otras de ejemplo
export class Pago {
  tipoPago: string;
  tipoMoneda: string;
  nombre: string;
  imagen: string;
  precio: number;
  cantidad: number;
  modo: string;

  constructor(tipoPago, tipoMoneda, nombre, imagen, precio, cantidad, modo) {
    this.tipoPago = tipoPago;
    this.tipoMoneda = tipoMoneda;
    this.nombre = nombre;
    this.imagen = imagen;
    this.precio = precio;
    this.cantidad = cantidad;
    this.modo = modo;
  }
}
