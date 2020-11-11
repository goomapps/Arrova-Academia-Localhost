import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

import {CursoService} from '../services/curso.service';
import {Matricula} from '../models/matricula';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.scss']
})
export class MatriculaComponent implements OnInit {
  matricula;
  constructor(
    private matriculaService: CursoService,
    private router: Router,
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    this.matricula = {
      idUsuario: localStorage.getItem('idUsuario'),
      nombre: '',
      precio: '',
      cantidad: '',
      activo: true,
      direccion: '',
      poblacion: '',
      provincia: '',
      codigoPostal: '',
      telefono: '',
      metodoPago: '',
      proteccionDatos: false
    };
  }

  ngOnInit(): void {
    const cb = document.getElementById('cb');

    cb.addEventListener('click', () => {
      document.getElementById('modal').classList.remove('dnone');
    });
  }

  enviarMatricula(): void {
    const formulario: Matricula = this.matricula;
    this.matriculaService.matriculaInsert(formulario).subscribe({
      next: (data) => {
        console.log(formulario);
        this.logger.log('MATRICULA INSERTADA CORRECTAMENTE');
        this.toastr.success('FORMULARIO ENVIADO', 'MATRICULA', {
          toastClass: 'toast success'
        });
        setTimeout(() => {
          this.router.navigate(['/usuario']);
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
