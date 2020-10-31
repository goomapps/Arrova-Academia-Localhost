export class Usuario {
  nombre: string;
  apellido1: string;
  apellido2: string;
  nombreUsuario: string;
  correo: string;
  contrasenya: string;
  fechaNacimiento: Date;
  terminos: boolean;
  correoConfirmado: boolean;
  imagenPerfil: string;
  rol: string;
  constructor(
    nombre,
    apellido1,
    apellido2,
    nombreUsuario,
    correo,
    contrasenya,
    fechaNacimiento,
    terminos,
    correoConfirmado,
    imagenPerfil,
    rol) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.nombreUsuario = nombreUsuario;
    this.correo = correo;
    this.contrasenya = contrasenya;
    this.fechaNacimiento = fechaNacimiento;
    this.terminos = terminos;
    this.correoConfirmado = correoConfirmado;
    this.imagenPerfil = imagenPerfil;
    this.rol = rol;
  }
}
