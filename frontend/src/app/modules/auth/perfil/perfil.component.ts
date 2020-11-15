import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../cursos/services/curso.service';
//import { UserService } from 'Arrova-Academia-Localhost/frontend/src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  userProfile: any = {};
  cursos: any = [];

  constructor(private cursosService: CursoService) { }

  ngOnInit(): void {
    var dataLogin = JSON.parse(localStorage.getItem('user'));

    this.userProfile = dataLogin;

    this.cursos = this.cursosService.getCursosByUserId();

    /*this.userService.showUser(this.userProfile);

    this.userShow = this.userProfile;

    console.log(this.userShow);*/
  }

}
