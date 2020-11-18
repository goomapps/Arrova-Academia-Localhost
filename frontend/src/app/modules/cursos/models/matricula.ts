export class Matricula {
  usuario: string;
  nombre: string;
  precio: string;
  cantidad: number;
  activo: boolean;
  direccion: string;
  poblacion: string;
  provincia: string;
  codigoPostal: number;
  telefono: number;
  metodoPago: string;
  numeroCuenta: number;
  proteccionDatos: boolean;
  constructor(
    usuario,
    nombre,
    precio,
    cantidad,
    activo,
    direccion,
    poblacion,
    provincia,
    codigoPostal,
    telefono,
    metodoPago,
    numeroCuenta,
    proteccionDatos
  ) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.activo = activo;
    this.direccion = direccion;
    this.poblacion = poblacion;
    this.provincia = provincia;
    this.codigoPostal = codigoPostal;
    this.telefono = telefono;
    this.metodoPago = metodoPago;
    this.numeroCuenta = numeroCuenta;
    this.proteccionDatos = proteccionDatos;
  }
}
