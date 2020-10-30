import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiaConNosotrosRoutingModule } from './estudia-con-nosotros-routing.module';

import { EstudiaConNosotrosComponent } from './estudia-con-nosotros/estudia-con-nosotros.component';

@NgModule({
  declarations: [EstudiaConNosotrosComponent],
  imports: [
    CommonModule,
    EstudiaConNosotrosRoutingModule
  ]
})
export class EstudiaConNosotrosModule { }
