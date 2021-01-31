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
import { ReproductorC1Component } from './cursos-valenciano/c1/reproductor-c1/reproductor-c1.component';
import { ReproductorIntensivoComponent } from './cursos-valenciano/intensivo/curso-intensivo/reproductor-intensivo/reproductor-intensivo.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ReproductorIntensivoCieacovaComponent } from './cursos-valenciano/intensivo/curso-intensivo/reproductor-intensivo-cieacova/reproductor-intensivo-cieacova.component';
import { MatriulaIntensivoComponent } from './matriula-intensivo/matriula-intensivo.component';
import { SemiintensivosComponent } from './cursos-valenciano/semiintensivos/semiintensivos.component';
import { SemiintensivoB1Component } from './cursos-valenciano/semiintensivos/semiintensivo-b1/semiintensivo-b1.component';
import { SemiintensivoC1Component } from './cursos-valenciano/semiintensivos/semiintensivo-c1/semiintensivo-c1.component';
import { SemiintensivoC2Component } from './cursos-valenciano/semiintensivos/semiintensivo-c2/semiintensivo-c2.component';
import { ReproductorSemiC2Component } from './cursos-valenciano/semiintensivos/semiintensivo-c2/reproductor/reproductor.component';
import { ReproductorSemiC1Component } from './cursos-valenciano/semiintensivos/semiintensivo-c1/reproductor/reproductor.component';
import { MatriculaSemiintensivoComponent } from './matricula-semiintensivo/matricula-semiintensivo.component';
import { ReproductorC2Component } from './cursos-valenciano/c2/reproductor-c2/reproductor-c2.component';

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
    MatriculaComponent,
    ReproductorC1Component,
    ReproductorIntensivoComponent,
    ReproductorIntensivoCieacovaComponent,
    MatriulaIntensivoComponent,
    SemiintensivosComponent,
    SemiintensivoB1Component,
    SemiintensivoC1Component,
    SemiintensivoC2Component,
    ReproductorSemiC2Component,
    ReproductorSemiC1Component,
    MatriculaSemiintensivoComponent,
    ReproductorC2Component,
  ],
  imports: [CommonModule, CursosRoutingModule, FormsModule, SharedModule],
})
export class CursosModule {}
