import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  API_URL: string = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  matriculaInsert(form: object) {
    return this.httpClient.post(this.API_URL + '/cursos/insert', form);
  }
}
