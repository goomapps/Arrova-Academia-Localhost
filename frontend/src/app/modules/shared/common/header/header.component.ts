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
    $('#search').hide();
  }
  goSearch(): void {
    $('#search').hide();
    $('#menu').show('fast');
  }
  goMenu(): void {
    $('#menu').hide();
    $('#search').show('fast');
  }
}
