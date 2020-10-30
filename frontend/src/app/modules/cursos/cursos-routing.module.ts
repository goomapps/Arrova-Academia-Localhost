import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CursosComponent} from './cursos/cursos.component';
import {CursosValencianoComponent} from './cursos-valenciano/cursos-valenciano.component';
import {CursosTitulacionesComponent} from './cursos-titulaciones/cursos-titulaciones.component';
import {CursosRefuerzosComponent} from './cursos-refuerzos/cursos-refuerzos.component';
import {CursosAccesosComponent} from './cursos-accesos/cursos-accesos.component';

const routes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'valenciano', component: CursosValencianoComponent},
  {path: 'titulaciones', component: CursosTitulacionesComponent},
  {path: 'accesos', component: CursosAccesosComponent},
  {path: 'refuerzos', component: CursosRefuerzosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
