export class EcnProfesional {
  nombreEmpresa: string;
  localidadEmpresa: string;
  direccionEmpresa: string;
  telefonoEmpresa: number;
  correoEmpresa: string;
  nombreContacto: string;
  telefonoContacto: number;
  correoContacto: string;
  terminos: boolean;
  constructor(
    nombreEmpresa,
    localidadEmpresa,
    direccionEmpresa,
    telefonoEmpresa,
    correoEmpresa,
    nombreContacto,
    telefonoContacto,
    correoContacto,
    terminos
  ) {
    this.nombreEmpresa = nombreEmpresa;
    this.localidadEmpresa = localidadEmpresa;
    this.direccionEmpresa = direccionEmpresa;
    this.telefonoEmpresa = telefonoEmpresa;
    this.correoEmpresa = correoEmpresa;
    this.nombreContacto = nombreContacto;
    this.telefonoContacto = telefonoContacto;
    this.correoContacto = correoContacto;
    this.terminos = terminos;
  }
}
