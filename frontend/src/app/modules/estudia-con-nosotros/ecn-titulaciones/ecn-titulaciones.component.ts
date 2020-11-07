import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

import {EstudiaConNosotrosService} from '../services/estudia-con-nosotros.service';
import {EcnTitulaciones} from '../models/ecn-titulaciones';

@Component({
  selector: 'app-ecn-titulaciones',
  templateUrl: './ecn-titulaciones.component.html',
  styleUrls: ['./ecn-titulaciones.component.scss']
})
export class EcnTitulacionesComponent implements OnInit {
  ecnTitulaciones;
  constructor(
    private ecnService: EstudiaConNosotrosService,
    private router: Router,
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    this.ecnTitulaciones = {
      parte1: ['', ''],
      comentario1: '',
      parte2: ['', ''],
      comentario2: '',
      parte3: ['', '', '', '', ''],
      comentario3: '',
      parte4: ['', '', '', '', ''],
      comentario4: '',
      email: '',
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
    document.getElementById('contenedor3').classList.remove('active');
    document.getElementById('contenedor2').classList.add('active');
  }
  irParte3(): void {
    document.getElementById('contenedor2').classList.remove('active');
    document.getElementById('contenedor4').classList.remove('active');
    document.getElementById('contenedor3').classList.add('active');
  }
  irParte4(): void {
    document.getElementById('contenedor3').classList.remove('active');
    document.getElementById('contenedor5').classList.remove('active');
    document.getElementById('contenedor4').classList.add('active');
  }
  irParte5(): void {
    document.getElementById('contenedor4').classList.remove('active');
    document.getElementById('contenedor5').classList.add('active');
  }

  insert(): void {
    const formulario: EcnTitulaciones = this.ecnTitulaciones;
    this.ecnService.ecnInsert(formulario).subscribe({
      next: (data) => {
        this.logger.log('TITULACION INSERTADA CORRECTAMENTE');
        this.toastr.success('FORMULARIO ENVIADO', 'TITULACION', {
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
