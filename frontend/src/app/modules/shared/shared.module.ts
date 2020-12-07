import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';

import { MainComponent } from './layout/main/main.component';
import { SliderComponent } from './common/slider/slider.component';
import { ModalTerminosComponent } from './common/modal-terminos/modal-terminos.component';
import { BuscadorComponent } from './common/buscador/buscador.component';
import { PagoNotFoundComponent } from './pago-not-found/pago-not-found.component';

@NgModule({
  declarations: [
    MainComponent,
    SliderComponent,
    ModalTerminosComponent,
    BuscadorComponent,
    PagoNotFoundComponent,
  ],
  exports: [BuscadorComponent, ModalTerminosComponent],
  imports: [CommonModule, SharedRoutingModule, ReactiveFormsModule],
  providers: [],
})
export class SharedModule {}
