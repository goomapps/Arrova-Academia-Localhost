import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../services/user.service';
import {Login} from '../models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credenciales: Login;

  constructor(private usuarioService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  Login(): void {
  }
  onLogin(loginOk: boolean): void {
    if (!loginOk) {
      console.log('usario o clave incorrectos');
      return;
    }
  }
  mostrarOcultarContrasena(): void {
    $('#password').attr('type', 'text');
  }
}
