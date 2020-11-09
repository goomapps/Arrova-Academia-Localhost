import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';

import { CursosComponent } from './cursos/cursos.component';
import { CursosValencianoComponent } from './cursos-valenciano/cursos-valenciano.component';
import { CursosTitulacionesComponent } from './cursos-titulaciones/cursos-titulaciones.component';
import { CursosAccesosComponent } from './cursos-accesos/cursos-accesos.component';
import { CursosRefuerzosComponent } from './cursos-refuerzos/cursos-refuerzos.component';
import { A2Component } from './cursos-valenciano/a2/a2.component';
import { B1Component } from './cursos-valenciano/b1/b1.component';
import { B2Component } from './cursos-valenciano/b2/b2.component';
import { C1Component } from './cursos-valenciano/c1/c1.component';
import { C2Component } from './cursos-valenciano/c2/c2.component';
import { IntensivoComponent } from './cursos-valenciano/intensivo/intensivo.component';
import { CursoIntensivoComponent } from './cursos-valenciano/intensivo/curso-intensivo/curso-intensivo.component';
import { MatriculaComponent } from './matricula/matricula.component';

@NgModule({
  declarations: [
    CursosComponent,
    CursosValencianoComponent,
    CursosTitulacionesComponent,
    CursosAccesosComponent,
    CursosRefuerzosComponent,
    A2Component,
    B1Component,
    B2Component,
    C1Component,
    C2Component,
    IntensivoComponent,
    CursoIntensivoComponent,
    MatriculaComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
