import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { PagoNotFoundComponent } from './modules/shared/pago-not-found/pago-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/shared/shared.module').then((m) => m.SharedModule),
  },
  {
    path: 'usuario',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'estudia-con-nosotros',
    loadChildren: () =>
      import('./modules/estudia-con-nosotros/estudia-con-nosotros.module').then(
        (m) => m.EstudiaConNosotrosModule
      ),
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./modules/cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./modules/contacto/contacto.module').then(
        (m) => m.ContactoModule
      ),
  },
  {
    path: 'nosotros',
    loadChildren: () =>
      import('./modules/nosotros/nosotros.module').then(
        (m) => m.NosotrosModule
      ),
  },
  {
    path: 'politicas',
    loadChildren: () =>
      import('./modules/politicas/politicas.module').then(
        (m) => m.PoliticasModule
      ),
  },
  {
    path: 'noticias',
    loadChildren: () =>
      import('./modules/noticias/noticias.module').then(
        (m) => m.NoticiasModule
      ),
  },
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
