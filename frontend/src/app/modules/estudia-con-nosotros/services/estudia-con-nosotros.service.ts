import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudiaConNosotrosService {
  API_URL: string = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  ecnInsert(form: object) {
    return this.httpClient.post(this.API_URL + '/estudia-con-nosotros/insert', form);
  }
}
