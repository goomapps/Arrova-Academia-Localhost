import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CursosComponent} from './cursos/cursos.component';
import {CursosValencianoComponent} from './cursos-valenciano/cursos-valenciano.component';
import {CursosTitulacionesComponent} from './cursos-titulaciones/cursos-titulaciones.component';
import {CursosRefuerzosComponent} from './cursos-refuerzos/cursos-refuerzos.component';
import {CursosAccesosComponent} from './cursos-accesos/cursos-accesos.component';
import {A2Component} from './cursos-valenciano/a2/a2.component';
import {B1Component} from './cursos-valenciano/b1/b1.component';
import {B2Component} from './cursos-valenciano/b2/b2.component';
import {C1Component} from './cursos-valenciano/c1/c1.component';
import {C2Component} from './cursos-valenciano/c2/c2.component';
import {IntensivoComponent} from './cursos-valenciano/intensivo/intensivo.component';
import {CursoIntensivoComponent} from './cursos-valenciano/intensivo/curso-intensivo/curso-intensivo.component';
import {MatriculaComponent} from './matricula/matricula.component';
import {ReproductorC1Component} from './cursos-valenciano/c1/reproductor-c1/reproductor-c1.component';
import {ReproductorIntensivoComponent} from './cursos-valenciano/intensivo/curso-intensivo/reproductor-intensivo/reproductor-intensivo.component';
import {ReproductorIntensivoCieacovaComponent} from './cursos-valenciano/intensivo/curso-intensivo/reproductor-intensivo-cieacova/reproductor-intensivo-cieacova.component';

const routes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'matricula', component: MatriculaComponent},
  {path: 'valenciano', component: CursosValencianoComponent},
  {path: 'valenciano/a2', component: A2Component},
  {path: 'valenciano/b1', component: B1Component},
  {path: 'valenciano/b2', component: B2Component},
  {path: 'valenciano/c1', component: C1Component},
  {path: 'valenciano/c1/reproductor', component: ReproductorC1Component},
  {path: 'valenciano/c2', component: C2Component},
  {path: 'valenciano/intensivos', component: IntensivoComponent},
  {path: 'valenciano/intensivos/curso-intensivo', component: CursoIntensivoComponent},
  {path: 'valenciano/intensivos/curso-intensivo/jqcv/reproductor', component: ReproductorIntensivoComponent},
  {path: 'valenciano/intensivos/curso-intensivo/cieacova/reproductor', component: ReproductorIntensivoCieacovaComponent},
  {path: 'titulaciones', component: CursosTitulacionesComponent},
  {path: 'accesos', component: CursosAccesosComponent},
  {path: 'refuerzos', component: CursosRefuerzosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
