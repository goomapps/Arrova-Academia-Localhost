import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';

import { ContactoComponent } from './contacto/contacto.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ContactoComponent
  ],
    imports: [
        CommonModule,
        ContactoRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class ContactoModule { }
