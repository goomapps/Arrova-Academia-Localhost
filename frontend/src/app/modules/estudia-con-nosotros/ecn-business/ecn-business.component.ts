import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

import {EstudiaConNosotrosService} from '../services/estudia-con-nosotros.service';
import {EcnProfesional} from '../models/ecn-profesional';

@Component({
  selector: 'app-ecn-business',
  templateUrl: './ecn-business.component.html',
  styleUrls: ['./ecn-business.component.scss']
})
export class EcnBusinessComponent implements OnInit {
  profesional;
  constructor(
    private ecnService: EstudiaConNosotrosService,
    private router: Router,
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    this.profesional = {
      nombreEmpresa: '',
      localidadEmpresa: '',
      direccionEmpresa: '',
      telefonoEmpresa: '',
      correoEmpresa: '',
      nombreContacto: '',
      telefonoContacto: '',
      correoContacto: '',
      terminos: false
    };
  }

  ngOnInit(): void {
    const cb = document.getElementById('cb');

    cb.addEventListener('click', () => {
      document.getElementById('modal').classList.remove('dnone');
    });
  }

  irParte1(): void {
    document.getElementById('contenedor2').classList.remove('active');
    document.getElementById('contenedor1').classList.add('active');
  }
  irParte2(): void {
    document.getElementById('contenedor1').classList.remove('active');
    document.getElementById('contenedor2').classList.add('active');
  }

  insert(): void {
    const formulario: EcnProfesional = this.profesional;
    this.ecnService.profesionalInsert(formulario).subscribe({
      next: (data) => {
        this.logger.log('PROFESIONAL INSERTADO CORRECTAMENTE');
        this.toastr.success('FORMULARIO ENVIADO', 'PROFESIONAL', {
          toastClass: 'toast success'
        });
        setTimeout(() => {
          this.router.navigate(['/estudia-con-nosotros/successfull']);
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
