import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../cursos/services/curso.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  curso: any = [];
  userProfile: any = {};

  constructor(private cursosService: CursoService) { }

  ngOnInit(): void {
    this.curso = this.cursosService.getCurso();

    const dataLogin = JSON.parse(localStorage.getItem('user'));

    this.userProfile = dataLogin;
  }
}
