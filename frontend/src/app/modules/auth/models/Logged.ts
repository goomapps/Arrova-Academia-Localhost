import {Usuario} from './Usuario';

export class Logged {
  usuario: Usuario;
  token: string;
  constructor(usuario, token) {
    this.usuario = usuario;
    this.token = token;
  }
}
