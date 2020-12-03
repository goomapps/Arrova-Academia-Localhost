import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Pago } from '../models/Pago';

@Injectable({
  providedIn: 'root',
})
export class PagoService {
  API_URL: string = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  userPago(formulario: Pago): Observable<Pago> {
    return this.httpClient.post<Pago>(
      this.API_URL + '/usuarios/pago',
      formulario
    );
  }
  // crear POST(observable) al que le paso los datos de pago.ts...
}
