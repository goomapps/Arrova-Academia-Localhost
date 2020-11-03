import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {EstudiaConNosotrosRoutingModule} from './estudia-con-nosotros-routing.module';

import {EstudiaConNosotrosComponent} from './estudia-con-nosotros/estudia-con-nosotros.component';
import {EcnValencianoComponent} from './ecn-valenciano/ecn-valenciano.component';
import {EcnTitulacionesComponent} from './ecn-titulaciones/ecn-titulaciones.component';
import {EcnAccesosComponent} from './ecn-accesos/ecn-accesos.component';
import {EcnRefuerzosComponent} from './ecn-refuerzos/ecn-refuerzos.component';
import {EcnBusinessComponent} from './ecn-business/ecn-business.component';
import { EsoComponent } from './ecn-refuerzos/eso/eso.component';
import { BachComponent } from './ecn-refuerzos/bach/bach.component';
import { UniComponent } from './ecn-refuerzos/uni/uni.component';

@NgModule({
  declarations: [
    EstudiaConNosotrosComponent,
    EcnValencianoComponent,
    EcnTitulacionesComponent,
    EcnAccesosComponent,
    EcnRefuerzosComponent,
    EcnBusinessComponent,
    EsoComponent,
    BachComponent,
    UniComponent
  ],
    imports: [
        CommonModule,
        EstudiaConNosotrosRoutingModule,
        FormsModule
    ]
})
export class EstudiaConNosotrosModule {
}
