import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PerfilComponent} from './perfil/perfil.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: PerfilComponent, canActivate: [AuthGuard]},
  {path: 'registro', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
