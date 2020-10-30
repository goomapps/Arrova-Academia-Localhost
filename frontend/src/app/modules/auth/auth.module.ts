import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import {LoginComponent} from './login/login.component';
import {PerfilComponent} from './perfil/perfil.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    PerfilComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
