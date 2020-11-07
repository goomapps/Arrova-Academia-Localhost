import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.scss']
})
export class PoliticasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const politica1 = document.querySelector('.item1');
    const politica2 = document.querySelector('.item2');
    const politica3 = document.querySelector('.item3');
    const politica4 = document.querySelector('.item4');
    const politica5 = document.querySelector('.item5');

    politica1.addEventListener('click', function() {
      document.getElementById('politica1').classList.remove('dnone');
      document.getElementById('politica2').classList.add('dnone');
      document.getElementById('politica3').classList.add('dnone');
      document.getElementById('politica4').classList.add('dnone');
      document.getElementById('politica5').classList.add('dnone');
    });
    politica2.addEventListener('click', function() {
      document.getElementById('politica1').classList.add('dnone');
      document.getElementById('politica2').classList.remove('dnone');
      document.getElementById('politica3').classList.add('dnone');
      document.getElementById('politica4').classList.add('dnone');
      document.getElementById('politica5').classList.add('dnone');
    });
    politica3.addEventListener('click', function() {
      document.getElementById('politica1').classList.add('dnone');
      document.getElementById('politica2').classList.add('dnone');
      document.getElementById('politica3').classList.remove('dnone');
      document.getElementById('politica4').classList.add('dnone');
      document.getElementById('politica5').classList.add('dnone');
    });
    politica4.addEventListener('click', function() {
      document.getElementById('politica1').classList.add('dnone');
      document.getElementById('politica2').classList.add('dnone');
      document.getElementById('politica3').classList.add('dnone');
      document.getElementById('politica4').classList.remove('dnone');
      document.getElementById('politica5').classList.add('dnone');
    });
    politica5.addEventListener('click', function() {
      document.getElementById('politica1').classList.add('dnone');
      document.getElementById('politica2').classList.add('dnone');
      document.getElementById('politica3').classList.add('dnone');
      document.getElementById('politica4').classList.add('dnone');
      document.getElementById('politica5').classList.remove('dnone');
    });
  }

}
