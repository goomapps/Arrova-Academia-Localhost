import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {environment} from '../environments/environment';

import {ToastrModule} from 'ngx-toastr';
import {LoggerModule} from 'ngx-logger';
import {NgxSpinnerModule} from 'ngx-spinner';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from 'src/app/modules/shared/common/header/header.component';
import {FooterComponent} from 'src/app/modules/shared/common/footer/footer.component';
import {PageNotFoundComponent} from 'src/app/modules/shared/page-not-found/page-not-found.component';
import {LoadingComponent} from './modules/shared/layout/loading/loading.component';
import {SharedModule} from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 3500,
    }),
    LoggerModule.forRoot({
      serverLoggingUrl: `${environment.API_URL}/logs/insert`,
      level: environment.logLevel,
      serverLogLevel: environment.serverLogLevel
    }),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
