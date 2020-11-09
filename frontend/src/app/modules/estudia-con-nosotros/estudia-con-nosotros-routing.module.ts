import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EstudiaConNosotrosComponent} from './estudia-con-nosotros/estudia-con-nosotros.component';
import {EcnValencianoComponent} from './ecn-valenciano/ecn-valenciano.component';
import {EcnTitulacionesComponent} from './ecn-titulaciones/ecn-titulaciones.component';
import {EcnAccesosComponent} from './ecn-accesos/ecn-accesos.component';
import {EcnRefuerzosComponent} from './ecn-refuerzos/ecn-refuerzos.component';
import {EcnBusinessComponent} from './ecn-business/ecn-business.component';
import {EsoComponent} from './ecn-refuerzos/eso/eso.component';
import {BachComponent} from './ecn-refuerzos/bach/bach.component';
import {UniComponent} from './ecn-refuerzos/uni/uni.component';
import {SuccesfullComponent} from './succesfull/succesfull.component';

const routes: Routes = [
  {path: '', component: EstudiaConNosotrosComponent},
  {path: 'succesfull', component: SuccesfullComponent},
  {path: 'valenciano', component: EcnValencianoComponent},
  {path: 'titulaciones', component: EcnTitulacionesComponent},
  {path: 'accesos', component: EcnAccesosComponent},
  {path: 'refuerzos', component: EcnRefuerzosComponent},
  {path: 'refuerzos/eso', component: EsoComponent},
  {path: 'refuerzos/bachillerato', component: BachComponent},
  {path: 'refuerzos/universidad', component: UniComponent},
  {path: 'profesional', component: EcnBusinessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiaConNosotrosRoutingModule { }
