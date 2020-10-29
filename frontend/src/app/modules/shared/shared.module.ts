import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import {MainComponent} from './layout/main/main.component';
import {SliderComponent} from './common/slider/slider.component';
import {ModalTerminosComponent} from './common/modal-terminos/modal-terminos.component';

@NgModule({
  declarations: [
    MainComponent,
    SliderComponent,
    ModalTerminosComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
