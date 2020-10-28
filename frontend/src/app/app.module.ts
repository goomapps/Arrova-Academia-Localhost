import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from 'src/app/modules/shared/common/header/header.component';
import {FooterComponent} from 'src/app/modules/shared/common/footer/footer.component';
import {PageNotFoundComponent} from 'src/app/modules/shared/page-not-found/page-not-found.component';
import {MainComponent} from 'src/app/modules/shared/layout/main/main.component';
import {LoadingComponent} from './modules/shared/layout/loading/loading.component';
import {SliderComponent} from './modules/shared/common/slider/slider.component';
import {ModalTerminosComponent} from './modules/shared/common/modal-terminos/modal-terminos.component';
import {LoginComponent} from './modules/auth/login/login.component';
import {RegisterComponent} from './modules/auth/register/register.component';
import {PerfilComponent} from './modules/auth/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    MainComponent,
    LoadingComponent,
    SliderComponent,
    ModalTerminosComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
