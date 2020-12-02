import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagoService {
  constructor(private httpClient: HttpClient) {}

  // crear POST(observable) al que le paso los datos de pago.ts...
}
