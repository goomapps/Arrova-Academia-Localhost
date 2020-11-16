import { Component, OnInit } from '@angular/core';
import {UserService} from '../../auth/services/user.service';
import {CursoService} from '../services/curso.service';
import {Router} from '@angular/router';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';
import * as $ from 'jquery';
import {Matricula} from '../models/matricula';

@Component({
  selector: 'app-matriula-intensivo',
  templateUrl: './matriula-intensivo.component.html',
  styleUrls: ['./matriula-intensivo.component.scss']
})
export class MatriulaIntensivoComponent implements OnInit {
  matricula;
  identity;
  constructor(
    private userService: UserService,
    private matriculaService: CursoService,
    private router: Router,
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    this.identity = this.userService.getIdentity();
    this.matricula = {
      usuario: this.identity._id,
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
    $('#dropnombre').css('display', 'none');
    $('#droptipo').css('display', 'none');
    $('#droppago').css('display', 'none');

    $('#nombre').hover(() => {
      $('#dropnombre').show('slow');
    }, () => {
      $('#dropnombre').css('display', 'none');
    });
    $('#tipo').hover(() => {
      $('#droptipo').show('slow');
    }, () => {
      $('#droptipo').css('display', 'none');
    });
    $('#pago').hover(() => {
      $('#droppago').show('slow');
    }, () => {
      $('#droppago').css('display', 'none');
    });

    document.getElementById('nombre1').addEventListener('click', () => {
      this.matricula.nombre = 'VALENCIANO INTENSIVO JQCV';
    });
    document.getElementById('nombre2').addEventListener('click', () => {
      this.matricula.nombre = 'VALENCIANO INTENSIVO CIEACOVA';
    });
    document.getElementById('tipo2').addEventListener('click', () => {
      this.matricula.precio = 'TOTAL';
      this.matricula.cantidad = 200;
    });
    document.getElementById('pago1').addEventListener('click', () => {
      this.matricula.metodoPago = 'DOMICILIACIÓN';
    });
    document.getElementById('pago2').addEventListener('click', () => {
      this.matricula.metodoPago = 'TRANSFERENCIA';
    });

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
