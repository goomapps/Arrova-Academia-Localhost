import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {environment} from '../../../../environments/environment';
import { UserService } from '../../auth/services/user.service';
import { Matricula } from '../models/matricula';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  API_URL: string = environment.API_URL;
  identity;
  curso;
  cursoIdentity;

  constructor(private httpClient: HttpClient,
              private userService: UserService
              ) {
                this.identity = this.userService.getIdentity();
              }

  matriculaInsert(form: object) {
    return this.httpClient.post(this.API_URL + '/cursos/insert', form);
  }

  getCursosByUserId():Observable<any> {
    return this.httpClient.get(this.API_URL + '/cursos/get/' + this.identity._id);
  }

  setCurso(curso:Matricula[]):void{
    this.curso = curso;
  }

  getCurso(){
    const curso = JSON.parse(localStorage.getItem('curso'));
    if(curso !== 'undefined'){
      this.cursoIdentity = curso;
    }else{
      this.cursoIdentity = null;
    }
    return this.cursoIdentity;
  }
}
