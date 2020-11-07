import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';

import {MainComponent} from './layout/main/main.component';
import {SliderComponent} from './common/slider/slider.component';
import {ModalTerminosComponent} from './common/modal-terminos/modal-terminos.component';
import {BuscadorComponent} from './common/buscador/buscador.component';

@NgModule({
  declarations: [
    MainComponent,
    SliderComponent,
    ModalTerminosComponent,
    BuscadorComponent
  ],
    exports: [
        BuscadorComponent,
        ModalTerminosComponent
    ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
