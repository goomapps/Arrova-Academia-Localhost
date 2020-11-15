import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment} from '../../../../environments/environment';
import { UserService } from '../../auth/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  API_URL: string = environment.API_URL;
  identity;

  constructor(private httpClient: HttpClient,
              private userService: UserService
              ) { 
                this.identity = this.userService.getIdentity();
              }

  matriculaInsert(form: object) {
    return this.httpClient.post(this.API_URL + '/cursos/insert', form);
  }

  getAll(id: string) {
    return this.httpClient.get(this.API_URL + '/cursos/get', this.identity._id);
  }
}
