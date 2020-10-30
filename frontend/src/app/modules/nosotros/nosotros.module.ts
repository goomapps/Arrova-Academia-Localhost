import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';

import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ValoracionesComponent } from './valoraciones/valoraciones.component';

@NgModule({
  declarations: [
    NosotrosComponent,
    ProfesoresComponent,
    ValoracionesComponent
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule
  ]
})
export class NosotrosModule { }
