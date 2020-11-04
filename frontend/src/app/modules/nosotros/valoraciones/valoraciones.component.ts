import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';

import {NosotrosService} from '../services/nosotros.service';
import {Valoracion} from '../models/valoracion';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.component.html',
  styleUrls: ['./valoraciones.component.scss']
})
export class ValoracionesComponent implements OnInit {
  valoracion;
  constructor(
    private nosotrosService: NosotrosService,
    private router: Router,
    private logger: NGXLogger,
    private toastr: ToastrService
  ) {
    this.valoracion = {
      tipo: '',
      texto: '',
      rate: 0
    };
  }

  ngOnInit(): void {
    document.getElementById('item1').addEventListener('click', () => {
      this.valoracion.tipo = 'Curso';
    });
    document.getElementById('item2').addEventListener('click', () => {
      this.valoracion.tipo = 'Profesor';
    });
    document.getElementById('item3').addEventListener('click', () => {
      this.valoracion.tipo = 'Página';
    });
    document.getElementById('item4').addEventListener('click', () => {
      this.valoracion.tipo = 'General';
    });

    document.getElementById('rate1').addEventListener('click', () => {
      this.valoracion.rate = 1;
      document.getElementById('icon1').classList.remove('rated');
      document.getElementById('icon2').classList.remove('rated');
      document.getElementById('icon3').classList.remove('rated');
      document.getElementById('icon4').classList.remove('rated');
      document.getElementById('icon5').classList.add('rated');
    });
    document.getElementById('rate2').addEventListener('click', () => {
      this.valoracion.rate = 2;
      document.getElementById('icon1').classList.remove('rated');
      document.getElementById('icon2').classList.remove('rated');
      document.getElementById('icon3').classList.remove('rated');
      document.getElementById('icon4').classList.add('rated');
      document.getElementById('icon5').classList.add('rated');
    });
    document.getElementById('rate3').addEventListener('click', () => {
      this.valoracion.rate = 3;
      document.getElementById('icon1').classList.remove('rated');
      document.getElementById('icon2').classList.remove('rated');
      document.getElementById('icon3').classList.add('rated');
      document.getElementById('icon4').classList.add('rated');
      document.getElementById('icon5').classList.add('rated');
    });
    document.getElementById('rate4').addEventListener('click', () => {
      this.valoracion.rate = 4;
      document.getElementById('icon1').classList.remove('rated');
      document.getElementById('icon2').classList.add('rated');
      document.getElementById('icon3').classList.add('rated');
      document.getElementById('icon4').classList.add('rated');
      document.getElementById('icon5').classList.add('rated');
    });
    document.getElementById('rate5').addEventListener('click', () => {
      this.valoracion.rate = 5;
      document.getElementById('icon1').classList.add('rated');
      document.getElementById('icon2').classList.add('rated');
      document.getElementById('icon3').classList.add('rated');
      document.getElementById('icon4').classList.add('rated');
      document.getElementById('icon5').classList.add('rated');
    });
  }

  sendValoracion() {
    const formulario: Valoracion = this.valoracion;
    this.nosotrosService.insert(formulario).subscribe({
      next: (data) => {
        this.logger.log('VALORACIÓN INSERTADA CORRECTAMENTE');
        this.toastr.success('VALORACIÓN INSERTADA CORRECTAMENTE', 'VALORACIÓN', {
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
