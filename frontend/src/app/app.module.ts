import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from 'src/app/modules/shared/common/header/header.component';
import {FooterComponent} from 'src/app/modules/shared/common/footer/footer.component';
import {PageNotFoundComponent} from 'src/app/modules/shared/page-not-found/page-not-found.component';
import {MainComponent} from 'src/app/modules/shared/layout/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    MainComponent
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
