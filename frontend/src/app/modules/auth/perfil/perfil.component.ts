import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../cursos/services/curso.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  curso:any = [];
  userProfile: any = {};

  constructor(private cursosService: CursoService,
              private userService: UserService
              ) { }

  ngOnInit(): void {
    this.curso = this.cursosService.getCurso();

    var dataLogin = JSON.parse(localStorage.getItem('user'));

    this.userProfile = dataLogin;
  }

  logout(){
    this.userService.logout();
  }
}
