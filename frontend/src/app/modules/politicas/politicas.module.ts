import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticasRoutingModule } from './politicas-routing.module';

import { PoliticasComponent } from './politicas.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacidadRedesComponent } from './privacidad-redes/privacidad-redes.component';
import { ContratacionComponent } from './contratacion/contratacion.component';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';

@NgModule({
  declarations: [
    PoliticasComponent,
    PrivacidadComponent,
    CookiesComponent,
    PrivacidadRedesComponent,
    ContratacionComponent,
    AvisoLegalComponent
  ],
  imports: [
    CommonModule,
    PoliticasRoutingModule
  ]
})
export class PoliticasModule { }
