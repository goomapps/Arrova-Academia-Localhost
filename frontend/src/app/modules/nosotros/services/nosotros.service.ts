import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../../environments/environment';
import {Valoracion} from '../models/valoracion';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  API_URL: string = environment.API_URL;
  public valoraciones: Valoracion[] = [];

  constructor(private httpClient: HttpClient) { }

  insert(form: object) {
    return this.httpClient.post(this.API_URL + '/valoraciones/insert', form);
  }

  getValoraciones(): Observable<any> {
    return this.httpClient.get(this.API_URL + '/valoraciones/valoraciones');
  }

  setValoraciones(valoraciones: Valoracion[]): void {
    this.valoraciones = valoraciones;
  }

  getValoracion(): Valoracion[] {
    return this.valoraciones;
  }
}
