import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './layout/main/main.component';
import { PagoNotFoundComponent } from './pago-not-found/pago-not-found.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'pago-not-found', component: PagoNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
