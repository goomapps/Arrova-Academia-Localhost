import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import * as $ from 'jquery';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

import {UserService} from '../services/user.service';
import {Usuario} from '../models/Usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  usuario;
  repitcontrasenya;
  constructor(
    private usuarioService: UserService,
    private router: Router,
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    this.usuario = {
      nombre: '',
      apellido1: '',
      apellido2: '',
      nombreUsuario: '',
      correo: '',
      contrasenya: '',
      fechaNacimiento: '',
      terminos: false
    };
    this.repitcontrasenya = '';
  }

  ngOnInit(): void {
    $('#mostrarOcultar1').hover(() => {
      $('#password1').attr('type', 'text');
      $('#mostrarOcultar1').removeClass('fa-eye').addClass('fa-eye-slash');
    }, () => {
      $('#password1').attr('type', 'password');
      $('#mostrarOcultar1').removeClass('fa-eye-slash').addClass('fa-eye');
    });
    $('#mostrarOcultar2').hover(() => {
      $('#password2').attr('type', 'text');
      $('#mostrarOcultar2').removeClass('fa-eye').addClass('fa-eye-slash');
    }, () => {
      $('#password2').attr('type', 'password');
      $('#mostrarOcultar2').removeClass('fa-eye-slash').addClass('fa-eye');
    });

    const cb = document.getElementById('cb');

    cb.addEventListener('click', () => {
      document.getElementById('modal').classList.remove('dnone');
    });
  }

  Registro(): void {
    const formulario: Usuario = this.usuario;
    if (this.usuario.contrasenya === this.repitcontrasenya) {
      this.usuarioService.userRegister(formulario).subscribe(
        (res) => {
          localStorage.setItem('idUsuario', JSON.stringify(res._id));
          this.logger.log('USUARIO LOGEADO CORRECTAMENTE');
          this.toastr.success('BIENVENID@ A ARROVA ACADEMIA', `${res.nombreUsuario}`, {
            toastClass: 'toast success'
          });
          setTimeout(() => {
            this.router.navigate(['/usuario/login']);
          }, 500);
        }, (error) => {
          this.logger.error('FORMULARIO MAL RELLENADO');
          this.toastr.error('REVISE EL FORMULARIO, PUEDE QUE ALGUN CAMPO ESTE MAL RELLENADO O SIN COMPLETAR', 'HA HABIDO UN ERROR', {
            toastClass: 'toast error'
          });
      }
      )
    }
  }
}
