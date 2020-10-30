import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#menu').css('display', 'none');
    $('#buscador').css('display', 'none');
  }
  goSearch(): void {
    $('#search').css('display', 'none');
    $('#navegador').css('display', 'none');
    $('#menu').show('slow');
    $('#buscador').show('slow');
  }
  goMenu(): void {
    $('#menu').css('display', 'none');
    $('#buscador').css('display', 'none');
    $('#search').show('slow');
    $('#navegador').show('slow');
  }
  search(): void {
  console.log('busqueda');
  }
  handleSearch(value: string): void {
    console.log(value);
  }
}
