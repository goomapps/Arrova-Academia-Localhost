import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-terminos',
  templateUrl: './modal-terminos.component.html',
  styleUrls: ['./modal-terminos.component.scss']
})
export class ModalTerminosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
      document.getElementById('modal').classList.add('dnone');
    });
  }

}
