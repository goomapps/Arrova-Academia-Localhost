import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  API_URL: string = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  insert(form: object) {
    return this.httpClient.post(this.API_URL + '/contactos/insert', form);
  }
}
