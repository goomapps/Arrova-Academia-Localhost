import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

import { UserService } from '../../../auth/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public valor: string;
  public tags:string[] = [
    'noticias',
    'estudia',
    'cursos',
    'contacto',
    'nosotros'
  ];
  public rutas = [];
  constructor(private router: Router,
              private toastr: ToastrService,
              public userService: UserService,
    ) {
  }

  ngOnInit(): void {
    $('#dropperfil').css('display', 'none');
    $('#dropbuscador').css('display', 'none');
    $('#dropestudia').css('display', 'none');
    $('#dropcursos').css('display', 'none');
    $('#dropnosotros').css('display', 'none');
    $('#dropbuscar').css('display', 'none');
    $('#droptraducciones').css('display', 'none');

    $('#search').hover(() => {
      $('#dropbuscador').show('slow');
    }, () => {
      $('#dropbuscador').css('display', 'none');
    });
    $('#estudia').hover(() => {
      $('#dropestudia').show('slow');
    }, () => {
      $('#dropestudia').css('display', 'none');
    });
    $('#cursos').hover(() => {
      $('#dropcursos').show('slow');
    }, () => {
      $('#dropcursos').css('display', 'none');
    });
    $('#nosotros').hover(() => {
      $('#dropnosotros').show('slow');
    }, () => {
      $('#dropnosotros').css('display', 'none');
    });
    $('#traducciones').hover(() => {
      $('#droptraducciones').show('slow');
    }, () => {
      $('#droptraducciones').css('display', 'none');
    });
    $('#perfil').hover(() => {
      $('#dropperfil').show('slow');
    }, () => {
      $('#dropperfil').css('display', 'none');
    });

    $('#menu').click(() => {
      this.rutas = [];
      $('#menuResponsive').toggleClass('menuResponsive1');
      $('#menuResponsive').toggleClass('menuResponsive');
    });
  }


  handleSearch(value: string): void {
    this.rutas = [];
    this.valor = value;
    this.tags.forEach(e => {
      for (let i = 0; i <= value.length; i++) {
        if (e.charAt(i) == value.charAt(i) && e.includes(this.valor)) {
          if (!this.rutas.includes(e)) {
            this.rutas.push(e);
          };
        };
      };
      $('#dropbuscar').show('slow');
    });

    
  }

  search(value: string): void {
    if (this.tags.includes(this.valor)) {
      this.router.navigate(['/' + this.valor]);
    } else {
      this.toastr.error('LA RUTA NO EXISTE.', 'HA HABIDO UN ERROR', {
        toastClass: 'toast error'
      });
    }
  }


}
