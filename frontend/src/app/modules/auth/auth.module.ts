import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import {LoginComponent} from './login/login.component';
import {PerfilComponent} from './perfil/perfil.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule} from "@angular/forms";
import { OlvidadoComponent } from './olvidado/olvidado.component';
import { ConfirmadoComponent } from './confirmado/confirmado.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent,
    PerfilComponent,
    RegisterComponent,
    OlvidadoComponent,
    ConfirmadoComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class AuthModule { }
