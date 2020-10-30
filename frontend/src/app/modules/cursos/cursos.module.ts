import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';

import { CursosComponent } from './cursos/cursos.component';
import { CursosValencianoComponent } from './cursos-valenciano/cursos-valenciano.component';
import { CursosTitulacionesComponent } from './cursos-titulaciones/cursos-titulaciones.component';
import { CursosAccesosComponent } from './cursos-accesos/cursos-accesos.component';
import { CursosRefuerzosComponent } from './cursos-refuerzos/cursos-refuerzos.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursosValencianoComponent,
    CursosTitulacionesComponent,
    CursosAccesosComponent,
    CursosRefuerzosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
