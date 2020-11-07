import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

import {ContactoService} from '../services/contacto.service';
import {Contacto} from '../models/contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  contacto;
  constructor(
    private contactoService: ContactoService,
    private router: Router,
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    this.contacto = {
      nombre: '',
      correo: '',
      texto: '',
      terminos: false
    };
  }

  ngOnInit(): void {
    const cb = document.getElementById('cb');

    cb.addEventListener('click', () => {
      document.getElementById('modal').classList.remove('dnone');
    });
  }

  insert(): void {
    const formulario: Contacto = this.contacto;
    this.contactoService.insert(formulario).subscribe({
      next: (data) => {
        this.logger.log('CONTACTO INSERTADO CORRECTAMENTE');
        this.toastr.success('FORMULARIO ENVIADO', 'CONTACTO', {
          toastClass: 'toast success'
        });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 1000);
      },
      error: (error) => {
        this.logger.error('FORMULARIO NO SE HA INSERTADO CORRECTAMENTE');
        this.toastr.error('EL FORMULARIO NO SE HA RELLENADO CORRECTAMENTE', 'HA HABIDO UN ERROR', {
          toastClass: 'toast error'
        });
      },
    });
  }
}
