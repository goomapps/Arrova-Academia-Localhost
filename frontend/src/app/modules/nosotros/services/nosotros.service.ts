import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NosotrosService {
  API_URL: string = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  insert(form: object) {
    return this.httpClient.post(this.API_URL + '/valoraciones/insert', form);
  }
}
