import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    $('#dropbuscador').css('display', 'none');
    $('#dropestudia').css('display', 'none');
    $('#dropcursos').css('display', 'none');
    $('#dropnosotros').css('display', 'none');
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

    $('#menu').click(() => {
      $('#menuResponsive').toggleClass('menuResponsive1');
      $('#menuResponsive').toggleClass('menuResponsive');
    });
  }

  search(): void {
    console.log('busqueda');
  }

  handleSearch(value: string): void {
    console.log(value);
  }
}
