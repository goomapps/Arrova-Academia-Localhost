import { Component, OnInit } from '@angular/core';
import { Matricula } from '../models/matricula';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.scss']
})
export class MatriculaComponent implements OnInit {

  constructor(public matricula: Matricula) { }

  ngOnInit(): void {
  }

}
