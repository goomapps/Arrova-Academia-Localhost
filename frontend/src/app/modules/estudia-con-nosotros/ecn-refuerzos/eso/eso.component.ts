import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

import {EstudiaConNosotrosService} from '../../services/estudia-con-nosotros.service';
import {EcnRefuerzos} from '../../models/ecn-refuerzos';

@Component({
  selector: 'app-eso',
  templateUrl: './eso.component.html',
  styleUrls: ['./eso.component.scss']
})
export class EsoComponent implements OnInit {
  ecnESO;
  constructor(
    private ecnService: EstudiaConNosotrosService,
    private router: Router,
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    this.ecnESO = {
      parte1: ['', '', '', '', '', '', '', ''],
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
    document.getElementById('contenedor2').classList.add('active');
  }

  insert(): void {
    const formulario: EcnRefuerzos = this.ecnESO;
    this.ecnService.ecnInsert(formulario).subscribe({
      next: (data) => {
        this.logger.log('ESO INSERTADO CORRECTAMENTE');
        this.toastr.success('FORMULARIO ENVIADO', 'ESO', {
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
