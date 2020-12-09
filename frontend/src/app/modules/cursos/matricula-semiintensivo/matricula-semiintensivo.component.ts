import { Component, OnInit } from '@angular/core';
import {loadStripe} from '@stripe/stripe-js';
import {environment} from '../../../../environments/environment';
import {UserService} from '../../auth/services/user.service';
import {CursoService} from '../services/curso.service';
import {Router} from '@angular/router';
import {NGXLogger} from 'ngx-logger';
import {ToastrService} from 'ngx-toastr';
import * as $ from 'jquery';
import {Matricula} from '../models/matricula';

@Component({
  selector: 'app-matricula-semiintensivo',
  templateUrl: './matricula-semiintensivo.component.html',
  styleUrls: ['./matricula-semiintensivo.component.scss']
})
export class MatriculaSemiintensivoComponent implements OnInit {
  stripePromise = loadStripe(environment.stripe_key);
  priceId;
  quantity = 1;
  mode;
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
      numeroCuenta: '',
      proteccionDatos: false,
    };
  }

  ngOnInit(): void {
    $('#dropnombre').css('display', 'none');
    $('#droptipo').css('display', 'none');
    $('#droppago').css('display', 'none');

    $('#nombre').hover(
      () => {
        $('#dropnombre').show('slow');
      },
      () => {
        $('#dropnombre').css('display', 'none');
      }
    );
    $('#tipo').hover(
      () => {
        $('#droptipo').show('slow');
      },
      () => {
        $('#droptipo').css('display', 'none');
      }
    );
    $('#pago').hover(
      () => {
        $('#droppago').show('slow');
      },
      () => {
        $('#droppago').css('display', 'none');
      }
    );

    document.getElementById('nombre1').addEventListener('click', () => {
      this.matricula.nombre = 'VALENCIANO SEMI INTENSIVO B1';
    });
    document.getElementById('nombre2').addEventListener('click', () => {
      this.matricula.nombre = 'VALENCIANO SEMI INTENSIVO C1';
    });
    document.getElementById('nombre3').addEventListener('click', () => {
      this.matricula.nombre = 'VALENCIANO SEMI INTENSIVO C2';
    });
    document.getElementById('tipo1').addEventListener('click', () => {
      this.matricula.precio = 'MENSUAL';
      this.matricula.cantidad = 55;
      this.priceId = 'price_1HvRKED0onrjQj4Py8oecKKP';
      this.mode = 'subscription';
    });
    document.getElementById('tipo2').addEventListener('click', () => {
      this.matricula.precio = 'TOTAL';
      this.matricula.cantidad = 300;
      this.priceId = 'price_1HvRKXD0onrjQj4PahnTNkY3';
      this.mode = 'payment';
    });
    document.getElementById('pago1').addEventListener('click', () => {
      this.matricula.metodoPago = 'DOMICILIACIÓN';
      this.matricula.numeroCuenta = '';
      $('.input-contenedor-numeroCuenta').css('display', 'block');
    });
    document.getElementById('pago2').addEventListener('click', () => {
      this.matricula.metodoPago = 'TRANSFERENCIA';
      this.matricula.numeroCuenta = 'ES55 2100 3932 5602 0025 9667';
      $('.input-contenedor-numeroCuenta').css('display', 'block');
    });
    document.getElementById('pago3').addEventListener('click', () => {
      this.matricula.metodoPago = 'TARJETA';
      this.matricula.numeroCuenta = 'PAGO CON TARJETA';
      $('.input-contenedor-numeroCuenta').css('display', 'none');
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
          toastClass: 'toast success',
        });
        setTimeout(() => {
          this.router.navigate(['/usuario']);
        }, 1000);
      },
      error: (error) => {
        this.logger.error('FORMULARIO NO SE HA INSERTADO CORRECTAMENTE');
        this.toastr.error(
          'EL FORMULARIO NO SE HA RELLENADO CORRECTAMENTE',
          'HA HABIDO UN ERROR',
          {
            toastClass: 'toast error',
          }
        );
      },
    });
  }

  async checkout() {
    const stripe = await this.stripePromise;
    const { error } = await stripe.redirectToCheckout({
      mode: this.mode,
      lineItems: [{ price: this.priceId, quantity: this.quantity }],
      successUrl: 'http://arrovacademia.es/usuario',
      cancelUrl: 'http://arrovacademia.es/home/pago-not-found',
    });
    if (error) {
      console.log(error);
    }
  }
}
