import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EstudiaConNosotrosComponent} from './estudia-con-nosotros/estudia-con-nosotros.component';

const routes: Routes = [
  {path: '', component: EstudiaConNosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiaConNosotrosRoutingModule { }
