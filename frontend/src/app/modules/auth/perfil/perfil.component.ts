import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../cursos/services/curso.service';
//import { UserService } from 'Arrova-Academia-Localhost/frontend/src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  curso:any = [];
  userProfile: any = {};

  constructor(private cursosService: CursoService) { }

  ngOnInit(): void {
    this.curso = this.cursosService.getCurso();

    var dataLogin = JSON.parse(localStorage.getItem('user'));

    this.userProfile = dataLogin;
  }
}
