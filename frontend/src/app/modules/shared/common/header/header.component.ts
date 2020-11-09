import { HttpHeaders } from '@angular/common/http';
import { CompileShallowModuleMetadata } from '@angular/compiler';
import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public valor: string;
  public  tags = [
    "noticias",
    "estudia",
    "cursos",
    "contacto",
    "nosotros"
  ];
  constructor(private router: Router,
    private toastr: ToastrService
    ) {
  }

  ngOnInit(): void {
    $('#dropbuscador').css('display', 'none');
    $('#dropestudia').css('display', 'none');
    $('#dropcursos').css('display', 'none');
    $('#dropnosotros').css('display', 'none');
    $('#dropbuscar').css('display', 'none');
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


  handleSearch(value: string): void {
    this.valor = value;
    let palabras = [];
    console.log(value.substring(1));
    //console.log(value.length);
    this.tags.forEach(e =>{
      for(let i=0; i<=value.length; i++){
        if(e.charAt(i) == value.charAt(i)){
          if(!palabras.includes(e)){
            palabras.push(e);
          } 
        }else{
          //palabras.splice(palabras.indexOf(e),2);
        }
      };
    });
    
      $('#dropbuscar').show('slow');
      //$('#dropnosotros').css('display', 'none');
  }

  search(value: string): void {
    if(this.tags.includes(this.valor)){
      this.router.navigate(['/'+this.valor]);
    }else{
      this.toastr.error('LA RUTA NO EXISTE.', 'HA HABIDO UN ERROR', {
        toastClass: 'toast error'
      });
    }
  }

  
}
