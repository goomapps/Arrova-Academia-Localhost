import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NosotrosComponent} from './nosotros/nosotros.component';
import {ProfesoresComponent} from './profesores/profesores.component';
import {ValoracionesComponent} from './valoraciones/valoraciones.component';

const routes: Routes = [
  {path: '', component: NosotrosComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'valoraciones', component: ValoracionesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
