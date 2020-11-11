import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {Login} from '../models/Login';
import {Logged} from '../models/Logged';
import {Usuario} from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL: string = environment.API_URL;
  user;
  identity;

  constructor(private httpClient: HttpClient) {}

  userLogin(credentials: Login): Observable<Logged> {
    return this.httpClient.post<Logged>(
      this.API_URL + '/usuarios/login', credentials);
  }

  userRegister(formulario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.API_URL + '/usuarios/registro', formulario);
  }

  loginDone() {
    if (localStorage.getItem('user') && localStorage.getItem('authToken')) {
      return true;
    }
  }

  logout(): void {
    this.httpClient.get(this.API_URL + '/user/logout');
    this.setUser(null);
    this.identity = null;
    localStorage.clear();
  }

  setUser(user: Usuario): void {
    this.user = user;
  }
  getUser(): Usuario {
    return this.user;
  }

  getIdentity() {
    const usuario = JSON.parse(localStorage.getItem('user'));
    if (usuario !== 'undefined') {
      this.identity = usuario;
    } else {
      this.identity = null;
    }
    return this.identity;
  }
}
