import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import * as $ from 'jquery';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

import {UserService} from '../services/user.service';
import {Login} from '../models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario;
  constructor(
    private usuarioService: UserService,
    private router: Router,
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    this.usuario = {
      correo: '',
      contrasenya: ''
    };
  }

  ngOnInit(): void {
    $('#mostrarOcultar').hover(() => {
      $('#password').attr('type', 'text');
      $('#mostrarOcultar').removeClass('fa-eye').addClass('fa-eye-slash');
    }, () => {
      $('#password').attr('type', 'password');
      $('#mostrarOcultar').removeClass('fa-eye-slash').addClass('fa-eye');
    });
  }

  Login(): void {
    const credenciales: Login = this.usuario;
    this.usuarioService.userLogin(credenciales).subscribe(
      (res) => {
        localStorage.setItem('authToken', res.token);
        localStorage.setItem('user', JSON.stringify(res.usuario));
        this.logger.log('USUARIO LOGEADO CORRECTAMENTE');
        this.toastr.success('BIENVENID@ DE NUEVO', `${res.usuario.nombreUsuario}`, {
          toastClass: 'toast success'
        });
        this.usuarioService.setUser(res.usuario);
        setTimeout(() => {
          this.router.navigate(['/usuario']);
        }, 500);
      }, (error) => {
        this.logger.error('USUARIO O CONTRASEÑA NO EXISTE', error);
        this.toastr.error('USUARIO O CONTRASEÑA NO EXISTE', 'HA HABIDO UN ERROR', {
          toastClass: 'toast error'
        });
      }
    );
  }
}
