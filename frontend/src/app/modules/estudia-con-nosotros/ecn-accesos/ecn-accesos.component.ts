import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

import {EstudiaConNosotrosService} from '../services/estudia-con-nosotros.service';
import {EcnAccesos} from '../models/ecn-accesos';

@Component({
  selector: 'app-ecn-accesos',
  templateUrl: './ecn-accesos.component.html',
  styleUrls: ['./ecn-accesos.component.scss']
})
export class EcnAccesosComponent implements OnInit {
  ecnAccesos;
  constructor(
    private ecnService: EstudiaConNosotrosService,
    private router: Router,
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    this.ecnAccesos = {
      parte1: ['', '', '', '', ''],
      comentario1: '',
      parte2: ['', ''],
      comentario2: '',
      parte3: ['', '', '', '', ''],
      comentario3: '',
      parte4: ['', '', '', '', '', '', '', '', ''],
      comentario4: '',
      email: '',
      terminos: false
    };
  }

  ngOnInit(): void {
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
    const formulario: EcnAccesos = this.ecnAccesos;
    this.ecnService.ecnInsert(formulario).subscribe({
      next: (data) => {
        this.logger.log('ACCESOS INSERTADO CORRECTAMENTE');
        this.toastr.success('FORMULARIO ENVIADO', 'ACCESOS', {
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
