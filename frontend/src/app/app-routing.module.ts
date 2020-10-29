import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PageNotFoundComponent} from './modules/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule)},
  {path: 'usuario', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
  {path: 'page-not-found', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
